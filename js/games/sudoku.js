    function renderSudoku() {
      sudokuGrid.replaceChildren();
      sudokuInputs = [];
      for (let index = 0; index < 81; index += 1) {
        const row = Math.floor(index / 9);
        const col = index % 9;
        const blankLimit = Math.min(20 + currentLevel * 4, 58);
        const given = !sudokuBlankOrder.slice(0, blankLimit).includes(index);
        const input = document.createElement("input");
        input.className = `sudoku-cell${given ? " given" : ""}`;
        input.type = "text";
        input.inputMode = "numeric";
        input.pattern = "[1-9]";
        input.maxLength = 1;
        input.value = given ? sudokuSolution[row][col] : "";
        input.disabled = given;
        input.setAttribute("aria-label", `Fila ${row + 1}, columna ${col + 1}${given ? ", pista" : ""}`);
        input.addEventListener("input", () => {
          input.value = input.value.replace(/[^1-9]/g, "").slice(0, 1);
          input.classList.remove("wrong");
        });
        sudokuInputs.push(input);
        sudokuGrid.append(input);
      }
      const message = document.getElementById("sudoku-message");
      message.textContent = "";
      message.className = "message";
    }

    document.getElementById("check-sudoku").addEventListener("click", () => {
      let empty = 0;
      let incorrect = 0;
      sudokuInputs.forEach((input, index) => {
        if (input.disabled) return;
        const expected = sudokuSolution[Math.floor(index / 9)][index % 9];
        input.classList.toggle("wrong", Boolean(input.value) && input.value !== expected);
        if (!input.value) empty += 1;
        else if (input.value !== expected) incorrect += 1;
      });
      const message = document.getElementById("sudoku-message");
      if (empty === 0 && incorrect === 0) {
        message.textContent = "Perfecte! Sudoku resolt.";
        message.className = "message success";
        markLevelSolved();
      } else {
        message.textContent = `${empty ? `${empty} caselles buides` : ""}${empty && incorrect ? " · " : ""}${incorrect ? `${incorrect} valors incorrectes` : ""}.`;
        message.className = "message error";
      }
    });
    document.getElementById("reset-sudoku").addEventListener("click", renderSudoku);

    const codeForm = document.getElementById("code-form");
    let activeEscapeCode = "428";
    codeForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const message = document.getElementById("code-message");
      if (document.getElementById("code-input").value === activeEscapeCode) {
        document.getElementById("lock-icon").textContent = "🔓";
        document.getElementById("lock-title").textContent = "Has escapat!";
        document.getElementById("lock-copy").textContent = "Les pistes eren la clau. Ben jugat!";
        message.textContent = "Codi correcte.";
        message.className = "message success";
        codeForm.hidden = true;
        document.getElementById("reset-escape").hidden = false;
        markLevelSolved();
      } else {
        message.textContent = "El pany no s'obre. Repassa les pistes i torna-ho a provar.";
        message.className = "message error";
      }
    });
    document.getElementById("reset-escape").addEventListener("click", () => {
      document.getElementById("lock-icon").textContent = "🔒";
      document.getElementById("lock-title").textContent = "El pany electrònic";
      document.getElementById("lock-copy").textContent = "Introdueix les tres xifres en ordre.";
      document.getElementById("code-message").textContent = "";
      document.getElementById("code-message").className = "message";
      document.getElementById("code-input").value = "";
      codeForm.hidden = false;
      document.getElementById("reset-escape").hidden = true;
    });

    const escapeRounds = [
      { clues: ["Quantes cantonades té una habitació rectangular?", "Quantes vegades apareix la lletra «a» a «casa»?", "Quantes potes té una aranya?"], code: "428" },
      { clues: ["Quantes potes té una cadira de quatre potes?", "Quants dies té una setmana?", "Quants costats té un triangle?"], code: "473" },
      { clues: ["Quantes potes té una aranya?", "Quants sentits se solen ensenyar a l'escola?", "Quantes rodes té una bicicleta?"], code: "852" },
      { clues: ["Quants costats té un quadrat?", "Quantes hores té mig dia?", "Quants costats té un pentàgon?"], code: "412" },
      { clues: ["Quantes estacions té l'any?", "Quants dits té una mà?", "Quants costats té un hexàgon?"], code: "566" },
      { clues: ["Quants mesos té un any?", "Quantes potes tenen dues aranyes?", "Quants costats té un quadrat?"], code: "128" },
      { clues: ["Quants colors té l'arc de Sant Martí?", "Quants dies té una setmana?", "Quantes cantonades té un rectangle?"], code: "742" },
      { clues: ["Quants costats té un octàgon?", "Quantes hores té un dia?", "Quantes potes tenen tres gats?"], code: "836" },
      { clues: ["Quantes potes tenen dues cadires de quatre potes?", "Quants minuts té un quart d'hora?", "Quants costats té un triangle?"], code: "830" },
      { clues: ["Troba x: 2x + 3 = 17.", "Quantes xifres té el resultat de 9 × 9?", "Quin és el residu de 17 ÷ 7?"], code: "723" },
      { clues: ["Quantes diagonals té un pentàgon?", "Calcula: (24 ÷ 3) − 1.", "Quin és el dígit de les unitats del primer nombre primer després de l'11?"], code: "573" },
      { clues: ["Calcula: 3³ − 20.", "Quants divisors positius té el nombre 24?", "Quin és el residu de 50 ÷ 6?"], code: "782" },
      { clues: ["Resol: 4x − 5 = 19.", "Quin és el dígit de les unitats de 7²?", "Suma les xifres de 56 i escriu-ne només la xifra de les unitats."], code: "691" },
      { clues: ["Quin és el resultat de 2⁵ − 24?", "Quants factors primers diferents té 60?", "Quina és la xifra de les unitats del nombre total de diagonals d'un hexàgon?"], code: "849" },
      { clues: ["Descompon 90 en factors primers: quants factors diferents hi apareixen?", "Una graella de 3 × 3 té 14 quadrats. Quina és la xifra de les unitats?", "Quin és el residu de 100 ÷ 9?"], code: "341" },
      { clues: ["Quin és el dígit de les unitats del mínim comú múltiple de 4, 6 i 9?", "Quants nombres de tres xifres diferents pots formar amb 1, 2 i 3?", "Resol: 5x − 7 = 18."], code: "965" },
      { clues: ["Quantes regions formen tres rectes en posició general?", "Quin és el residu de 2¹⁰ ÷ 9?", "Un nombre té dues xifres que sumen 9. La xifra de les desenes és 3. Quina és la xifra de les unitats?"], code: "746" }
    ];
    let lastEscapeRound = -1;

