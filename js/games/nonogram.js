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
        const runLengths = (line) => line.map(Number).join("").split("0").filter(Boolean).map((run) => run.length).join(" ") || "–";
        const rows = solution.map(runLengths);
        const columns = solution[0].map((_, col) => runLengths(solution.map((row) => row[col])));
        const clues = localized(
          `Toca les caselles per pintar-les segons les pistes. Prem «Comprova» quan acabis.\nFiles (de dalt a baix): ${rows.join(" | ")}\nColumnes (d'esquerra a dreta): ${columns.join(" | ")}`,
          `Tap cells to fill them using the clues. Press Check when finished.\nRows (top to bottom): ${rows.join(" | ")}\nColumns (left to right): ${columns.join(" | ")}`,
          `Toca las casillas para rellenarlas según las pistas. Pulsa «Comprobar» al terminar.\nFilas (de arriba abajo): ${rows.join(" | ")}\nColumnas (de izquierda a derecha): ${columns.join(" | ")}`
        );
        return {
          prompt: clues,
          interactiveGrid: solution,
          answer: solution.map((row) => row.map(Number).join("")).join("/")
        };

    }
