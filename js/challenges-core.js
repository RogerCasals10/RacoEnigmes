    function localized(ca, en, es) {
      return { ca, en, es }[currentLanguage] || ca;
    }

    let arithmeticOperations = [];
    let arithmeticOperationIndex = 0;
    let arithmeticTimeLeft = 0;
    let arithmeticTimerId = null;

    function createArithmeticOperations(level) {
      const operationCount = 2 + Math.ceil(level / 2);
      return Array.from({ length: operationCount }, (_, index) => {
        const type = (level + index - 1) % 4;
        if (level <= 3) {
          if (type === 0) {
            const a = level * 5 + index * 3 + 4;
            const b = level * 2 + index + 3;
            return { prompt: localized(`Quant fa ${a} + ${b}?`, `What is ${a} + ${b}?`, `¿Cuánto es ${a} + ${b}?`), answer: a + b };
          }
          if (type === 1) {
            const b = level + index + 2;
            const a = b + level * 4 + 5;
            return { prompt: localized(`Quant fa ${a} − ${b}?`, `What is ${a} − ${b}?`, `¿Cuánto es ${a} − ${b}?`), answer: a - b };
          }
          if (type === 2) {
            const a = level + 2;
            const b = index + 3;
            return { prompt: localized(`Quant fa ${a} × ${b}?`, `What is ${a} × ${b}?`, `¿Cuánto es ${a} × ${b}?`), answer: a * b };
          }
          const divisor = level + 2;
          const quotient = index + 3;
          return {
            prompt: localized(`Quant fa ${divisor * quotient} ÷ ${divisor}?`, `What is ${divisor * quotient} ÷ ${divisor}?`, `¿Cuánto es ${divisor * quotient} ÷ ${divisor}?`),
            answer: quotient
          };
        }

        const a = level + index + 4;
        const b = level + 2;
        const c = index + 2;
        if (type === 0) {
          return {
            prompt: localized(`Quant fa ${a} + ${b} × ${c}?`, `What is ${a} + ${b} × ${c}?`, `¿Cuánto es ${a} + ${b} × ${c}?`),
            answer: a + b * c
          };
        }
        if (type === 1) {
          return {
            prompt: localized(`Quant fa ${a} × ${b} − ${c}?`, `What is ${a} × ${b} − ${c}?`, `¿Cuánto es ${a} × ${b} − ${c}?`),
            answer: a * b - c
          };
        }
        if (type === 2) {
          return {
            prompt: localized(`Quant fa (${a} + ${b}) × ${c}?`, `What is (${a} + ${b}) × ${c}?`, `¿Cuánto es (${a} + ${b}) × ${c}?`),
            answer: (a + b) * c
          };
        }
        return {
          prompt: localized(`Quant fa ${a * b} ÷ ${a} + ${c}?`, `What is ${a * b} ÷ ${a} + ${c}?`, `¿Cuánto es ${a * b} ÷ ${a} + ${c}?`),
          answer: b + c
        };
      });
    }

    function clearArithmeticTimer() {
      if (arithmeticTimerId !== null) {
        window.clearInterval(arithmeticTimerId);
        arithmeticTimerId = null;
      }
    }

    function renderArithmeticOperation() {
      const operation = arithmeticOperations[arithmeticOperationIndex];
      document.getElementById("extra-level-label").textContent = localized(
        `Nivell ${currentLevel} / ${categoryLevelCount(currentCategory)} · Operació ${arithmeticOperationIndex + 1} / ${arithmeticOperations.length}`,
        `Level ${currentLevel} / ${categoryLevelCount(currentCategory)} · Operation ${arithmeticOperationIndex + 1} / ${arithmeticOperations.length}`,
        `Nivel ${currentLevel} / ${categoryLevelCount(currentCategory)} · Operación ${arithmeticOperationIndex + 1} / ${arithmeticOperations.length}`
      );
      document.getElementById("extra-prompt").textContent = operation.prompt;
      document.getElementById("extra-input").value = "";
    }

    function updateArithmeticTimerText() {
      document.getElementById("arithmetic-timer").textContent = localized(
        `Temps restant: ${arithmeticTimeLeft} s`,
        `Time left: ${arithmeticTimeLeft}s`,
        `Tiempo restante: ${arithmeticTimeLeft} s`
      );
    }

    function startArithmeticTimer() {
      clearArithmeticTimer();
      const timer = document.getElementById("arithmetic-timer");
      timer.hidden = false;
      if (currentLevel <= 3) {
        timer.textContent = translateValue("Sense límit de temps");
        return;
      }
      arithmeticTimeLeft = 45 - (currentLevel - 4) * 3;
      updateArithmeticTimerText();
      arithmeticTimerId = window.setInterval(() => {
        arithmeticTimeLeft -= 1;
        if (arithmeticTimeLeft <= 0) {
          clearArithmeticTimer();
          arithmeticOperationIndex = 0;
          renderArithmeticOperation();
          const feedback = document.getElementById("extra-feedback");
          feedback.textContent = localized(
            "S'ha acabat el temps. Tornes a la primera operació.",
            "Time is up. Back to the first operation.",
            "Se acabó el tiempo. Vuelves a la primera operación."
          );
          feedback.className = "extra-feedback error";
          startArithmeticTimer();
          return;
        }
        updateArithmeticTimerText();
      }, 1000);
    }

    function submitArithmeticAnswer(value) {
      const feedback = document.getElementById("extra-feedback");
      const operation = arithmeticOperations[arithmeticOperationIndex];
      if (Number(value) !== operation.answer) {
        arithmeticOperationIndex = 0;
        renderArithmeticOperation();
        feedback.textContent = localized(
          "Resposta incorrecta. Tornes a la primera operació.",
          "Incorrect answer. Back to the first operation.",
          "Respuesta incorrecta. Vuelves a la primera operación."
        );
        feedback.className = "extra-feedback error";
        return;
      }
      arithmeticOperationIndex += 1;
      if (arithmeticOperationIndex === arithmeticOperations.length) {
        clearArithmeticTimer();
        document.getElementById("arithmetic-timer").hidden = true;
        feedback.textContent = translateValue("Correcte! Nivell completat.");
        feedback.className = "extra-feedback success";
        document.getElementById("extra-input").disabled = true;
        document.querySelector('#extra-form button[type="submit"]').disabled = true;
        markLevelSolved();
        return;
      }
      renderArithmeticOperation();
      feedback.textContent = localized(
        "Correcte! Següent operació.",
        "Correct! Next operation.",
        "¡Correcto! Siguiente operación."
      );
      feedback.className = "extra-feedback success";
    }

    function createExtraChallenge(category, level) {
      const generators = {
        "anagrams": createAnagramsChallenge,
        "arithmetic": createArithmeticChallenge,
        "calendar": createCalendarChallenge,
        "chess": createChessChallenge,
        "cipher": createCipherChallenge,
        "coordinates": createCoordinatesChallenge,
        "directions": createDirectionsChallenge,
        "estimation": createEstimationChallenge,
        "geometry": createGeometryChallenge,
        "laser": createLaserChallenge,
        "logic-grid": createLogicGridChallenge,
        "mini-grid": createMiniGridChallenge,
        "nonogram": createNonogramChallenge,
        "oddone": createOddoneChallenge,
        "projections": createProjectionsChallenge,
        "riddles": createRiddlesChallenge,
        "shapes": createShapesChallenge,
        "tiling": createTilingChallenge,
        "weights": createWeightsChallenge,
      };
      const generator = generators[category];
      if (!generator) throw new Error(`No hi ha cap generador per a la categoria ${category}.`);
      return generator(category, level);
    }
