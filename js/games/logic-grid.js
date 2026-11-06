function createLogicGridChallenge(category, level) {
        const puzzles = [
          {
            ca: "Tres corredors: l'Aina arriba abans d'en Biel; en Biel arriba abans de la Cora. Qui arriba segon?",
            en: "Three runners: Ava finishes before Ben; Ben finishes before Cara. Who finishes second?",
            es: "Tres corredores: Ana llega antes que Bruno; Bruno llega antes que Carla. ¿Quién llega segundo?",
            choices: [["Aina", "Biel", "Cora"], ["Ava", "Ben", "Cara"], ["Ana", "Bruno", "Carla"]], answer: 1
          },
          {
            ca: "Quatre llibres, vermell, blau, verd i groc: el vermell va abans que el blau; el verd va després del blau; el groc és l'últim. Quin llibre va primer?",
            en: "Four books—red, blue, green, and yellow: red is before blue; green is after blue; yellow is last. Which book is first?",
            es: "Cuatro libros—rojo, azul, verde y amarillo: rojo va antes que azul; verde va después de azul; amarillo es el último. ¿Cuál va primero?",
            choices: [["vermell", "blau", "verd", "groc"], ["red", "blue", "green", "yellow"], ["rojo", "azul", "verde", "amarillo"]], answer: 0
          },
          {
            ca: "En una fila de tres cases, en Pol viu a l'esquerra de la Jana i en Marc viu a la dreta de la Jana. Qui viu al mig?",
            en: "In a row of three houses, Paul lives left of Jane and Mark lives right of Jane. Who lives in the middle?",
            es: "En una fila de tres casas, Pablo vive a la izquierda de Julia y Marcos vive a la derecha de Julia. ¿Quién vive en medio?",
            choices: [["Pol", "Jana", "Marc"], ["Paul", "Jane", "Mark"], ["Pablo", "Julia", "Marcos"]], answer: 1
          },
          {
            ca: "La Laia, l'Ona i la Rita tenen gats, gossos o peixos, un animal diferent cadascuna. La Laia no té peix; l'Ona té un animal que borda. Qui té el gat?",
            en: "Lia, Nora, and Rosa have a cat, dog, or fish, one different pet each. Lia has no fish; Nora has an animal that barks. Who has the cat?",
            es: "Lía, Nora y Rosa tienen un gato, perro o pez, una mascota distinta cada una. Lía no tiene pez; Nora tiene un animal que ladra. ¿Quién tiene el gato?",
            choices: [["Laia", "Ona", "Rita"], ["Lia", "Nora", "Rosa"], ["Lía", "Nora", "Rosa"]], answer: 0
          },
          {
            ca: "Quatre amics seuen en fila. En Kai no seu ni primer ni últim. En Nil seu just a l'esquerra d'en Kai. Qui seu immediatament a la dreta d'en Kai?",
            en: "Four friends sit in a row. Kai is neither first nor last. Neil sits immediately to Kai's left. Who sits immediately to Kai's right?",
            es: "Cuatro amigos se sientan en fila. Kai no está ni primero ni último. Noé se sienta justo a la izquierda de Kai. ¿Quién se sienta justo a su derecha?",
            choices: [["Nil, si Kai és segon", "No es pot saber sense més pistes", "El primer amic"], ["Neil, if Kai is second", "Cannot be determined from the clues", "The first friend"], ["Noé, si Kai está segundo", "No se puede saber con estas pistas", "El primer amigo"]], answer: 1
          },
          {
            ca: "La Joana, la Berta i la Clàudia han triat te, cafè i suc, una beguda diferent cadascuna. La Joana no pren cafè; la Berta pren te. Què pren la Clàudia?",
            en: "Jo, Bea, and Claire chose tea, coffee, and juice, one different drink each. Jo did not choose coffee; Bea chose tea. What did Claire choose?",
            es: "Juana, Bea y Clara eligieron té, café y zumo, una bebida distinta cada una. Juana no toma café; Bea toma té. ¿Qué toma Clara?",
            choices: [["te", "cafè", "suc"], ["tea", "coffee", "juice"], ["té", "café", "zumo"]], answer: 1
          },
          {
            ca: "Tres caixes A, B i C contenen una moneda, una clau i un botó. A no conté la clau; B conté el botó; C no conté la moneda. Què hi ha a A?",
            en: "Three boxes A, B, and C contain a coin, key, and button. A does not contain the key; B contains the button; C does not contain the coin. What is in A?",
            es: "Tres cajas A, B y C contienen una moneda, una llave y un botón. A no contiene la llave; B contiene el botón; C no contiene la moneda. ¿Qué hay en A?",
            choices: [["moneda", "clau", "botó"], ["coin", "key", "button"], ["moneda", "llave", "botón"]], answer: 0
          },
          {
            ca: "Quatre corredors: la Mei arriba abans que en Roc; en Roc abans que la Sara; en Tom arriba després de la Sara. Qui arriba tercer?",
            en: "Four runners: Mei finishes before Ray; Ray before Sara; Tom finishes after Sara. Who finishes third?",
            es: "Cuatro corredores: Mei llega antes que Raúl; Raúl antes que Sara; Tomás llega después de Sara. ¿Quién llega tercero?",
            choices: [["Mei", "Roc", "Sara", "Tom"], ["Mei", "Ray", "Sara", "Tom"], ["Mei", "Raúl", "Sara", "Tomás"]], answer: 2
          },
          {
            ca: "En una cursa de quatre voltes, la Jana acaba amb més voltes que la Lídia; la Lídia, més que en Marc; i en Marc, més que en Pau. Qui acaba segon?",
            en: "In a four-lap race, Jane completes more laps than Lydia; Lydia more than Mark; Mark more than Paul. Who finishes second?",
            es: "En una carrera de cuatro vueltas, Julia completa más vueltas que Lidia; Lidia más que Marcos; Marcos más que Pablo. ¿Quién queda segundo?",
            choices: [["Jana", "Lídia", "Marc", "Pau"], ["Jane", "Lydia", "Mark", "Paul"], ["Julia", "Lidia", "Marcos", "Pablo"]], answer: 1
          },
          {
            ca: "Quatre targetes tenen números diferents. El 4 és més gran que el 2; el 2 és més gran que el 1; el 3 és més gran que el 4. Quin número és el segon més gran?",
            en: "Four cards have distinct numbers. 4 is greater than 2; 2 is greater than 1; 3 is greater than 4. Which number is second largest?",
            es: "Cuatro tarjetas tienen números distintos. 4 es mayor que 2; 2 es mayor que 1; 3 es mayor que 4. ¿Qué número es el segundo mayor?",
            choices: [["4", "3", "2", "1"], ["4", "3", "2", "1"], ["4", "3", "2", "1"]], answer: 0
          }
        ];
        const puzzle = puzzles[level - 1];
        const languageIndex = currentLanguage === "en" ? 1 : currentLanguage === "es" ? 2 : 0;
        const translatedChoices = puzzle.choices[languageIndex];
        const answer = translatedChoices[puzzle.answer];
        return {
          prompt: puzzle[currentLanguage],
          options: randomize([answer, ...translatedChoices.filter((choice, index) => index !== puzzle.answer).slice(0, 3)]),
          answer,
          explanation: {
            ca: `La resposta és «${puzzle.choices[0][puzzle.answer]}».`,
            en: `The answer is "${puzzle.choices[1][puzzle.answer]}".`,
            es: `La respuesta es «${puzzle.choices[2][puzzle.answer]}».`
          }
        };

    }
