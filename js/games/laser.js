function createLaserChallenge(category, level) {
        const puzzles = [
          { row: 2, mirrors: [] },
          { row: 2, mirrors: [[2, 2, "/"]] },
          { row: 2, mirrors: [[2, 2, "\\"]] },
          { row: 2, mirrors: [[2, 1, "/"], [0, 1, "\\"]] },
          { row: 1, mirrors: [[1, 2, "\\"], [4, 2, "/"]] },
          { row: 3, mirrors: [[3, 1, "/"], [0, 1, "\\"]] },
          { row: 1, mirrors: [[1, 3, "\\"], [5, 3, "/"]] },
          { row: 4, mirrors: [[4, 3, "/"]] },
          { row: 3, mirrors: [[3, 1, "\\"], [5, 1, "/"]] },
          { row: 1, mirrors: [[1, 2, "/"], [0, 2, "\\"]] }
        ];
        const puzzle = puzzles[level - 1];
        const grid = Array.from({ length: 6 }, () => Array(6).fill("·"));
        const mirrors = new Map(puzzle.mirrors.map(([row, col, mirror]) => [`${row},${col}`, mirror]));
        let row = puzzle.row;
        let col = 0;
        let dx = 1;
        let dy = 0;
        grid[row][col] = "S";
        let exit = "";
        for (let step = 0; step < 100; step += 1) {
          col += dx;
          row += dy;
          if (col < 0) { exit = "left"; break; }
          if (col >= 6) { exit = "right"; break; }
          if (row < 0) { exit = "top"; break; }
          if (row >= 6) { exit = "bottom"; break; }
          const mirror = mirrors.get(`${row},${col}`);
          if (mirror) {
            grid[row][col] = mirror;
            if (mirror === "/") [dx, dy] = [-dy, -dx];
            else [dx, dy] = [dy, dx];
          } else if (grid[row][col] === "·") {
            grid[row][col] = "•";
          }
        }
        const exits = {
          left: localized("Esquerra", "Left", "Izquierda"),
          right: localized("Dreta", "Right", "Derecha"),
          top: localized("Dalt", "Top", "Arriba"),
          bottom: localized("Baix", "Bottom", "Abajo")
        };
        const options = Object.values(exits);
        const answer = exits[exit];
        return {
          prompt: localized("Segueix el raig i indica per quina vora surt.", "Trace the beam and choose which edge it exits.", "Sigue el rayo e indica por qué borde sale."),
          coordinateGrid: grid,
          coordinateColumns: "ABCDEF",
          coordinateRows: ["6", "5", "4", "3", "2", "1"],
          options: randomize(options),
          answer,
          explanation: {
            ca: `El raig surt per la vora ${answer.toLocaleLowerCase("ca")}.`,
            en: `The beam exits through the ${answer.toLocaleLowerCase("en")} edge.`,
            es: `El rayo sale por el borde ${answer.toLocaleLowerCase("es")}.`
          }
        };

    }
