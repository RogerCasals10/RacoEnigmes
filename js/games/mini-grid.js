function createMiniGridChallenge(category, level) {
        const gridSizes = [4, 4, 4, 6, 6, 6, 6, 6, 6, 6];
        const blankCells = [
          [13], [6, 8], [2, 3, 12],
          [0, 15, 20, 30], [6, 7, 21, 29, 31], [2, 5, 21, 31, 33, 34],
          [0, 6, 11, 19, 21, 26, 34], [5, 6, 9, 10, 22, 23, 29, 34],
          [7, 8, 11, 14, 18, 19, 26, 33, 34], [8, 13, 14, 16, 18, 20, 24, 27, 31, 33]
        ][level - 1];
        const size = gridSizes[level - 1];
        const boxHeight = 2;
        const boxWidth = size === 4 ? 2 : 3;
        const symbols = size === 4 ? ["2", "7", "A", "K"] : ["2", "5", "8", "A", "K", "R"];
        const solution = Array.from({ length: size }, (_, row) =>
          Array.from({ length: size }, (_, col) => symbols[(row * boxWidth + Math.floor(row / boxHeight) + col) % size])
        );
        const answer = blankCells.map((cell) => solution[Math.floor(cell / size)][cell % size]).join(",");
        const grid = solution.map((row) => row.slice());
        blankCells.forEach((cell) => { grid[Math.floor(cell / size)][cell % size] = "?"; });
        return {
          prompt: size === 4
            ? localized(
              "Completa la graella: cada fila, columna i quadrat de 2 × 2 conté 2, 7, A i K. Escriu les caselles buides d'esquerra a dreta i de dalt a baix, separades per comes.",
              "Complete the grid: each row, column, and 2 × 2 box contains 2, 7, A, and K. Enter the empty cells from left to right, top to bottom, separated by commas.",
              "Completa la cuadrícula: cada fila, columna y cuadro de 2 × 2 contiene 2, 7, A y K. Escribe las casillas vacías de izquierda a derecha y de arriba abajo, separadas por comas."
            )
            : localized(
              "Completa la graella: cada fila, columna i rectangle de 2 × 3 conté 2, 5, 8, A, K i R. Escriu les caselles buides d'esquerra a dreta i de dalt a baix, separades per comes.",
              "Complete the grid: each row, column, and 2 × 3 box contains 2, 5, 8, A, K, and R. Enter the empty cells from left to right, top to bottom, separated by commas.",
              "Completa la cuadrícula: cada fila, columna y rectángulo de 2 × 3 contiene 2, 5, 8, A, K y R. Escribe las casillas vacías de izquierda a derecha y de arriba abajo, separadas por comas."
            ),
          grid, boxHeight, boxWidth, answer
        };

    }
