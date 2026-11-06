    let activeExtraChallenge = null;
    let selectedChessSquare = "";
    function newExtraGame() {
      clearArithmeticTimer();
      const symbols = document.getElementById("extra-symbols");
      const existingTilingWorkbench = symbols.closest(".tiling-workbench");
      if (existingTilingWorkbench) {
        existingTilingWorkbench.before(symbols);
        existingTilingWorkbench.remove();
      }
      const arithmeticTimer = document.getElementById("arithmetic-timer");
      arithmeticTimer.hidden = true;
      arithmeticTimer.textContent = "";
      const tab = tabs.find((item) => item.dataset.panel === currentCategory);
      if (!tab || !EXTRA_GAME_IDS.includes(currentCategory)) return;
      const titleNode = tab.querySelector("strong").firstChild;
      const name = originalTexts.get(titleNode)?.trim() || tab.querySelector("strong").textContent;
      document.getElementById("extra-title").textContent = translateValue(name);
      document.getElementById("extra-description").textContent = tab.querySelector("small").textContent;
      document.getElementById("extra-category-pill").textContent = translateValue("Repte");
      document.getElementById("extra-level-label").textContent = `${translateValue("Nivell")} ${currentLevel} / ${categoryLevelCount(currentCategory)}`;
      activeExtraChallenge = createExtraChallenge(currentCategory, currentLevel);
      selectedChessSquare = "";
      const isChess = activeExtraChallenge.boardType === "chess";
      const isArithmetic = currentCategory === "arithmetic";
      if (isArithmetic) {
        arithmeticOperations = activeExtraChallenge.operations;
        arithmeticOperationIndex = 0;
      } else {
        document.getElementById("extra-prompt").textContent = activeExtraChallenge.prompt;
      }
      const hasMiniGrid = Array.isArray(activeExtraChallenge.grid);
      const hasCoordinateGrid = Array.isArray(activeExtraChallenge.coordinateGrid);
      const hasGeometryDiagram = activeExtraChallenge.diagram === "geometry";
      const hasProjectionDiagram = Array.isArray(activeExtraChallenge.projectionData);
      const isProjection = currentCategory === "projections" && hasProjectionDiagram;
      const hasInteractiveGrid = Array.isArray(activeExtraChallenge.interactiveGrid);
      const hasTilingGrid = Array.isArray(activeExtraChallenge.tilingGrid);
      symbols.classList.toggle("mini-grid", hasMiniGrid);
      symbols.classList.toggle("coordinate-grid", hasCoordinateGrid);
      symbols.classList.toggle("geometry-diagram", hasGeometryDiagram);
      symbols.classList.toggle("projection-diagram", hasProjectionDiagram);
      symbols.classList.toggle("nonogram-grid", hasInteractiveGrid);
      symbols.classList.toggle("tiling-grid", hasTilingGrid);
      symbols.classList.toggle("chess-board", activeExtraChallenge.boardType === "chess");
      symbols.style.removeProperty("--grid-size");
      symbols.removeAttribute("role");
      symbols.textContent = activeExtraChallenge.symbols || "";
      symbols.hidden = !activeExtraChallenge.symbols && !hasMiniGrid && !hasCoordinateGrid && !hasGeometryDiagram && !hasProjectionDiagram && !hasInteractiveGrid && !hasTilingGrid;
      if (hasGeometryDiagram) {
        const svgNamespace = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNamespace, "svg");
        svg.setAttribute("viewBox", "0 0 480 360");
        svg.setAttribute("role", "img");
        const addSvgElement = (name, attributes) => {
          const element = document.createElementNS(svgNamespace, name);
          Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
          svg.append(element);
          return element;
        };
        const shapes = {
          1: "M 100 70 H 380 V 145 H 275 V 275 H 205 V 145 H 100 Z",
          2: "M 240 60 L 390 270 H 90 Z",
          3: "M 150 70 H 330 V 250 H 150 Z",
          4: "M 130 90 L 370 90 L 330 250 H 90 Z",
          5: "M 240 55 L 355 120 L 355 220 L 240 285 L 125 220 L 125 120 Z",
          6: "M 145 95 H 335 L 390 255 H 90 Z",
          7: "M 110 260 H 380 L 110 70 Z",
          8: "M 105 85 H 375 V 255 H 105 Z",
          9: "M 100 80 H 380 V 145 H 235 V 265 H 100 Z",
          10: "M 240 50 L 320 70 L 375 125 L 395 180 L 375 235 L 320 290 L 240 310 L 160 290 L 105 235 L 85 180 L 105 125 L 160 70 Z",
          11: "M 100 80 H 380 V 255 H 100 V 195 H 270 V 145 H 100 Z",
          12: "M 100 80 H 380 V 255 H 100 V 205 H 280 V 145 H 100 Z",
          13: "M 110 75 H 370 V 150 H 285 V 270 H 195 V 150 H 110 Z",
          14: "M 240 65 L 375 260 H 105 Z",
          15: "M 170 65 H 310 L 385 140 V 220 L 310 295 H 170 L 95 220 V 140 Z",
          16: "M 100 80 H 380 V 255 H 100 V 205 H 160 V 145 H 100 Z",
          17: "M 95 75 H 185 V 210 H 295 V 75 H 385 V 280 H 95 Z",
          18: "M 95 75 H 385 V 285 H 95 Z",
          19: "M 100 250 H 200 V 180 H 270 V 110 H 380 V 250 Z",
          20: "M 100 80 H 380 V 260 H 100 Z",
          21: "M 100 90 H 260 V 120 H 360 V 220 H 260 V 250 H 100 Z",
          22: "M 160 65 H 320 V 95 H 380 V 235 H 320 V 265 H 160 V 235 H 100 V 95 H 160 Z",
          23: "circle",
          24: "M 100 250 A 140 140 0 0 1 380 250 Z",
          25: "M 100 250 A 140 140 0 0 1 240 110 V 250 Z",
          26: "M 100 270 H 380 V 158 H 268 V 70 H 100 Z",
          27: "regular15",
          28: "M 240 55 L 325 80 L 380 145 L 365 225 L 300 280 L 180 280 L 115 225 L 100 145 L 155 80 Z",
          29: "M 90 80 H 150 V 110 H 190 V 80 H 260 V 100 H 300 V 80 H 390 V 250 H 90 Z",
          30: "M 100 250 H 380 V 100 A 140 140 0 0 0 100 100 Z"
        };
        const dimensionPositions = {
          1: [[240, 54], [401, 108], [155, 159], [190, 210], [290, 210], [325, 159], [79, 108], [240, 294]],
          2: [[315, 150], [165, 150], [240, 291]],
          3: [[240, 55], [350, 160], [240, 265], [130, 160]],
          4: [[250, 69], [360, 170], [240, 270], [100, 170]],
          5: [[300, 75], [365, 170], [300, 260], [180, 260], [115, 170], [180, 75]],
          6: [[240, 72], [370, 168], [240, 279], [95, 169]],
          7: [[244, 289], [83, 169], [317, 150]],
          8: [[240, 65], [390, 170], [240, 275], [90, 170]],
          9: [[240, 64], [398, 110], [305, 132], [220, 207]],
          10: [[240, 34]],
          11: [[240, 61], [405, 166], [310, 183], [245, 163]],
          12: [[240, 61], [405, 166], [312, 192], [250, 177]],
          13: [[240, 55], [390, 118], [240, 286]],
          14: [[310, 150], [240, 289]],
          15: [[240, 42]],
          16: [[240, 60], [402, 160], [320, 171], [250, 162], [150, 195], [120, 157]],
          17: [[240, 55], [405, 175], [240, 223], [240, 162]],
          18: [[240, 55], [400, 180], [240, 310], [80, 180]],
          19: [[240, 72], [315, 225]],
          20: [[240, 55], [315, 225]],
          21: [[180, 78], [310, 184]],
          22: [[240, 48], [390, 165]],
          23: [[240, 42], [240, 312]],
          24: [[240, 101], [240, 276], [240, 70]],
          25: [[240, 268], [176, 154]],
          26: [[240, 285], [395, 214], [324, 145], [220, 169], [268, 108], [82, 170]],
          27: [[240, 40]],
          28: [[240, 44], [365, 103], [388, 184], [335, 265], [240, 302], [145, 265], [92, 184], [115, 103]],
          29: [[125, 62], [188, 130], [245, 62], [350, 91], [420, 180], [330, 263]],
          30: [[240, 61], [390, 175], [88, 175]]
        };
        const geometryLevel = activeExtraChallenge.geometryLevel;
        const shape = shapes[geometryLevel] || shapes[3];
        if (shape === "circle") {
          addSvgElement("circle", { cx: 240, cy: 175, r: 120, fill: "#dce9df", stroke: "#315b43", "stroke-width": 3 });
          addSvgElement("line", { x1: 120, y1: 175, x2: 360, y2: 175, stroke: "#315b43", "stroke-width": 2, "stroke-dasharray": "5 4" });
        } else if (shape === "regular15") {
          const points = Array.from({ length: 15 }, (_, index) => {
            const angle = -Math.PI / 2 + (index * Math.PI * 2) / 15;
            return `${240 + Math.cos(angle) * 125},${175 + Math.sin(angle) * 125}`;
          });
          addSvgElement("path", { d: `M ${points.join(" L ")} Z`, fill: "#dce9df", stroke: "#315b43", "stroke-width": 3, "stroke-linejoin": "round" });
        } else {
          addSvgElement("path", { d: shape, fill: "#dce9df", stroke: "#315b43", "stroke-width": 3, "stroke-linejoin": "round" });
        }
        if (geometryLevel === 18 || geometryLevel === 29) {
          addSvgElement("rect", {
            x: geometryLevel === 18 ? 205 : 255,
            y: geometryLevel === 18 ? 145 : 155,
            width: geometryLevel === 18 ? 90 : 64,
            height: geometryLevel === 18 ? 70 : 48,
            fill: "#fffefa",
            stroke: "#315b43",
            "stroke-width": 2
          });
        }
        if (geometryLevel === 24) {
          addSvgElement("line", { x1: 240, y1: 250, x2: 240, y2: 110, stroke: "#315b43", "stroke-width": 2, "stroke-dasharray": "5 4" });
        } else if (geometryLevel === 25) {
          addSvgElement("line", { x1: 100, y1: 250, x2: 240, y2: 250, stroke: "#315b43", "stroke-width": 2, "stroke-dasharray": "5 4" });
          addSvgElement("line", { x1: 100, y1: 250, x2: 100, y2: 110, stroke: "#315b43", "stroke-width": 2, "stroke-dasharray": "5 4" });
        }
        const values = activeExtraChallenge.diagramMeasurements || [];
        svg.setAttribute("aria-label", `${translateValue("Mesures del dibuix")}: ${values.join(", ")}`);
        values.forEach((value, index) => {
          const [x, y] = dimensionPositions[geometryLevel]?.[index] || [240, 320];
          const width = Math.max(54, value.length * 7 + 16);
          const group = addSvgElement("g", { class: "geometry-measurement" });
          const background = document.createElementNS(svgNamespace, "rect");
          background.setAttribute("x", String(x - width / 2));
          background.setAttribute("y", String(y - 12));
          background.setAttribute("width", String(width));
          background.setAttribute("height", "24");
          background.setAttribute("rx", "8");
          group.append(background);
          const label = document.createElementNS(svgNamespace, "text");
          label.setAttribute("x", String(x));
          label.setAttribute("y", String(y + 4));
          label.textContent = value;
          group.append(label);
        });
        symbols.replaceChildren(svg);
      } else if (hasProjectionDiagram) {
        const svgNamespace = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNamespace, "svg");
        svg.setAttribute("viewBox", "0 0 630 260");
        svg.setAttribute("role", "group");
        const add = (name, attributes, text = "") => {
          const element = document.createElementNS(svgNamespace, name);
          Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
          if (text) element.textContent = text;
          svg.append(element);
          return element;
        };
        const matrix = activeExtraChallenge.projectionData;
        const maxima = [
          matrix.flat(),
          matrix.map((row) => Math.max(...row)),
          matrix[0].map((_, col) => Math.max(...matrix.map((row) => row[col])))
        ];
        const labels = currentLanguage === "en"
          ? ["TOP", "FRONT", "SIDE"]
          : currentLanguage === "es"
            ? ["PLANTA", "ALZADO", "PERFIL"]
            : ["PLANTA", "ALÇAT", "PERFIL"];
        labels.forEach((label, panel) => {
          const originX = 25 + panel * 205;
          add("text", { x: originX + 80, y: 25, fill: "#315b43", "font-size": 15, "font-weight": 750, "text-anchor": "middle" }, label);
          if (panel === 0) {
            matrix.forEach((row, rowIndex) => row.forEach((height, colIndex) => {
              const x = originX + 34 + colIndex * 32;
              const y = 55 + rowIndex * 32;
              const square = add("rect", {
                x, y, width: 30, height: 30,
                fill: height ? "#dce9df" : "#fff",
                stroke: "#315b43",
                "data-row": rowIndex,
                "data-col": colIndex,
                role: "button",
                tabindex: 0,
                "aria-label": `${translateValue("Fila")} ${rowIndex + 1}, ${translateValue("columna")} ${"ABC"[colIndex]}`
              });
              square.classList.add("projection-answer-square");
              const chooseSquare = () => submitExtraAnswer(`${rowIndex},${colIndex}`);
              square.addEventListener("click", chooseSquare);
              square.addEventListener("keydown", (event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  chooseSquare();
                }
              });
            }));
            for (let index = 0; index < 3; index += 1) {
              add("text", {
                x: originX + 49 + index * 32,
                y: 51,
                fill: "#26332c",
                "font-size": 10,
                "text-anchor": "middle"
              }, "ABC"[index]);
              add("text", {
                x: originX + 25,
                y: 75 + index * 32,
                fill: "#26332c",
                "font-size": 10,
                "text-anchor": "middle"
              }, String(index + 1));
            }
          } else {
            const bars = maxima[panel];
            const baseY = 190;
            const firstX = originX + 24;
            const barWidth = 32;
            const step = barWidth;
            const points = [[firstX, baseY], [firstX, baseY - bars[0] * 24]];
            bars.forEach((height, index) => {
              const rightX = firstX + (index + 1) * step;
              points.push([rightX, baseY - height * 24]);
              if (index < bars.length - 1) points.push([rightX, baseY - bars[index + 1] * 24]);
            });
            points.push([firstX + bars.length * step, baseY]);
            const outline = points.map(([x, y], index) => `${index ? "L" : "M"} ${x} ${y}`).join(" ") + " Z";
            add("path", {
              d: outline,
              fill: "#dce9df",
              stroke: "#315b43",
              "stroke-width": 2,
              "stroke-linejoin": "round"
            });
            bars.forEach((height, index) => {
              const x = firstX + index * step;
              const barHeight = height * 24;
              add("text", { x: x + 16, y: baseY - barHeight - 6, fill: "#26332c", "font-size": 12, "text-anchor": "middle" }, String(height));
              add("text", { x: x + 16, y: baseY + 15, fill: "#26332c", "font-size": 10, "text-anchor": "middle" }, panel === 1 ? String(index + 1) : "ABC"[index]);
            });
            add("line", { x1: originX + 15, y1: baseY, x2: originX + 175, y2: baseY, stroke: "#315b43", "stroke-width": 2 });
          }
        });
        svg.setAttribute("aria-label", translateValue("Planta, alçat i perfil d'una estructura de cubs. Selecciona una casella de la planta."));
        symbols.replaceChildren(svg);
      } else if (hasMiniGrid) {
        const size = activeExtraChallenge.grid.length;
        symbols.replaceChildren();
        symbols.style.setProperty("--grid-size", size);
        symbols.setAttribute("role", "grid");
        activeExtraChallenge.grid.flat().forEach((value, index) => {
          const row = Math.floor(index / size);
          const col = index % size;
          let cell = document.createElement("span");
          cell.className = "mini-grid-cell";
          cell.setAttribute("role", "gridcell");
          cell.textContent = value;
          if (col < size - 1 && (col + 1) % activeExtraChallenge.boxWidth === 0) cell.classList.add("box-right");
          if (row < size - 1 && (row + 1) % activeExtraChallenge.boxHeight === 0) cell.classList.add("box-bottom");
          symbols.append(cell);
        });
      } else if (hasCoordinateGrid) {
        const size = activeExtraChallenge.coordinateGrid.length;
        const dimension = size + 1;
        symbols.replaceChildren();
        symbols.style.setProperty("--grid-size", dimension);
        symbols.setAttribute("role", "grid");
        for (let row = 0; row < dimension; row += 1) {
          for (let col = 0; col < dimension; col += 1) {
            let cell = document.createElement("span");
            cell.className = "mini-grid-cell";
            cell.setAttribute("role", "gridcell");
            if (row === 0 || col === 0) {
              cell.classList.add("coordinate-header");
              cell.textContent = row === 0
                ? (col === 0 ? "" : activeExtraChallenge.coordinateColumns[col - 1])
                : activeExtraChallenge.coordinateRows?.[row - 1] || String(row);
            } else if (isChess) {
              const square = `${activeExtraChallenge.coordinateColumns[col - 1]}${activeExtraChallenge.coordinateRows[row - 1]}`;
              const piece = activeExtraChallenge.coordinateGrid[row - 1][col - 1];
              const chessSquare = document.createElement("button");
              chessSquare.type = "button";
              chessSquare.className = `mini-grid-cell interactive-cell chess-square ${(row + col) % 2 === 0 ? "chess-light" : "chess-dark"}`;
              chessSquare.textContent = piece;
              chessSquare.dataset.square = square;
              chessSquare.setAttribute("role", "gridcell");
              chessSquare.setAttribute("aria-label", `${square}${piece === "·" ? "" : `, ${piece}`}`);
              chessSquare.setAttribute("aria-pressed", "false");
              chessSquare.addEventListener("click", () => {
                if (!selectedChessSquare) {
                  if (!"♙♘♗♖♕♔".includes(piece)) return;
                  selectedChessSquare = square;
                } else if (square === selectedChessSquare) {
                  selectedChessSquare = "";
                } else if ("♙♘♗♖♕♔".includes(piece)) {
                  selectedChessSquare = square;
                } else {
                  const move = `${selectedChessSquare}-${square}`;
                  selectedChessSquare = "";
                  submitExtraAnswer(move);
                }
                symbols.querySelectorAll(".chess-square").forEach((button) => {
                  const selected = button.dataset.square === selectedChessSquare;
                  button.classList.toggle("chess-selected", selected);
                  button.setAttribute("aria-pressed", String(selected));
                });
              });
              cell = chessSquare;
            } else {
              cell.textContent = activeExtraChallenge.coordinateGrid[row - 1][col - 1];
            }
            symbols.append(cell);
          }
        }
      } else if (currentCategory === "nonogram" && hasInteractiveGrid) {
        const size = activeExtraChallenge.interactiveGrid.length;
        const rowClues = activeExtraChallenge.nonogramRowClues;
        const columnClues = activeExtraChallenge.nonogramColumnClues;
        symbols.replaceChildren();
        symbols.style.setProperty("--grid-size", size);
        symbols.setAttribute("role", "grid");
        symbols.setAttribute("aria-label", translateValue("Graella de nonograma amb pistes de files i columnes."));
        const addClue = (clues, className, row, column, orientation, index) => {
          const clue = document.createElement("span");
          clue.className = `nonogram-line-clue ${className}`;
          clue.dataset.orientation = orientation;
          clue.dataset.line = String(index);
          clue.style.gridRow = String(row);
          clue.style.gridColumn = String(column);
          clue.setAttribute("aria-label", `${translateValue(orientation === "row" ? "Fila" : "columna")} ${index + 1}: ${clues.join(", ")}`);
          clues.forEach((number) => {
            const item = document.createElement("span");
            item.textContent = String(number);
            clue.append(item);
          });
          symbols.append(clue);
          return clue;
        };
        const corner = document.createElement("span");
        corner.className = "nonogram-corner";
        corner.style.gridRow = "1";
        corner.style.gridColumn = "1";
        corner.setAttribute("aria-hidden", "true");
        symbols.append(corner);
        columnClues.forEach((clues, column) => addClue(clues, "nonogram-column-clue", "1", String(column + 2), "column", column));
        rowClues.forEach((clues, row) => addClue(clues, "nonogram-row-clue", String(row + 2), "1", "row", row));
        const cells = [];
        activeExtraChallenge.interactiveGrid.forEach((rowData, row) => rowData.forEach((_, column) => {
          const cell = document.createElement("button");
          cell.type = "button";
          cell.className = "interactive-cell nonogram-cell";
          cell.setAttribute("role", "gridcell");
          cell.setAttribute("aria-label", `${translateValue("Fila")} ${row + 1}, ${translateValue("columna")} ${column + 1}`);
          cell.setAttribute("aria-pressed", "false");
          cell.dataset.row = String(row);
          cell.dataset.col = String(column);
          cell.style.gridRow = String(row + 2);
          cell.style.gridColumn = String(column + 2);
          cell.addEventListener("click", () => {
            cell.setAttribute("aria-pressed", String(cell.getAttribute("aria-pressed") !== "true"));
            const runsForLine = (line) => {
              const runs = [];
              let run = 0;
              line.forEach((filled) => {
                if (filled) run += 1;
                else if (run) {
                  runs.push(run);
                  run = 0;
                }
              });
              if (run) runs.push(run);
              return runs;
            };
            const matches = (actual, expected) => actual.length === expected.length && actual.every((value, index) => value === expected[index]);
            rowClues.forEach((clue, clueRow) => {
              const filled = cells.filter((item) => Number(item.dataset.row) === clueRow).map((item) => item.getAttribute("aria-pressed") === "true");
              const node = symbols.querySelector(`.nonogram-line-clue[data-orientation="row"][data-line="${clueRow}"]`);
              node.classList.toggle("is-solved", matches(runsForLine(filled), clue));
            });
            columnClues.forEach((clue, clueColumn) => {
              const filled = cells.filter((item) => Number(item.dataset.col) === clueColumn).map((item) => item.getAttribute("aria-pressed") === "true");
              const node = symbols.querySelector(`.nonogram-line-clue[data-orientation="column"][data-line="${clueColumn}"]`);
              node.classList.toggle("is-solved", matches(runsForLine(filled), clue));
            });
          });
          cells.push(cell);
          symbols.append(cell);
        }));
      } else if (hasInteractiveGrid || hasTilingGrid) {
        const gridData = hasInteractiveGrid ? activeExtraChallenge.interactiveGrid : activeExtraChallenge.tilingGrid;
        const size = gridData[0].length;
        symbols.replaceChildren();
        symbols.style.setProperty("--grid-size", size);
        symbols.setAttribute("role", "grid");
        const cells = [];
        gridData.forEach((rowData, row) => rowData.forEach((value, col) => {
          const cell = document.createElement("button");
          cell.type = "button";
          cell.className = "interactive-cell";
          cell.setAttribute("role", "gridcell");
          cell.setAttribute("aria-label", `${translateValue("Fila")} ${row + 1}, ${translateValue("columna")} ${col + 1}`);
          cell.dataset.row = String(row);
          cell.dataset.col = String(col);
          if (hasInteractiveGrid) {
            cell.setAttribute("aria-pressed", "false");
            cell.addEventListener("click", () => {
              const isFilled = cell.getAttribute("aria-pressed") === "true";
              cell.setAttribute("aria-pressed", String(!isFilled));
              cell.textContent = isFilled ? "" : "■";
            });
          } else if (!value) {
            cell.classList.add("tile-blocked");
            cell.disabled = true;
          } else {
            cell.dataset.covered = "false";
            cell.setAttribute("aria-pressed", "false");
          }
          cells.push(cell);
          symbols.append(cell);
        }));
        if (hasTilingGrid) {
          const pieces = activeExtraChallenge.tilingPieces;
          const palette = ["#5d9271", "#d18b53", "#658bb1", "#a778aa", "#c5a144", "#4b9b9b", "#d16d69", "#77954b"];
          const workbench = document.createElement("div");
          workbench.className = "tiling-workbench";
          symbols.before(workbench);
          workbench.append(symbols);
          const trayLabel = document.createElement("p");
          trayLabel.className = "tiling-tray-label";
          trayLabel.textContent = translateValue("Peces disponibles");
          const tray = document.createElement("div");
          tray.className = "tiling-piece-tray";
          tray.setAttribute("role", "group");
          tray.setAttribute("aria-label", translateValue("Peces disponibles"));
          const pieceButtons = [];
          let selectedPiece = -1;
          let selectedShape = null;
          let selectedAnchor = null;
          let pendingPlacement = null;
          const feedback = document.getElementById("extra-feedback");
          const rotateButton = document.createElement("button");
          rotateButton.type = "button";
          rotateButton.className = "button tiling-action";
          rotateButton.textContent = translateValue("Gira peça");
          rotateButton.disabled = true;
          const placeButton = document.createElement("button");
          placeButton.type = "button";
          placeButton.className = "button primary tiling-action";
          placeButton.textContent = translateValue("Accepta i col·loca");
          placeButton.disabled = true;
          const undoButton = document.createElement("button");
          undoButton.type = "button";
          undoButton.className = "button tiling-action";
          undoButton.textContent = translateValue("Desfés darrera peça");
          undoButton.disabled = true;
          const actions = document.createElement("div");
          actions.className = "tiling-actions";
          actions.append(rotateButton, placeButton, undoButton);
          const placedPieces = [];
          const normalizeShape = (shape) => {
            const minRow = Math.min(...shape.map(([row]) => row));
            const minCol = Math.min(...shape.map(([, col]) => col));
            return shape.map(([row, col]) => [row - minRow, col - minCol]);
          };
          const renderPieceVisual = (button, shape, color) => {
            const visual = document.createElement("span");
            visual.className = "tiling-piece-visual";
            const width = Math.max(...shape.map(([, col]) => col)) + 1;
            const height = Math.max(...shape.map(([row]) => row)) + 1;
            visual.style.setProperty("--piece-width", width);
            visual.style.setProperty("--piece-height", height);
            shape.forEach(([row, col]) => {
              const square = document.createElement("span");
              square.className = "tiling-piece-cell";
              square.style.gridRow = String(row + 1);
              square.style.gridColumn = String(col + 1);
              square.style.setProperty("--piece-color", color);
              visual.append(square);
            });
            const label = button.querySelector(".tiling-piece-label");
            button.replaceChildren(visual, label);
          };
          const setFeedback = (message, isError = false) => {
            feedback.textContent = message;
            feedback.className = `extra-feedback${isError ? " error" : ""}`;
          };
          const refreshTilingPreview = () => {
            cells.forEach((cell) => cell.classList.remove("tile-preview-valid", "tile-preview-invalid"));
            pendingPlacement = null;
            if (selectedPiece < 0 || !selectedAnchor) {
              placeButton.disabled = true;
              return;
            }
            const targets = selectedShape.map(([row, col]) => {
              const targetRow = selectedAnchor.row + row;
              const targetCol = selectedAnchor.col + col;
              if (targetRow < 0 || targetRow >= gridData.length || targetCol < 0 || targetCol >= size) return null;
              return cells[targetRow * size + targetCol];
            });
            const valid = targets.every((cell) => cell && !cell.disabled && cell.dataset.covered !== "true");
            targets.filter(Boolean).forEach((cell) => cell.classList.add(valid ? "tile-preview-valid" : "tile-preview-invalid"));
            pendingPlacement = valid ? targets : null;
            placeButton.disabled = !valid;
          };
          const selectPiece = (pieceIndex) => {
            selectedPiece = pieceIndex;
            selectedShape = pieces[pieceIndex].cells.map((position) => [...position]);
            selectedAnchor = null;
            pieceButtons.forEach((button, index) => {
              const selected = index === pieceIndex;
              button.classList.toggle("is-selected", selected);
              button.setAttribute("aria-pressed", String(selected));
            });
            rotateButton.disabled = false;
            refreshTilingPreview();
            setFeedback(translateValue("Peça seleccionada: tria una casella d'inici."));
          };
          pieces.forEach((piece, index) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "tiling-piece-option";
            button.setAttribute("aria-pressed", "false");
            button.setAttribute("aria-label", localized(
              `Peça ${index + 1}, ${piece.cells.length} caselles`,
              `Piece ${index + 1}, ${piece.cells.length} squares`,
              `Pieza ${index + 1}, ${piece.cells.length} casillas`
            ));
            const label = document.createElement("span");
            label.className = "tiling-piece-label";
            label.textContent = `${index + 1} · ${piece.cells.length}`;
            button.append(label);
            renderPieceVisual(button, piece.cells, palette[index % palette.length]);
            button.addEventListener("click", () => {
              if (button.disabled) return;
              selectPiece(index);
            });
            pieceButtons.push(button);
            tray.append(button);
          });
          cells.forEach((cell) => cell.addEventListener("click", () => {
            if (selectedPiece < 0) {
              setFeedback(translateValue("Selecciona una peça abans de triar una casella."), true);
              return;
            }
            selectedAnchor = { row: Number(cell.dataset.row), col: Number(cell.dataset.col) };
            refreshTilingPreview();
            if (!pendingPlacement) setFeedback(translateValue("La peça no hi cap en aquesta posició."), true);
          }));
          rotateButton.addEventListener("click", () => {
            if (selectedPiece < 0) return;
            selectedShape = normalizeShape(selectedShape.map(([row, col]) => [col, -row]));
            renderPieceVisual(pieceButtons[selectedPiece], selectedShape, palette[selectedPiece % palette.length]);
            selectedAnchor = null;
            refreshTilingPreview();
            setFeedback(translateValue("Peça girada. Tria una casella d'inici."));
          });
          placeButton.addEventListener("click", () => {
            if (!pendingPlacement || selectedPiece < 0) return;
            const pieceIndex = selectedPiece;
            pendingPlacement.forEach((cell) => {
              cell.dataset.covered = "true";
              cell.dataset.piece = String(pieceIndex);
              cell.style.setProperty("--piece-color", palette[pieceIndex % palette.length]);
              cell.classList.add("tile-covered");
              cell.setAttribute("aria-pressed", "true");
            });
            placedPieces.push({ pieceIndex, cells: [...pendingPlacement] });
            pieceButtons[pieceIndex].disabled = true;
            pieceButtons[pieceIndex].classList.add("is-placed");
            selectedPiece = -1;
            selectedShape = null;
            selectedAnchor = null;
            rotateButton.disabled = true;
            undoButton.disabled = false;
            pieceButtons.forEach((button) => {
              button.classList.remove("is-selected");
              button.setAttribute("aria-pressed", "false");
            });
            refreshTilingPreview();
            setFeedback(translateValue("Peça col·locada."));
            if (placedPieces.length === pieces.length) submitExtraAnswer("tile-complete");
          });
          undoButton.addEventListener("click", () => {
            const placement = placedPieces.pop();
            if (!placement) return;
            placement.cells.forEach((cell) => {
              cell.dataset.covered = "false";
              delete cell.dataset.piece;
              cell.style.removeProperty("--piece-color");
              cell.classList.remove("tile-covered");
              cell.setAttribute("aria-pressed", "false");
            });
            const pieceButton = pieceButtons[placement.pieceIndex];
            pieceButton.disabled = false;
            pieceButton.classList.remove("is-placed");
            selectPiece(placement.pieceIndex);
            undoButton.disabled = placedPieces.length === 0;
          });
          workbench.append(trayLabel, tray, actions);
        }
      }
      const options = document.getElementById("extra-options");
      options.replaceChildren();
      const answerInput = document.getElementById("extra-input");
      answerInput.value = "";
      answerInput.disabled = false;
      answerInput.type = "text";
      answerInput.placeholder = translateValue("Escriu la resposta", currentLanguage);
      answerInput.autocomplete = "off";
      document.getElementById("extra-answer").hidden = Boolean(activeExtraChallenge.options) || hasTilingGrid || isChess || isProjection;
      answerInput.hidden = hasInteractiveGrid || hasTilingGrid || isChess || isProjection;
      answerInput.required = !hasInteractiveGrid && !hasTilingGrid && !isChess && !isProjection;
      document.getElementById("extra-feedback").textContent = "";
      document.getElementById("extra-feedback").className = "extra-feedback";
      document.querySelector('#extra-form button[type="submit"]').disabled = false;
      document.querySelector('#extra-form button[type="submit"]').hidden = hasTilingGrid || isChess || isProjection;
      if (activeExtraChallenge.options) {
        activeExtraChallenge.options.forEach((choice) => {
          const button = document.createElement("button");
          button.type = "button";
          button.className = "choice-button";
          button.textContent = choice;
          button.addEventListener("click", () => submitExtraAnswer(choice));
          options.append(button);
        });
      } else {
        answerInput.type = currentCategory === "anagrams" || currentCategory === "cipher" || currentCategory === "directions" || currentCategory === "mini-grid" || currentCategory === "laser" ? "text" : "number";
        answerInput.inputMode = answerInput.type === "number" ? "numeric" : "text";
      }
      if (isArithmetic) {
        renderArithmeticOperation();
        startArithmeticTimer();
      }
      translateTree();
    }

    function submitExtraAnswer(value) {
      if (!activeExtraChallenge) return;
      if (currentCategory === "arithmetic") {
        submitArithmeticAnswer(value);
        return;
      }
      if (currentCategory === "nonogram") {
        value = activeExtraChallenge.interactiveGrid
          .map((row, rowIndex) => row.map((_, colIndex) =>
            document.querySelector(`#extra-symbols button[data-row="${rowIndex}"][data-col="${colIndex}"]`).getAttribute("aria-pressed") === "true" ? "1" : "0"
          ).join(""))
          .join("/");
      }
      const normalize = (answer) => String(answer).trim().toLocaleLowerCase(currentLanguage).normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "");
      const correct = currentCategory === "tiling"
        ? value === "tile-complete"
        : currentCategory === "mini-grid"
        ? String(value).split(/[,\s]+/).filter(Boolean).map(normalize).join(",") === activeExtraChallenge.answer.split(",").map(normalize).join(",")
        : normalize(value) === normalize(activeExtraChallenge.answer);
      const feedback = document.getElementById("extra-feedback");
      if (!correct) {
        feedback.textContent = translateValue("Resposta incorrecta. Torna-ho a provar.");
        feedback.className = "extra-feedback error";
        return;
      }
      if (currentCategory === "chess") {
        const { from, to, promotion } = activeExtraChallenge.chessMove;
        const fromRow = 8 - Number(from[1]);
        const toRow = 8 - Number(to[1]);
        const columns = "ABCDEFGH";
        const fromCol = columns.indexOf(from[0]);
        const toCol = columns.indexOf(to[0]);
        const piece = activeExtraChallenge.coordinateGrid[fromRow][fromCol];
        const movedPiece = promotion ? "♕" : piece;
        activeExtraChallenge.coordinateGrid[fromRow][fromCol] = "·";
        activeExtraChallenge.coordinateGrid[toRow][toCol] = movedPiece;
        const fromCell = document.querySelector(`#extra-symbols .chess-square[data-square="${from}"]`);
        const toCell = document.querySelector(`#extra-symbols .chess-square[data-square="${to}"]`);
        const fromAttributes = originalAttributes.get(fromCell) || {};
        fromAttributes["aria-label"] = from;
        originalAttributes.set(fromCell, fromAttributes);
        const toAttributes = originalAttributes.get(toCell) || {};
        toAttributes["aria-label"] = `${to}, ${movedPiece}`;
        originalAttributes.set(toCell, toAttributes);
        fromCell.textContent = "·";
        fromCell.setAttribute("aria-label", from);
        toCell.textContent = movedPiece;
        toCell.setAttribute("aria-label", `${to}, ${movedPiece}`);
      }
      feedback.textContent = activeExtraChallenge.explanation
        ? localized(
          `Correcte! Nivell completat. ${activeExtraChallenge.explanation.ca}`,
          `Correct! Level completed. ${activeExtraChallenge.explanation.en}`,
          `¡Correcto! Nivel completado. ${activeExtraChallenge.explanation.es}`
        )
        : translateValue("Correcte! Nivell completat.");
      feedback.className = "extra-feedback success";
      document.getElementById("extra-input").disabled = true;
      document.querySelector('#extra-form button[type="submit"]').disabled = true;
      document.querySelectorAll("#extra-options button").forEach((button) => {
        button.disabled = true;
        if (normalize(button.textContent) === normalize(activeExtraChallenge.answer)) button.classList.add("correct");
      });
      document.querySelectorAll("#extra-symbols .interactive-cell").forEach((button) => { button.disabled = true; });
      document.querySelectorAll(".tiling-workbench button").forEach((button) => { button.disabled = true; });
      markLevelSolved();
    }

    document.getElementById("extra-form").addEventListener("submit", (event) => {
      event.preventDefault();
      submitExtraAnswer(document.getElementById("extra-input").value);
    });
