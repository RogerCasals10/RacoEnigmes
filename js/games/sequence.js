    function newSequenceGame() {
      const sequenceIndex = randomModeActive ? Math.floor(Math.random() * sequenceChallenges.length) : currentLevel - 1;
      activeSequence = sequenceChallenges[sequenceIndex];
      const items = document.getElementById("sequence-items");
      items.replaceChildren();
      [...activeSequence.items, "?"].forEach((value) => {
        const tile = document.createElement("span");
        tile.textContent = String(value);
        items.append(tile);
      });
      document.getElementById("sequence-answer").value = "";
      document.getElementById("sequence-message").textContent = "";
      document.getElementById("sequence-message").className = "message";
      document.getElementById("sequence-answer").disabled = false;
      document.querySelector('#sequence-form button[type="submit"]').disabled = false;
    }

    document.getElementById("sequence-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const message = document.getElementById("sequence-message");
      if (Number(document.getElementById("sequence-answer").value) === activeSequence.answer) {
        message.textContent = localized(
          `Correcte! ${activeSequence.hint.ca}`,
          `Correct! ${activeSequence.hint.en}`,
          `¡Correcto! ${activeSequence.hint.es}`
        );
        message.className = "message success";
        document.getElementById("sequence-answer").disabled = true;
        document.querySelector('#sequence-form button[type="submit"]').disabled = true;
        markLevelSolved();
      } else {
        message.textContent = "Encara no. Busca el patró que relaciona els nombres.";
        message.className = "message error";
      }
    });
    document.getElementById("new-sequence").addEventListener("click", newSequenceGame);

    let secretCode = [];
    let mastermindAttempts = 0;
    let mastermindFinished = false;
    let mastermindAvailableSymbols = [];
    let mastermindCodeLength = 4;
    let mastermindAttemptLimit = 7;
    let mastermindSymbolRange = "";

    document.getElementById("mastermind-input").addEventListener("input", (event) => {
      const input = event.currentTarget;
      input.value = input.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, mastermindCodeLength);
    });

