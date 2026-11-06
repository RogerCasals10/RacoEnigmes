    let activeExtraChallenge = null;
    let selectedChessSquare = "";
    function newExtraGame() {
      clearArithmeticTimer();
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
      const symbols = document.getElementById("extra-symbols");
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
          21: "M 95 100 H 245 V 75 H 340 V 170 H 245 V 250 H 95 Z",
          22: "M 100 115 H 205 V 70 H 315 V 115 H 380 V 255 H 100 Z",
          23: "circle",
          24: "M 100 250 A 140 140 0 0 1 380 250 Z",
          25: "M 100 250 A 140 140 0 0 1 240 110 V 250 Z",
          26: "M 100 80 H 380 V 150 H 250 V 270 H 100 Z",
          27: "M 240 55 L 315 70 L 370 115 L 390 175 L 370 235 L 315 280 L 240 295 L 165 280 L 110 235 L 90 175 L 110 115 L 165 70 Z",
          28: "M 240 55 L 325 80 L 380 145 L 365 225 L 300 280 L 180 280 L 115 225 L 100 145 L 155 80 Z",
          29: "M 95 80 H 385 V 275 H 95 V 230 H 150 V 180 H 95 Z",
          30: "M 100 250 H 380 V 100 A 140 140 0 0 0 100 100 Z"
        };
        const geometryLevel = activeExtraChallenge.geometryLevel;
        const shape = shapes[geometryLevel] || shapes[3];
        if (shape === "circle") {
          addSvgElement("circle", { cx: 240, cy: 175, r: 120, fill: "#dce9df", stroke: "#315b43", "stroke-width": 3 });
        } else {
          addSvgElement("path", { d: shape, fill: "#dce9df", stroke: "#315b43", "stroke-width": 3, "stroke-linejoin": "round" });
        }
        if (geometryLevel === 18 || geometryLevel === 29) {
          addSvgElement("rect", {
            x: geometryLevel === 18 ? 205 : 215,
            y: geometryLevel === 18 ? 145 : 150,
            width: geometryLevel === 18 ? 90 : 70,
            height: geometryLevel === 18 ? 70 : 55,
            fill: "#fffefa",
            stroke: "#315b43",
            "stroke-width": 2
          });
        }
        const values = geometryLevel === 1
          ? ["14 cm", "4 cm", "10 cm", "4 cm"]
          : geometryLevel === 2
            ? ["7 cm", "9 cm", "12 cm"]
            : (activeExtraChallenge.diagramText.match(/\d+(?:[.,]\d+)?/g) || []).map((value) => `${value} cm`);
        svg.setAttribute("aria-label", `${translateValue("Mesures del dibuix")}: ${values.join(", ")}`);
        const caption = addSvgElement("text", { x: 240, y: 335, fill: "#26332c", "font-size": 18, "font-weight": 750, "text-anchor": "middle" });
        caption.textContent = values.join("  ·  ");
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
          let selectedTileCell = null;
          cells.filter((cell) => !cell.disabled).forEach((cell) => cell.addEventListener("click", () => {
            if (cell.dataset.covered === "true") return;
            if (selectedTileCell === cell) {
              cell.classList.remove("tile-selected");
              selectedTileCell = null;
              return;
            }
            if (!selectedTileCell) {
              selectedTileCell = cell;
              cell.classList.add("tile-selected");
              return;
            }
            const firstRow = Number(selectedTileCell.dataset.row);
            const firstCol = Number(selectedTileCell.dataset.col);
            const row = Number(cell.dataset.row);
            const col = Number(cell.dataset.col);
            if (Math.abs(firstRow - row) + Math.abs(firstCol - col) !== 1) {
              document.getElementById("extra-feedback").textContent = translateValue("Tria dues caselles veïnes.");
              document.getElementById("extra-feedback").className = "extra-feedback error";
              selectedTileCell.classList.remove("tile-selected");
              selectedTileCell = null;
              return;
            }
            [selectedTileCell, cell].forEach((tileCell) => {
              tileCell.dataset.covered = "true";
              tileCell.setAttribute("aria-pressed", "true");
              tileCell.classList.add("tile-covered");
              tileCell.classList.remove("tile-selected");
              tileCell.textContent = "▰";
            });
            selectedTileCell = null;
            const remaining = cells.filter((tileCell) => !tileCell.disabled && tileCell.dataset.covered !== "true").length;
            if (remaining === 0) submitExtraAnswer("tile-complete");
          }));
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
      markLevelSolved();
    }

    document.getElementById("extra-form").addEventListener("submit", (event) => {
      event.preventDefault();
      submitExtraAnswer(document.getElementById("extra-input").value);
    });
