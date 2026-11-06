    function activeWordBank() {
      return wordBanks[currentLanguage] || wordBank;
    }
    const vowels = "aeiou";
    const consonants = "bcdfghjklmnpqrstvwxyz";
    const letterRack = document.getElementById("letter-rack");
    const wordInput = document.getElementById("word-input");
    const wordMessage = document.getElementById("word-message");
    const wordLevelTargets = [
      [{ length: 3, count: 2 }],
      [{ length: 3, count: 3 }],
      [{ length: 3, count: 2 }, { length: 4, count: 1 }],
      [{ length: 4, count: 3 }],
      [{ length: 4, count: 2 }, { length: 5, count: 1 }],
      [{ length: 5, count: 3 }],
      [{ length: 5, count: 2 }, { length: 6, count: 1 }],
      [{ length: 5, count: 1 }, { length: 6, count: 2 }],
      [{ length: 6, count: 2 }, { length: 7, count: 1 }],
      [{ length: 6, count: 1 }, { length: 7, count: 2 }]
    ];
    let activeWordTargets = wordLevelTargets[0];
    let acceptedWords = new Map();

    function normalizeWord(word) {
      return word.toLocaleLowerCase("ca").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z]/g, "");
    }

    function canMakeWord(word, letters) {
      const available = [...letters];
      for (const letter of normalizeWord(word)) {
        const index = available.indexOf(letter);
        if (index === -1) return false;
        available.splice(index, 1);
      }
      return true;
    }

    function randomize(items) {
      for (let index = items.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [items[index], items[swapIndex]] = [items[swapIndex], items[index]];
      }
      return items;
    }

    function createWordRack(targets, bank) {
      const requirements = targets.flatMap(({ length, count }) => Array(count).fill(length));
      const wordsByLength = new Map();
      bank.forEach((word) => {
        const normalized = normalizeWord(word);
        if (!/^[a-z]+$/.test(normalized)) return;
        const words = wordsByLength.get(normalized.length) || new Set();
        words.add(normalized);
        wordsByLength.set(normalized.length, words);
      });
      const chosenWords = [];
      let requiredLetters = new Map();
      let attempts = 0;

      function chooseWord(index) {
        if (index === requirements.length) return true;
        if (attempts >= 50000) return false;
        const length = requirements[index];
        const candidates = randomize([...(wordsByLength.get(length) || [])]);
        for (const word of candidates) {
          attempts += 1;
          if (chosenWords.includes(word)) continue;
          const nextRequiredLetters = new Map(requiredLetters);
          const wordLetterCounts = new Map();
          [...word].forEach((letter) => wordLetterCounts.set(letter, (wordLetterCounts.get(letter) || 0) + 1));
          wordLetterCounts.forEach((count, letter) => {
            nextRequiredLetters.set(letter, Math.max(nextRequiredLetters.get(letter) || 0, count));
          });
          const rackSize = [...nextRequiredLetters.values()].reduce((sum, count) => sum + count, 0);
          if (rackSize > 9) continue;
          const previousRequiredLetters = requiredLetters;
          requiredLetters = nextRequiredLetters;
          chosenWords.push(word);
          if (chooseWord(index + 1)) return true;
          chosenWords.pop();
          requiredLetters = previousRequiredLetters;
        }
        return false;
      }

      if (!chooseWord(0)) return null;
      const letters = [];
      requiredLetters.forEach((count, letter) => {
        for (let index = 0; index < count; index += 1) letters.push(letter);
      });
      while (letters.length < 9) {
        const source = letters.filter((letter) => vowels.includes(letter)).length < 4 ? vowels : consonants;
        letters.push(source[Math.floor(Math.random() * source.length)]);
      }
      return randomize(letters);
    }

    function renderWordProgress() {
      const progress = document.getElementById("word-progress");
      progress.replaceChildren();
      activeWordTargets.forEach(({ length, count }) => {
        const words = [...acceptedWords.entries()]
          .filter(([word]) => word.length === length)
          .map(([, original]) => original);
        const stat = document.createElement("div");
        stat.className = "stat";
        const label = currentLanguage === "en" ? "letters" : currentLanguage === "es" ? "letras" : "lletres";
        stat.textContent = `${count} × ${length} ${label}: `;
        const total = document.createElement("strong");
        total.textContent = `${words.length}/${count}`;
        stat.append(total);
        if (words.length) {
          stat.append(document.createTextNode(` · ${words.join(", ")}`));
        }
        progress.append(stat);
      });
    }

    function isWordLevelComplete() {
      return activeWordTargets.every(({ length, count }) => [...acceptedWords.keys()].filter((word) => word.length === length).length >= count);
    }

    function newWordGame() {
      activeWordTargets = wordLevelTargets[currentLevel - 1] || wordLevelTargets[wordLevelTargets.length - 1];
      acceptedWords = new Map();
      const letters = createWordRack(activeWordTargets, activeWordBank());
      letterRack.replaceChildren();
      document.getElementById("word-level-targets").textContent = `${translateValue("OBJECTIUS DEL NIVELL")} · ${currentLevel}`;
      renderWordProgress();
      wordInput.disabled = !letters;
      document.querySelector('#word-form button[type="submit"]').disabled = !letters;
      if (!letters) {
        wordMessage.textContent = localized("Aquest nivell no es pot generar amb el diccionari actual.", "This level cannot be generated with the current dictionary.", "Este nivel no se puede generar con el diccionario actual.");
        wordMessage.className = "message error";
        return;
      }
      letters.forEach((letter) => {
        const tile = document.createElement("span");
        tile.className = "letter-tile";
        tile.textContent = letter.toLocaleUpperCase("ca");
        letterRack.append(tile);
      });
      wordInput.value = "";
      wordMessage.textContent = localized("Fes paraules de les longituds indicades.", "Make words of the listed lengths.", "Forma palabras de las longitudes indicadas.");
      wordMessage.className = "message";
    }

    document.getElementById("word-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const submitted = normalizeWord(wordInput.value);
      const letters = [...letterRack.textContent.toLocaleLowerCase("ca")];
      const found = activeWordBank().find((word) => normalizeWord(word) === submitted);
      if (!found) {
        wordMessage.textContent = "No trobo aquesta paraula al vocabulari de demostració.";
        wordMessage.className = "message error";
      } else if (!canMakeWord(found, letters)) {
        wordMessage.textContent = "Aquesta paraula necessita lletres que no tens.";
        wordMessage.className = "message error";
      } else {
        const requestedTarget = activeWordTargets.find(({ length }) => length === submitted.length);
        const wordsAtLength = [...acceptedWords.keys()].filter((word) => word.length === submitted.length);
        if (!requestedTarget) {
          wordMessage.textContent = localized("El nivell no demana paraules d'aquesta longitud.", "This level doesn't ask for words of that length.", "Este nivel no pide palabras de esa longitud.");
          wordMessage.className = "message error";
        } else if (acceptedWords.has(submitted)) {
          wordMessage.textContent = "Aquesta paraula ja compta per al nivell.";
          wordMessage.className = "message error";
        } else if (wordsAtLength.length >= requestedTarget.count) {
          wordMessage.textContent = localized("Ja has completat les paraules d'aquesta longitud.", "You've already completed the words of that length.", "Ya has completado las palabras de esa longitud.");
          wordMessage.className = "message";
        } else {
          acceptedWords.set(submitted, found);
          renderWordProgress();
          if (isWordLevelComplete()) {
            wordMessage.textContent = "Nivell completat! Has trobat totes les paraules.";
            wordMessage.className = "message success";
            markLevelSolved();
          } else {
            wordMessage.textContent = "Paraula acceptada.";
            wordMessage.className = "message success";
          }
        }
      }
      wordInput.select();
    });
    document.getElementById("new-word-game").addEventListener("click", newWordGame);

    const sudokuSolution = [
      "534678912", "672195348", "198342567",
      "859761423", "426853791", "713924856",
      "961537284", "287419635", "345286179"
    ];
    const blankCells = new Set([1, 4, 7, 9, 12, 14, 17, 19, 22, 24, 27, 30, 32, 35, 37, 40, 42, 45, 47, 50, 52, 55, 57, 60, 62, 65, 67, 70, 72, 75, 77, 80]);
    const sudokuBlankOrder = [...blankCells, ...Array.from({ length: 81 }, (_, index) => index).filter((index) => !blankCells.has(index))];
    const sudokuGrid = document.getElementById("sudoku-grid");
    let sudokuInputs = [];

