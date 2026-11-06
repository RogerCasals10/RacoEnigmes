function createShapesChallenge(category, level) {
        const shapeVariants = [["○", "●"], ["△", "▲"], ["□", "■"], ["◇", "◆"], ["⬡", "⬢"], ["⬠", "⬟"]];
        const arrows = ["↑", "→", "↓", "←"];
        const ruleText = (ca, en, es) => ({ ca, en, es });
        const patterns = [
          {
            visible: 6,
            state: (index) => [index % 6, index % 4, index % 2],
            rule: ruleText("La figura avança una posició, la fletxa gira i el farcit alterna.", "The shape advances one place, the arrow rotates, and the fill alternates.", "La figura avanza una posición, la flecha gira y el relleno alterna.")
          },
          {
            visible: 6,
            state: (index) => [index * 2 % 6, (4 - index % 4) % 4, Math.floor(index / 2) % 2],
            rule: ruleText("La figura salta una posició, la fletxa gira enrere i el farcit canvia cada dues figures.", "The shape skips one place, the arrow rotates backwards, and the fill changes every two shapes.", "La figura salta una posición, la flecha gira hacia atrás y el relleno cambia cada dos figuras.")
          },
          {
            visible: 7,
            state: (index) => {
              let shape = 0;
              for (let step = 0; step < index; step += 1) shape = (shape + (step % 2 === 0 ? 1 : 2)) % 6;
              return [shape, index * 3 % 4, Math.floor(index / 2) % 2];
            },
            rule: ruleText("La figura avança alternant salts d'una i dues posicions; la fletxa gira en sentit contrari i el farcit canvia cada dues figures.", "The shape alternates jumps of one and two places; the arrow turns the opposite way, and the fill changes every two shapes.", "La figura avanza alternando saltos de una y dos posiciones; la flecha gira en sentido contrario y el relleno cambia cada dos figuras.")
          },
          {
            visible: 7,
            state: (index) => [index % 2 === 0 ? Math.floor(index / 2) * 2 % 6 : (3 + Math.floor(index / 2) * 2) % 6, index % 4, Math.floor(index / 2) % 2],
            rule: ruleText("Les posicions parelles i senars formen dues seqüències independents: cadascuna avança dues figures.", "The even and odd positions form two independent sequences, each advancing by two shapes.", "Las posiciones pares e impares forman dos secuencias independientes: cada una avanza dos figuras.")
          },
          {
            visible: 7,
            state: (index) => {
              const fibonacci = [0, 1];
              for (let step = 2; step <= index; step += 1) fibonacci[step] = (fibonacci[step - 1] + fibonacci[step - 2]) % 6;
              return [fibonacci[index], index * 3 % 4, index % 2];
            },
            rule: ruleText("La figura segueix Fibonacci fent la volta en arribar a sis; la fletxa gira tres quarts de volta i el farcit alterna.", "The shape follows Fibonacci, wrapping around after six; the arrow turns three quarters each time, and the fill alternates.", "La figura sigue Fibonacci dando la vuelta al llegar a seis; la flecha gira tres cuartos de vuelta y el relleno alterna.")
          },
          {
            visible: 7,
            state: (index) => {
              const steps = [2, 3, 1];
              let shape = 0;
              for (let step = 0; step < index; step += 1) shape = (shape + steps[step % steps.length]) % 6;
              return [shape, (4 - index % 4) % 4, Math.floor(index / 3) % 2];
            },
            rule: ruleText("Els salts de la figura es repeteixen: dues, tres i una posició; la fletxa gira enrere i el farcit canvia cada tres figures.", "The shape's jumps repeat: two, three, and one place; the arrow rotates backwards, and the fill changes every three shapes.", "Los saltos de la figura se repiten: dos, tres y una posición; la flecha gira hacia atrás y el relleno cambia cada tres figuras.")
          },
          {
            visible: 8,
            state: (index) => [index % 6, index * 3 % 4, Math.floor(index / 2) % 2],
            rule: ruleText("La figura avança una posició, la fletxa gira tres quarts de volta i el farcit canvia cada dues figures.", "The shape advances one place, the arrow turns three quarters each time, and the fill changes every two shapes.", "La figura avanza una posición, la flecha gira tres cuartos de vuelta y el relleno cambia cada dos figuras.")
          },
          {
            visible: 8,
            state: (index) => [index % 2 === 0 ? Math.floor(index / 2) * 2 % 6 : (1 + Math.floor(index / 2) * 2) % 6, (index * 3 + 1) % 4, Math.floor(index / 3) % 2],
            rule: ruleText("Les posicions parelles i senars avancen dues figures per separat; la fletxa gira tres quarts de volta i el farcit canvia cada tres figures.", "Even and odd positions separately advance by two shapes; the arrow turns three quarters each time, and the fill changes every three shapes.", "Las posiciones pares e impares avanzan dos figuras por separado; la flecha gira tres cuartos de vuelta y el relleno cambia cada tres figuras.")
          },
          {
            visible: 8,
            state: (index) => {
              let shape = 0;
              for (let step = 0; step < index; step += 1) shape = (shape + (step % 3 === 0 ? 1 : 2)) % 6;
              return [shape, index * 2 % 4, Math.floor(index / 2) % 2];
            },
            rule: ruleText("La figura alterna salts d'una i dues posicions amb un pas d'una posició cada tres salts; la fletxa gira mitja volta i el farcit canvia cada dues figures.", "The shape alternates jumps of one and two places, with a one-place step every third jump; the arrow turns halfway, and the fill changes every two shapes.", "La figura alterna saltos de una y dos posiciones con un paso de una posición cada tres saltos; la flecha gira media vuelta y el relleno cambia cada dos figuras.")
          },
          {
            visible: 9,
            state: (index) => {
              const fibonacci = [0, 1];
              for (let step = 2; step <= index; step += 1) fibonacci[step] = (fibonacci[step - 1] + fibonacci[step - 2]) % 6;
              return [fibonacci[index], (index * 3 + Math.floor(index / 2)) % 4, Math.floor(index / 3) % 2];
            },
            rule: ruleText("La figura segueix Fibonacci amb volta cada sis; la fletxa combina un gir de tres posicions amb un pas extra cada dues figures, i el farcit canvia cada tres.", "The shape follows Fibonacci, wrapping every six; the arrow combines a three-place turn with an extra step every two shapes, and the fill changes every three.", "La figura sigue Fibonacci con vuelta cada seis; la flecha combina un giro de tres posiciones con un paso extra cada dos figuras, y el relleno cambia cada tres.")
          }
        ];
        const pattern = patterns[level - 1];
        const makeSymbol = ([shape, direction, filled]) => `${shapeVariants[shape][filled]}${arrows[direction]}`;
        const sequence = Array.from({ length: pattern.visible + 1 }, (_, index) => pattern.state(index));
        const answer = makeSymbol(sequence[pattern.visible]);
        const [answerShape, answerDirection, answerFill] = sequence[pattern.visible];
        const options = [
          answer,
          makeSymbol([(answerShape + 1) % 6, answerDirection, answerFill]),
          makeSymbol([answerShape, (answerDirection + 1) % 4, answerFill]),
          makeSymbol([answerShape, answerDirection, 1 - answerFill])
        ];
        for (let index = options.length - 1; index > 0; index -= 1) {
          const swapIndex = Math.floor(Math.random() * (index + 1));
          [options[index], options[swapIndex]] = [options[swapIndex], options[index]];
        }
        return {
          prompt: localized("Quina figura continua la seqüència?", "Which figure continues the sequence?", "¿Qué figura continúa la secuencia?"),
          symbols: [...sequence.slice(0, pattern.visible).map(makeSymbol), "?"].join("   "),
          options, answer, explanation: pattern.rule
        };

    }
