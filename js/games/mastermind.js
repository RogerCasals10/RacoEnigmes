    function mastermindStatusText(remainingAttempts) {
      return localized(
        `Et queden ${remainingAttempts} intents. Codi de ${mastermindCodeLength} símbols. Disponibles: ${mastermindSymbolRange}.`,
        `${remainingAttempts} guesses remaining. Code length: ${mastermindCodeLength} symbols. Available: ${mastermindSymbolRange}.`,
        `Te quedan ${remainingAttempts} intentos. Código de ${mastermindCodeLength} símbolos. Disponibles: ${mastermindSymbolRange}.`
      );
    }

    function newMastermindGame() {
      const digitCount = Math.min(6 + Math.floor((currentLevel - 1) / 2), 9);
      const letterCount = currentLevel + 1;
      const digits = Array.from({ length: digitCount }, (_, index) => String(index + 1));
      const letters = Array.from({ length: letterCount }, (_, index) => String.fromCharCode(65 + index));
      mastermindAvailableSymbols = [...digits, ...letters];
      mastermindCodeLength = 4 + Math.floor((currentLevel - 1) / 2);
      mastermindAttemptLimit = 6 + Math.ceil(currentLevel / 2);
      const codeSymbols = [digits[Math.floor(Math.random() * digits.length)], letters[Math.floor(Math.random() * letters.length)]];
      const remainingSymbols = randomize(mastermindAvailableSymbols.filter((symbol) => !codeSymbols.includes(symbol)));
      codeSymbols.push(...remainingSymbols.slice(0, mastermindCodeLength - codeSymbols.length));
      secretCode = randomize(codeSymbols);
      mastermindAttempts = 0;
      mastermindFinished = false;
      document.getElementById("mastermind-history").replaceChildren();
      const input = document.getElementById("mastermind-input");
      input.value = "";
      input.maxLength = mastermindCodeLength;
      input.placeholder = Array.from({ length: mastermindCodeLength }, (_, index) => index + 1).join(" ");
      input.disabled = false;
      document.querySelector('#mastermind-form button[type="submit"]').disabled = false;
      mastermindSymbolRange = `1–${digitCount}, A–${letters[letters.length - 1]}`;
      document.getElementById("mastermind-turns").textContent = mastermindStatusText(mastermindAttemptLimit);
      document.getElementById("mastermind-message").textContent = "";
      document.getElementById("mastermind-message").className = "message";
    }

    document.getElementById("mastermind-form").addEventListener("submit", (event) => {
      event.preventDefault();
      if (mastermindFinished) return;
      const guess = [...document.getElementById("mastermind-input").value.toUpperCase()];
      const message = document.getElementById("mastermind-message");
      if (guess.length !== mastermindCodeLength
        || new Set(guess).size !== mastermindCodeLength
        || guess.some((symbol) => !mastermindAvailableSymbols.includes(symbol))) {
        message.textContent = localized(
          "Escriu el nombre de símbols indicat, sense repetir-ne cap i fent servir només els disponibles.",
          "Enter the indicated number of symbols, without repeats, using only the available symbols.",
          "Escribe el número de símbolos indicado, sin repetir ninguno y usando solo los disponibles."
        );
        message.className = "message error";
        return;
      }
      mastermindAttempts += 1;
      const correctTypes = guess.filter((symbol, index) => /^[0-9]$/.test(symbol) === /^[0-9]$/.test(secretCode[index])).length;
      const entry = document.createElement("li");
      entry.textContent = localized(
        `${guess.join("")} — ${correctTypes} posicions amb el tipus correcte (lletra o xifra).`,
        `${guess.join("")} — ${correctTypes} positions with the right type (letter or digit).`,
        `${guess.join("")} — ${correctTypes} posiciones con el tipo correcto (letra o cifra).`
      );
      document.getElementById("mastermind-history").prepend(entry);
      document.getElementById("mastermind-input").value = "";
      if (guess.join("") === secretCode.join("")) {
        mastermindFinished = true;
        message.textContent = localized(
          `Codi descobert en ${mastermindAttempts} ${mastermindAttempts === 1 ? "intent" : "intents"}!`,
          `Code cracked in ${mastermindAttempts} ${mastermindAttempts === 1 ? "guess" : "guesses"}!`,
          `¡Código descubierto en ${mastermindAttempts} ${mastermindAttempts === 1 ? "intento" : "intentos"}!`
        );
        message.className = "message success";
        markLevelSolved();
      } else if (mastermindAttempts === mastermindAttemptLimit) {
        mastermindFinished = true;
        message.textContent = localized(
          "S'han acabat els intents. Inicia un codi nou per tornar-ho a provar.",
          "No attempts left. Start a new code to try again.",
          "Se acabaron los intentos. Inicia un código nuevo para volver a probar."
        );
        message.className = "message error";
      } else {
        document.getElementById("mastermind-turns").textContent = mastermindStatusText(mastermindAttemptLimit - mastermindAttempts);
        message.textContent = localized(
          `${correctTypes} posicions tenen el tipus correcte (lletra o xifra).`,
          `${correctTypes} positions have the right type (letter or digit).`,
          `${correctTypes} posiciones tienen el tipo correcto (letra o cifra).`
        );
        message.className = "message";
      }
      if (mastermindFinished) {
        document.getElementById("mastermind-input").disabled = true;
        document.querySelector('#mastermind-form button[type="submit"]').disabled = true;
      }
    });
    document.getElementById("new-mastermind").addEventListener("click", newMastermindGame);

