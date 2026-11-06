function createTilingChallenge(category, level) {
        const boards = [
          ["11", "11"],
          ["111", "111"],
          ["1111", "1111"],
          ["1111", "1111", "1111"],
          ["1111", "1111", "1111", "1111"],
          ["11111", "11111"],
          ["11111", "11111", "11111", "11111"],
          ["1111", "1111", "1111", "1111", "1111"],
          ["11111", "11111", "11111", "11111"],
          ["11111", "11111", "11111", "11111", "11111", "11111"]
        ];
        const tilingGrid = [...boards[level - 1]].map((row) => [...row].map((cell) => cell === "1"));
        const cells = tilingGrid.flat().filter(Boolean).length;
        return {
          prompt: localized(
            "Cobre totes les caselles amb dòminos de 1 × 2. Toca dues caselles veïnes per posar cada dòmino.",
            "Cover every square with 1 × 2 dominoes. Tap two neighboring squares to place each domino.",
            "Cubre todas las casillas con dominós de 1 × 2. Toca dos casillas vecinas para colocar cada dominó."
          ),
          tilingGrid,
          answer: String(cells / 2)
        };

    }
