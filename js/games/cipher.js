function createCipherChallenge(category, level) {
        const minimumLength = Math.min(4 + Math.floor((level - 1) / 3), 7);
        const maximumLength = Math.min(5 + Math.floor((level - 1) / 2), 8);
        const words = [...new Set(activeWordBank().map(normalizeWord))]
          .filter((word) => /^[a-z]+$/.test(word) && word.length >= minimumLength && word.length <= maximumLength);
        if (!words.length) throw new Error(`No hi ha paraules per crear un xifrat de nivell ${level} en ${currentLanguage}.`);
        const answer = words[(level * 7) % words.length];
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        const shiftLetters = (text, shift) => [...text]
          .map((letter) => alphabet[(alphabet.indexOf(letter) + shift + alphabet.length) % alphabet.length])
          .join("");
        const mirrorAlphabet = (text) => [...text]
          .map((letter) => alphabet[alphabet.length - 1 - alphabet.indexOf(letter)])
          .join("");
        let encoded;
        let prompt;
        let explanation;
        if (level <= 3 || level === 5) {
          const shift = level <= 3 ? level : 5;
          encoded = shiftLetters(answer, shift);
          prompt = localized(
            `Cada lletra s'ha avançat ${shift} posicions a l'alfabet. Quina era la paraula original?`,
            `Each letter was shifted forward ${shift} places in the alphabet. What was the original word?`,
            `Cada letra avanzó ${shift} posiciones en el alfabeto. ¿Cuál era la palabra original?`
          );
          explanation = {
            ca: `S'ha aplicat un desplaçament Cèsar de ${shift} posicions.`,
            en: `A Caesar shift of ${shift} positions was used.`,
            es: `Se aplicó un desplazamiento César de ${shift} posiciones.`
          };
        } else if (level === 4) {
          encoded = mirrorAlphabet(answer);
          prompt = localized(
            "L'alfabet està invertit (A↔Z, B↔Y...). Quina era la paraula original?",
            "The alphabet is reversed (A↔Z, B↔Y...). What was the original word?",
            "El alfabeto está invertido (A↔Z, B↔Y...). ¿Cuál era la palabra original?"
          );
          explanation = {
            ca: "Cada lletra es canvia per la que ocupa la posició simètrica de l'alfabet.",
            en: "Each letter is replaced by its mirror position in the alphabet.",
            es: "Cada letra se sustituye por la que ocupa su posición simétrica en el alfabeto."
          };
        } else if (level === 6) {
          encoded = shiftLetters(answer, 2).split("").reverse().join("");
          prompt = localized(
            "Primer s'ha avançat cada lletra 2 posicions i després s'ha invertit la paraula.",
            "Each letter was shifted forward 2 places, then the word was reversed.",
            "Primero se avanzó cada letra 2 posiciones y después se invirtió la palabra."
          );
          explanation = {
            ca: "Per desxifrar-la, inverteix la paraula i retrocedeix cada lletra 2 posicions.",
            en: "To decode it, reverse the word and shift each letter back 2 places.",
            es: "Para descifrarla, invierte la palabra y retrocede cada letra 2 posiciones."
          };
        } else if (level === 7) {
          encoded = [...answer].map((letter, index) => shiftLetters(letter, index + 1)).join("");
          prompt = localized(
            "El desplaçament augmenta una posició a cada lletra: +1, +2, +3... Desxifra la paraula.",
            "The shift increases at each letter: +1, +2, +3... Decode the word.",
            "El desplazamiento aumenta en cada letra: +1, +2, +3... Descifra la palabra."
          );
          explanation = {
            ca: "Cal retrocedir 1 posició a la primera lletra, 2 a la segona, 3 a la tercera...",
            en: "Shift the first letter back 1 place, the second back 2, the third back 3...",
            es: "Retrocede 1 posición en la primera letra, 2 en la segunda, 3 en la tercera..."
          };
        } else if (level === 8) {
          encoded = [...answer].map((letter, index) => shiftLetters(letter, index % 2 === 0 ? 1 : 3)).join("");
          prompt = localized(
            "Les lletres s'han avançat alternativament +1 i +3 posicions. Desxifra la paraula.",
            "Letters were shifted forward by +1 and +3 alternately. Decode the word.",
            "Las letras se avanzaron alternativamente +1 y +3 posiciones. Descifra la palabra."
          );
          explanation = {
            ca: "Retrocedeix 1 posició a les lletres senars i 3 a les parelles.",
            en: "Shift odd-position letters back 1 place and even-position letters back 3.",
            es: "Retrocede 1 posición en las letras impares y 3 en las pares."
          };
        } else if (level === 9) {
          encoded = shiftLetters(mirrorAlphabet(answer), 2);
          prompt = localized(
            "Primer s'ha invertit l'alfabet i després s'ha avançat cada lletra 2 posicions.",
            "The alphabet was reversed first, then each letter was shifted forward 2 places.",
            "Primero se invirtió el alfabeto y después se avanzó cada letra 2 posiciones."
          );
          explanation = {
            ca: "Retrocedeix 2 posicions i desfés el mirall de l'alfabet.",
            en: "Shift each letter back 2 places, then reverse the alphabet.",
            es: "Retrocede 2 posiciones y deshaz el espejo del alfabeto."
          };
        } else {
          const key = currentLanguage === "en" ? "key" : currentLanguage === "es" ? "mar" : "sol";
          encoded = [...answer].map((letter, index) => shiftLetters(letter, alphabet.indexOf(key[index % key.length]))).join("");
          prompt = localized(
            `Xifrat Vigenère amb la clau «${key.toLocaleUpperCase(currentLanguage)}» repetida. A=0, B=1... Desxifra la paraula.`,
            `Vigenère cipher with the repeated key “${key.toLocaleUpperCase(currentLanguage)}”. A=0, B=1... Decode the word.`,
            `Cifrado Vigenère con la clave «${key.toLocaleUpperCase(currentLanguage)}» repetida. A=0, B=1... Descifra la palabra.`
          );
          explanation = {
            ca: "Per desxifrar-la, resta a cada lletra el valor de la lletra corresponent de la clau.",
            en: "To decode it, subtract the value of the matching key letter from each letter.",
            es: "Para descifrarla, resta a cada letra el valor de la letra correspondiente de la clave."
          };
        }
        return {
          prompt,
          symbols: encoded.toLocaleUpperCase(currentLanguage),
          answer,
          explanation
        };

    }
