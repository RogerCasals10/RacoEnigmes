    function newEscapeGame() {
      const firstAdvancedEscapeLevel = 11;
      let roundIndex = randomModeActive
        ? Math.floor(Math.random() * escapeRounds.length)
        : currentLevel < firstAdvancedEscapeLevel
          ? (currentLevel - 1) % 3
          : currentLevel - 1;
      if (randomModeActive && roundIndex === lastEscapeRound) roundIndex = (roundIndex + 1) % escapeRounds.length;
      lastEscapeRound = roundIndex;
      const round = escapeRounds[roundIndex];
      activeEscapeCode = round.code;
      const clues = document.getElementById("escape-clues");
      clues.replaceChildren();
      round.clues.forEach((clue) => {
        const item = document.createElement("li");
        item.textContent = clue;
        clues.append(item);
      });
      document.getElementById("lock-icon").textContent = "🔒";
      document.getElementById("lock-title").textContent = "El pany electrònic";
      document.getElementById("lock-copy").textContent = "Introdueix les tres xifres en ordre.";
      document.getElementById("code-message").textContent = "";
      document.getElementById("code-message").className = "message";
      document.getElementById("code-input").value = "";
      codeForm.hidden = false;
      document.getElementById("reset-escape").hidden = true;
    }

    const memorySymbols = ["🌙", "☀️", "⭐", "☁️", "🔥", "💧"];
    const memoryButtons = [...document.querySelectorAll(".symbol-button")];
    let memorySequence = [];
    let memoryProgress = 0;
    let memoryActive = false;
    let memoryReverse = false;

