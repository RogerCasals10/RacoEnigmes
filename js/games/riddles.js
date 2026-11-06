function createRiddlesChallenge(category, level) {
        const puzzles = [
          {
            prompt: localized("Què puja però mai no baixa?", "What goes up but never comes down?", "¿Qué sube pero nunca baja?"),
            options: [localized("Un globus", "A balloon", "Un globo"), localized("L'edat", "Age", "La edad"), localized("El fum", "Smoke", "El humo"), localized("Un ascensor", "An elevator", "Un ascensor")],
            correct: 1,
            explanation: { ca: "L'edat augmenta amb el temps i no disminueix.", en: "Age increases with time and never decreases.", es: "La edad aumenta con el tiempo y nunca disminuye." }
          },
          {
            prompt: localized("Passo pels cabells i tinc moltes dents, però no mossego. Què sóc?", "I pass through your hair and have many teeth, but I never bite. What am I?", "Paso por el pelo y tengo muchos dientes, pero no muerdo. ¿Qué soy?"),
            options: [localized("Una pinta", "A comb", "Un peine"), localized("Una serra", "A saw", "Una sierra"), localized("Una cremallera", "A zipper", "Una cremallera"), localized("Un cocodril", "A crocodile", "Un cocodrilo")],
            correct: 0,
            explanation: { ca: "La pinta té dents i es passa pels cabells sense mossegar.", en: "A comb has teeth and passes through hair without biting.", es: "El peine tiene dientes y pasa por el pelo sin morder." }
          },
          {
            prompt: localized("Quin mes de l'any té 28 dies?", "Which month of the year has 28 days?", "¿Qué mes del año tiene 28 días?"),
            options: [localized("Febrer", "February", "Febrero"), localized("Tots", "All of them", "Todos"), localized("Gener", "January", "Enero"), localized("Cap", "None", "Ninguno")],
            correct: 1,
            explanation: { ca: "Tots els mesos tenen almenys 28 dies.", en: "Every month has at least 28 days.", es: "Todos los meses tienen al menos 28 días." }
          },
          {
            prompt: localized("Què es trenca quan dius el seu nom?", "What breaks when you say its name?", "¿Qué se rompe cuando dices su nombre?"),
            options: [localized("Un got", "A glass", "Un vaso"), localized("El silenci", "Silence", "El silencio"), localized("Un secret", "A secret", "Un secreto"), localized("Una promesa", "A promise", "Una promesa")],
            correct: 1,
            explanation: { ca: "Quan parles, deixes de tenir silenci.", en: "When you speak, the silence is gone.", es: "Cuando hablas, el silencio desaparece." }
          },
          {
            prompt: localized("Quants animals de cada espècie va pujar Moisès a l'arca?", "How many animals of each kind did Moses take on the ark?", "¿Cuántos animales de cada especie subió Moisés al arca?"),
            options: [localized("Dos", "Two", "Dos"), localized("Un mascle i una femella", "A male and a female", "Un macho y una hembra"), localized("Cap: era l'arca de Noè", "None: it was Noah's ark", "Ninguno: era el arca de Noé"), localized("Set parelles", "Seven pairs", "Siete parejas")],
            correct: 2,
            explanation: { ca: "L'arca era de Noè, no de Moisès.", en: "The ark belonged to Noah, not Moses.", es: "El arca era de Noé, no de Moisés." }
          },
          {
            prompt: localized("Tinc ciutats però no cases, boscos però no arbres i rius però no aigua. Què sóc?", "I have cities but no houses, forests but no trees, and rivers but no water. What am I?", "Tengo ciudades pero no casas, bosques pero no árboles y ríos pero no agua. ¿Qué soy?"),
            options: [localized("Un somni", "A dream", "Un sueño"), localized("Un mapa", "A map", "Un mapa"), localized("Una fotografia", "A photograph", "Una fotografía"), localized("Un llibre", "A book", "Un libro")],
            correct: 1,
            explanation: { ca: "Un mapa mostra aquests llocs, però no conté els llocs reals.", en: "A map shows these places without containing the real places.", es: "Un mapa muestra esos lugares, pero no contiene los lugares reales." }
          },
          {
            prompt: localized("Què és teu però els altres fan servir més que tu?", "What belongs to you but other people use more than you do?", "¿Qué es tuyo pero los demás usan más que tú?"),
            options: [localized("El teu nom", "Your name", "Tu nombre"), localized("La teva cadira", "Your chair", "Tu silla"), localized("El teu telèfon", "Your phone", "Tu teléfono"), localized("El teu temps", "Your time", "Tu tiempo")],
            correct: 0,
            explanation: { ca: "Els altres solen dir el teu nom més vegades que tu mateix.", en: "Other people usually say your name more often than you do.", es: "Los demás suelen decir tu nombre más veces que tú." }
          },
          {
            prompt: localized("Un gall pon un ou al cim d'una teulada. Cap a quin costat cau?", "A rooster lays an egg on a roof ridge. Which side does it fall down?", "Un gallo pone un huevo en la cima de un tejado. ¿Por qué lado cae?"),
            options: [localized("A l'esquerra", "The left side", "Por la izquierda"), localized("A la dreta", "The right side", "Por la derecha"), localized("Cap: els galls no ponen ous", "Neither: roosters do not lay eggs", "Por ninguno: los gallos no ponen huevos"), localized("Depèn del vent", "It depends on the wind", "Depende del viento")],
            correct: 2,
            explanation: { ca: "Els galls no ponen ous.", en: "Roosters do not lay eggs.", es: "Los gallos no ponen huevos." }
          },
          {
            prompt: localized("Tinc tecles, puc tocar melodies, però no obro cap pany. Què sóc?", "I have keys and can play melodies, but I open no locks. What am I?", "Tengo teclas, puedo tocar melodías, pero no abro cerraduras. ¿Qué soy?"),
            options: [localized("Un piano", "A piano", "Un piano"), localized("Una porta", "A door", "Una puerta"), localized("Un mapa", "A map", "Un mapa"), localized("Una clau", "A key", "Una llave")],
            correct: 0,
            explanation: { ca: "El piano té tecles musicals, no claus per obrir panys.", en: "A piano has musical keys, not keys for locks.", es: "El piano tiene teclas musicales, no llaves para abrir cerraduras." }
          },
          {
            prompt: localized("Com més n'hi treus, més gran es fa. Què és?", "The more you take away, the bigger it gets. What is it?", "Cuanto más le quitas, más grande se hace. ¿Qué es?"),
            options: [localized("Un forat", "A hole", "Un agujero"), localized("Una caixa", "A box", "Una caja"), localized("Una ombra", "A shadow", "Una sombra"), localized("Una muntanya", "A mountain", "Una montaña")],
            correct: 0,
            explanation: { ca: "Com més material treus, més gran es fa el forat.", en: "The more material you remove, the bigger the hole becomes.", es: "Cuanto más material quitas, más grande se hace el agujero." }
          },
          {
            prompt: localized("Té coll però no cap. Què és?", "What has a neck but no head?", "¿Qué tiene cuello pero no cabeza?"),
            options: [localized("Una ampolla", "A bottle", "Una botella"), localized("Una camisa", "A shirt", "Una camisa"), localized("Una girafa", "A giraffe", "Una jirafa"), localized("Una bufanda", "A scarf", "Una bufanda")],
            correct: 0,
            explanation: { ca: "El coll de l'ampolla és la part estreta que connecta amb l'obertura.", en: "A bottle's neck is the narrow part leading to its opening.", es: "El cuello de la botella es la parte estrecha que llega a la abertura." }
          }
        ];
        const puzzle = puzzles[level - 1];
        const options = [...puzzle.options];
        const answer = options[puzzle.correct];
        for (let index = options.length - 1; index > 0; index -= 1) {
          const swapIndex = Math.floor(Math.random() * (index + 1));
          [options[index], options[swapIndex]] = [options[swapIndex], options[index]];
        }
        return { prompt: puzzle.prompt, options, answer, explanation: puzzle.explanation };

    }
