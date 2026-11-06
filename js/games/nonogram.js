function createNonogramChallenge(category, level) {
        const patterns = [
          ["00100", "01110", "11111", "00100", "00100"],
          ["11100", "01001", "00110", "00101", "10010"],
          ["11011", "11011", "00100", "11011", "11011"],
          ["11111", "10001", "10101", "10001", "11111"],
          ["00100", "01110", "11111", "10101", "10101"],
          ["10001", "11011", "11111", "01110", "00100"],
          ["00110", "10001", "11110", "10000", "00010"],
          ["01110", "11011", "10001", "11011", "01110"],
          ["11111", "10001", "11111", "10001", "11111"],
          ["10101", "01110", "11111", "01110", "10101"]
        ];
        const solution = patterns[level - 1].map((row) => [...row].map((cell) => cell === "1"));
        const runLengths = (line) => line.map(Number).join("").split("0").filter(Boolean).map((run) => run.length);
        const rowClues = solution.map(runLengths);
        const columnClues = solution[0].map((_, col) => runLengths(solution.map((row) => row[col])));
        return {
          prompt: localized(
            "Pinta les caselles seguint les pistes de cada fila i columna. Quan creguis que has descobert la imatge, comprova la solució.",
            "Fill the cells using the clues for each row and column. When you think you have revealed the picture, check your solution.",
            "Rellena las casillas siguiendo las pistas de cada fila y columna. Cuando creas que has descubierto la imagen, comprueba la solución."
          ),
          interactiveGrid: solution,
          nonogramRowClues: rowClues,
          nonogramColumnClues: columnClues,
          answer: solution.map((row) => row.map(Number).join("")).join("/")
        };

    }
