function createCoordinatesChallenge(category, level) {
        const puzzles = [
          { size: 4, start: [2, 1], moves: [] },
          { size: 4, start: [0, 3], moves: [] },
          { size: 5, start: [4, 2], moves: [] },
          { size: 5, start: [1, 1], moves: [[2, 0], [0, 2]] },
          { size: 5, start: [4, 4], moves: [[-2, 0], [0, -3], [1, 0]] },
          { size: 5, start: [0, 4], moves: [[1, 0], [0, -2], [2, 0], [0, 1]] },
          { size: 6, start: [1, 4], moves: [[3, 0], [0, -2], [-1, 0]] },
          { size: 6, start: [4, 1], moves: [[0, 3], [-2, 0], [0, -1], [1, 0]] },
          { size: 6, start: [5, 5], moves: [[0, -3], [-4, 0], [0, 1], [3, 0]] },
          { size: 6, start: [2, 4], moves: [[0, -3], [3, 0], [0, 2], [-4, 0], [0, -1]] }
        ];
        const puzzle = puzzles[level - 1];
        const [startCol, startRow] = puzzle.start;
        const target = puzzle.moves.reduce(([col, row], [dx, dy]) => [col + dx, row + dy], puzzle.start);
        const [targetCol, targetRow] = target;
        const total = puzzle.size * puzzle.size;
        const multiplier = puzzle.size === 4 ? 5 : puzzle.size === 5 ? 7 : 5;
        const grid = Array.from({ length: puzzle.size }, (_, row) =>
          Array.from({ length: puzzle.size }, (_, col) => ((row * puzzle.size + col) * multiplier + level * 7) % total + 1)
        );
        const columns = "ABCDEF".slice(0, puzzle.size);
        const startSquare = `${columns[startCol]}${startRow + 1}`;
        const movements = puzzle.moves.map(([dx, dy]) => {
          const distance = Math.abs(dx || dy);
          const direction = dx > 0
            ? ["cap a l'est", "east", "al este"]
            : dx < 0
              ? ["cap a l'oest", "west", "al oeste"]
              : dy > 0
                ? ["cap al sud", "south", "al sur"]
                : ["cap al nord", "north", "al norte"];
          return localized(
            `${distance} casella${distance === 1 ? "" : "es"} ${direction[0]}`,
            `${distance} square${distance === 1 ? "" : "s"} ${direction[1]}`,
            `${distance} casilla${distance === 1 ? "" : "s"} ${direction[2]}`
          );
        });
        const prompt = puzzle.moves.length === 0
          ? localized(`Quin número hi ha a la casella ${startSquare}?`, `What number is in square ${startSquare}?`, `¿Qué número hay en la casilla ${startSquare}?`)
          : localized(
            `Comença a ${startSquare} i segueix aquests moviments en ordre: ${movements.join(", després ")}. Quin número hi ha a la casella final?`,
            `Start at ${startSquare} and follow these moves in order: ${movements.join(", then ")}. What number is in the final square?`,
            `Empieza en ${startSquare} y sigue estos movimientos en orden: ${movements.join(", después ")}. ¿Qué número hay en la casilla final?`
          );
        return {
          prompt,
          coordinateGrid: grid,
          coordinateColumns: columns,
          answer: String(grid[targetRow][targetCol])
        };

    }
