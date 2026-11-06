    function shuffleGames(previousGame = "") {
      const deck = [...selectedCategories];
      if (deck.length < 2) throw new Error("El mode aleatori necessita dues categories com a mínim.");
      for (let index = deck.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [deck[index], deck[swapIndex]] = [deck[swapIndex], deck[index]];
      }
      if (deck.length > 1 && deck[0] === previousGame) [deck[0], deck[1]] = [deck[1], deck[0]];
      return deck;
    }

    function updateRandomStatus() {
      const id = randomDeck[randomPosition];
      const game = tabs.find((tab) => tab.dataset.panel === id);
      const titleNode = game.querySelector("strong").firstChild;
      const categoryName = originalTexts.get(titleNode)?.trim() || game.querySelector("strong").textContent;
      const progress = currentLanguage === "en" ? "Challenge" : currentLanguage === "es" ? "Reto" : "Repte";
      document.getElementById("random-status").textContent = `${progress} ${randomPosition + 1} ${currentLanguage === "en" ? "of" : "de"} ${randomDeck.length} · ${translateValue(categoryName)}`;
    }

    function startRandomMode() {
      randomDeck = shuffleGames();
      randomPosition = 0;
      randomModeActive = true;
      document.getElementById("start-random").hidden = true;
      document.getElementById("next-random").hidden = false;
      document.getElementById("stop-random").hidden = false;
      showGame(randomDeck[randomPosition], true);
      updateRandomStatus();
    }

    function nextRandomGame() {
      if (!randomModeActive) return;
      if (randomPosition + 1 >= randomDeck.length) {
        randomDeck = shuffleGames(randomDeck[randomPosition]);
        randomPosition = 0;
      } else {
        randomPosition += 1;
      }
      showGame(randomDeck[randomPosition], true);
      updateRandomStatus();
    }

    document.getElementById("start-random").addEventListener("click", startRandomMode);
    document.getElementById("next-random").addEventListener("click", nextRandomGame);
    document.getElementById("stop-random").addEventListener("click", () => {
      showGame(currentCategory);
    });

    gameInitializers = {
      numbers: newNumberGame,
      letters: newWordGame,
      sudoku: renderSudoku,
      escape: newEscapeGame,
      memory: newMemoryGame,
      sequence: newSequenceGame,
      mastermind: newMastermindGame,
      riddles: newExtraGame,
      arithmetic: newExtraGame,
      anagrams: newExtraGame,
      oddone: newExtraGame,
      cipher: newExtraGame,
      directions: newExtraGame,
      weights: newExtraGame,
      calendar: newExtraGame,
      "mini-grid": newExtraGame,
      shapes: newExtraGame,
      estimation: newExtraGame,
      coordinates: newExtraGame,
      chess: newExtraGame,
      geometry: newExtraGame,
      projections: newExtraGame,
      nonogram: newExtraGame,
      "logic-grid": newExtraGame,
      laser: newExtraGame,
      tiling: newExtraGame
    };

    document.getElementById("restart-level").addEventListener("click", () => {
      gameInitializers[currentCategory]?.();
    });
    document.getElementById("next-level").addEventListener("click", () => {
      if (!solvedLevels(currentCategory).includes(currentLevel) || currentLevel >= categoryLevelCount(currentCategory)) return;
      currentLevel += 1;
      levelPickerExpanded = false;
      renderLevelPicker();
      gameInitializers[currentCategory]?.();
      document.querySelector(".game-panel:not([hidden])").scrollIntoView({ block: "start", behavior: "smooth" });
    });

    renderCategorySelection();
    translationObserver.observe(document.body, { childList: true, subtree: true });
    translateTree();
    newNumberGame();
    newWordGame();
    renderSudoku();
    newEscapeGame();
    newMemoryGame();
    newSequenceGame();
    newMastermindGame();
    initializePreferences();
