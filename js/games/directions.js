function createDirectionsChallenge(category, level) {
        const compass = [
          { symbol: "→", x: 1, y: 0 },
          { symbol: "↗", x: 1, y: 1 },
          { symbol: "↑", x: 0, y: 1 },
          { symbol: "↖", x: -1, y: 1 },
          { symbol: "←", x: -1, y: 0 },
          { symbol: "↙", x: -1, y: -1 },
          { symbol: "↓", x: 0, y: -1 },
          { symbol: "↘", x: 1, y: -1 }
        ];
        const directions = level < 7 ? compass.filter((move) => move.x === 0 || move.y === 0) : compass;
        const moveCount = 4 + level;
        const maxDistance = level < 4 ? 1 : level < 7 ? 2 : 3;
        const moves = Array.from({ length: moveCount }, (_, index) => {
          const direction = directions[(index * 3 + level * 5) % directions.length];
          const distance = 1 + ((index * 2 + level) % maxDistance);
          return { ...direction, distance };
        });
        const point = moves.reduce((position, move) => {
          position.x += move.x * move.distance;
          position.y += move.y * move.distance;
          return position;
        }, { x: 0, y: 0 });
        const symbols = moves.map(({ symbol, distance }) => `${symbol}${distance > 1 ? ` ×${distance}` : ""}`).join(" ");
        const prompt = level < 4
          ? localized(
            "Comences a (0, 0). Cada fletxa és un pas. Escriu la coordenada final com x,y.",
            "Start at (0, 0). Each arrow is one step. Enter the final coordinate as x,y.",
            "Empiezas en (0, 0). Cada flecha es un paso. Escribe la coordenada final como x,y."
          )
          : level < 7
            ? localized(
              "Comences a (0, 0). El nombre × indica els passos en la direcció de la fletxa. Escriu x,y.",
              "Start at (0, 0). The × number gives the steps in the arrow's direction. Enter x,y.",
              "Empiezas en (0, 0). El número × indica los pasos en la dirección de la flecha. Escribe x,y."
            )
            : localized(
              "Comences a (0, 0). × indica els passos; les diagonals avancen igual en tots dos eixos. Escriu x,y.",
              "Start at (0, 0). × gives the steps; diagonal arrows move equally on both axes. Enter x,y.",
              "Empiezas en (0, 0). × indica los pasos; las diagonales avanzan igual en ambos ejes. Escribe x,y."
            );
        return {
          prompt,
          symbols,
          answer: `${point.x},${point.y}`
        };

    }
