function createOddoneChallenge(category, level) {
        const challenges = [
          { options: ["8", "12", "16", "18"], answer: "18", explanation: { ca: "Els altres tres són múltiples de 4.", en: "The other three are multiples of 4.", es: "Los otros tres son múltiplos de 4." } },
          { options: ["9", "16", "25", "28"], answer: "28", explanation: { ca: "Els altres tres són quadrats perfectes.", en: "The other three are perfect squares.", es: "Los otros tres son cuadrados perfectos." } },
          { options: ["14", "21", "28", "32"], answer: "32", explanation: { ca: "Els altres tres són múltiples de 7.", en: "The other three are multiples of 7.", es: "Los otros tres son múltiplos de 7." } },
          { options: ["23", "29", "31", "33"], answer: "33", explanation: { ca: "Els altres tres són primers; 33 és divisible per 3.", en: "The other three are prime; 33 is divisible by 3.", es: "Los otros tres son primos; 33 es divisible por 3." } },
          { options: ["8", "27", "64", "81"], answer: "81", explanation: { ca: "Els altres tres són cubs perfectes.", en: "The other three are perfect cubes.", es: "Los otros tres son cubos perfectos." } },
          { options: ["13", "21", "34", "37"], answer: "37", explanation: { ca: "Els altres formen la successió de Fibonacci: cada nombre suma els dos anteriors.", en: "The other three follow the Fibonacci sequence: each is the sum of the previous two.", es: "Los otros siguen la sucesión de Fibonacci: cada número suma los dos anteriores." } },
          { options: ["16", "32", "64", "96"], answer: "96", explanation: { ca: "Els altres tres són potències de 2.", en: "The other three are powers of 2.", es: "Los otros tres son potencias de 2." } },
          { options: ["14", "23", "32", "42"], answer: "42", explanation: { ca: "La suma de les xifres dels altres tres és 5.", en: "The digits of the other three add up to 5.", es: "La suma de las cifras de los otros tres es 5." } },
          { options: ["4", "9", "25", "36"], answer: "36", explanation: { ca: "Els altres són quadrats de nombres primers: 2², 3² i 5².", en: "The others are squares of prime numbers: 2², 3², and 5².", es: "Los otros son cuadrados de números primos: 2², 3² y 5²." } },
          { options: ["12", "20", "30", "40"], answer: "40", explanation: { ca: "Els altres són productes de dos enters consecutius: 3×4, 4×5 i 5×6.", en: "The others are products of consecutive integers: 3×4, 4×5, and 5×6.", es: "Los otros son productos de dos enteros consecutivos: 3×4, 4×5 y 5×6." } }
        ];
        const challenge = challenges[randomModeActive ? Math.floor(Math.random() * challenges.length) : level - 1];
        return {
          prompt: localized("Quin nombre no segueix el patró dels altres?", "Which number does not follow the pattern?", "¿Qué número no sigue el patrón de los demás?"),
          options: randomize([...challenge.options]),
          answer: challenge.answer,
          explanation: challenge.explanation
        };

    }
