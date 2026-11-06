function createAnagramsChallenge(category, level) {
        const advanced = level > LEVEL_COUNT;
        const candidates = [...new Set(activeWordBank().map(normalizeWord))]
          .filter((word) => /^[a-z]+$/.test(word)
            && (advanced
              ? word.length >= 6 && word.length <= 8
              : word.length >= 4 && word.length <= Math.min(5 + level, 10)));
        if (!candidates.length) throw new Error(`No hi ha paraules per crear un anagrama de nivell ${level} en ${currentLanguage}.`);
        const answerIndex = advanced ? ((level - LEVEL_COUNT - 1) * 13) % candidates.length : (level * 13) % candidates.length;
        const answer = candidates[answerIndex];
        let scrambledLetters;
        if (advanced) {
          scrambledLetters = randomize([...answer]);
          if (scrambledLetters.join("") === answer) {
            const differentLetterIndex = scrambledLetters.findIndex((letter) => letter !== scrambledLetters[0]);
            if (differentLetterIndex > 0) [scrambledLetters[0], scrambledLetters[differentLetterIndex]] = [scrambledLetters[differentLetterIndex], scrambledLetters[0]];
          }
        } else {
          const letters = answer.split("");
          const shift = Math.max(1, level % letters.length);
          scrambledLetters = [...letters.slice(shift), ...letters.slice(0, shift)];
        }
        const symbols = scrambledLetters.join("").toLocaleUpperCase(currentLanguage);
        return {
          prompt: localized("Ordena les lletres per descobrir la paraula.", "Rearrange the letters to find the word.", "Ordena las letras para descubrir la palabra."),
          symbols, answer
        };

    }
