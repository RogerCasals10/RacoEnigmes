function createWeightsChallenge(category, level) {
        const weights = [level + 2, level * 2 + 3, level * 3 + 1];
        const names = ["A", "B", "C"];
        let targetIndex;
        let equations;
        const formatEquation = (coefficients) => {
          const terms = coefficients
            .map((coefficient, index) => coefficient ? `${coefficient === 1 ? "" : coefficient}${names[index]}` : "")
            .filter(Boolean);
          const total = coefficients.reduce((sum, coefficient, index) => sum + coefficient * weights[index], 0);
          return `${terms.join(" + ")} = ${total} kg`;
        };
        if (level === 1) {
          targetIndex = 1;
          equations = [`A + B = ${weights[0] + weights[1]} kg`, `A = ${weights[0]} kg`];
        } else if (level === 2) {
          targetIndex = 0;
          equations = [`A + B = ${weights[0] + weights[1]} kg`, `B = ${weights[1]} kg`];
        } else if (level === 3) {
          targetIndex = 2;
          equations = [
            `A + B = ${weights[0] + weights[1]} kg`,
            `B + C = ${weights[1] + weights[2]} kg`,
            `A = ${weights[0]} kg`
          ];
        } else {
          const challengeSystems = [
            { equations: [[1, 1, 0], [1, 0, 1], [0, 1, 1]], target: 0 },
            { equations: [[1, 1, 0], [1, 0, 1], [0, 1, 1]], target: 1 },
            { equations: [[1, 1, 0], [1, 0, 1], [0, 1, 1]], target: 2 },
            { equations: [[1, 1, 0], [1, 0, 2], [0, 1, 1]], target: 0 },
            { equations: [[2, 1, 0], [1, 2, 0], [0, 1, 1]], target: 1 },
            { equations: [[2, 1, 1], [1, 2, 1], [1, 1, 2]], target: 2 },
            { equations: [[1, 1, 0], [0, 1, 1], [2, 0, 1]], target: 0 }
          ];
          const system = challengeSystems[level - 4];
          targetIndex = system.target;
          equations = system.equations.map(formatEquation);
        }
        return {
          prompt: localized(`Quant pesa ${names[targetIndex]}?`, `How much does ${names[targetIndex]} weigh?`, `¿Cuánto pesa ${names[targetIndex]}?`),
          symbols: equations.join("\n"),
          answer: String(weights[targetIndex])
        };

    }
