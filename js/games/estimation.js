function createEstimationChallenge(category, level) {
        const puzzles = [
          { expression: "8 + 5 × 3", answer: 23, offsets: [0, -5, 7, 13] },
          { expression: "(18 − 7) × 4", answer: 44, offsets: [0, -9, 6, 13] },
          { expression: "96 ÷ 8 + 17 × 3", answer: 63, offsets: [0, -14, 9, 19] },
          { expression: "45 − 6 × (8 − 3)", answer: 15, offsets: [-12, -5, 7, 18] },
          { expression: "(72 ÷ 9 + 5) × 6", answer: 78, offsets: [-17, 8, 13, 22] },
          { expression: "125 − (18 + 7) × 4", answer: 25, offsets: [-5, 11, 16, -24] },
          { expression: "84 ÷ (3 + 4) + 9 × 6", answer: 66, offsets: [16, -19, 7, 25] },
          { expression: "(144 ÷ 12 + 8) × 7 − 19", answer: 121, offsets: [-11, 21, 5, 14] },
          { expression: "225 ÷ (15 − 6) + 8 × (13 − 4)", answer: 97, offsets: [20, -8, -17, 13] },
          { expression: "(240 − 6 × 17) ÷ 3 + 8 × (19 − 7)", answer: 142, offsets: [-22, 12, 25, -5] }
        ];
        const puzzle = puzzles[level - 1];
        const options = puzzle.offsets.map((offset) => String(puzzle.answer + offset));
        const answer = level <= 3
          ? String(puzzle.answer)
          : options.reduce((best, option) =>
            Math.abs(Number(option) - puzzle.answer) < Math.abs(Number(best) - puzzle.answer) ? option : best
          );
        const difference = Math.abs(Number(answer) - puzzle.answer);
        for (let index = options.length - 1; index > 0; index -= 1) {
          const swapIndex = Math.floor(Math.random() * (index + 1));
          [options[index], options[swapIndex]] = [options[swapIndex], options[index]];
        }
        return {
          prompt: level <= 3
            ? localized(`Estima el resultat de ${puzzle.expression}. En aquest nivell, l'opció exacta hi és.`, `Estimate ${puzzle.expression}. At this level, the exact answer is one of the options.`, `Estima el resultado de ${puzzle.expression}. En este nivel, la opción exacta está entre las respuestas.`)
            : localized(`Estima el resultat de ${puzzle.expression}. El resultat exacte no és cap opció: tria la que s'hi acosta més.`, `Estimate ${puzzle.expression}. The exact answer is not an option; choose the closest one.`, `Estima el resultado de ${puzzle.expression}. El resultado exacto no es una opción: elige la más cercana.`),
          options,
          answer,
          explanation: {
            ca: level <= 3 ? `El resultat exacte és ${puzzle.answer}.` : `El resultat exacte és ${puzzle.answer}; la millor opció queda a ${difference} unitats.`,
            en: level <= 3 ? `The exact result is ${puzzle.answer}.` : `The exact result is ${puzzle.answer}; the best option is ${difference} away.`,
            es: level <= 3 ? `El resultado exacto es ${puzzle.answer}.` : `El resultado exacto es ${puzzle.answer}; la mejor opción queda a ${difference} unidades.`
          }
        };

    }
