function createTilingChallenge(category, level) {
    const templates = [
      ["AAAB", "CADB", "CCDE", "FFDE"],
      ["AAAAB", "CCCCB", "DDDEE", "DDDFF", "GGGGG"],
      ["AAAAB", "CCDDB", "CEDDF", "CEGGF", "HHHHH"],
      ["AABBB", "AACCC", "DDDCC", "DDDFF", "EEFFG", "EEGGG"],
      ["AABBBB", "AABBBB", "AACCDD", "EECCDD", "EEFFGG", "HHFFGG"],
      ["AAABBB", "CAADDB", "CCCDDB", "EEEFFB", "EGGFFH", "GGGHHH"],
      ["AAABBC", "DAABBC", "DDDBCC", "EEEBFF", "EGGGFF", "HHGGFF"]
    ];
    const layouts = [
      ...templates,
      templates[0].map((row) => [...row].reverse().join("")),
      [...templates[1]].reverse(),
      templates[3].map((row) => [...row].reverse().join(""))
    ];
    const layout = layouts[level - 1].map((row) => [...row]);
    const pieceIds = [...new Set(layout.flat())];
    const tilingPieces = pieceIds.map((id) => {
      const positions = [];
      layout.forEach((row, rowIndex) => row.forEach((cell, colIndex) => {
        if (cell === id) positions.push([rowIndex, colIndex]);
      }));
      const minRow = Math.min(...positions.map(([row]) => row));
      const minCol = Math.min(...positions.map(([, col]) => col));
      return {
        cells: positions.map(([row, col]) => [row - minRow, col - minCol])
      };
    });
    const tilingGrid = layout.map((row) => row.map(() => true));
    return {
      prompt: localized(
        "Col·loca totes les peces al tauler. Selecciona una peça, tria on comença, gira-la si cal i accepta per col·locar-la.",
        "Fit every piece on the board. Select a piece, choose its starting square, rotate it if needed, then accept to place it.",
        "Coloca todas las piezas en el tablero. Selecciona una pieza, elige dónde empieza, gírala si hace falta y acepta para colocarla."
      ),
      tilingGrid,
      tilingPieces
    };

    }
