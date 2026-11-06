function createMatchsticksChallenge(category, level) {
        const digitSegments = ["abcfed", "bc", "abged", "abgcd", "fgbc", "afgcd", "afgecd", "abc", "abcdefg", "abfgcd"];
        const symbolSegments = new Map(digitSegments.map((segments, digit) => [String(digit), new Set(segments)]));
        symbolSegments.set("+", new Set("hv"));
        symbolSegments.set("-", new Set("h"));
        const glyphFor = (segments) => [...symbolSegments].find(([, candidate]) =>
          candidate.size === segments.size && [...candidate].every((segment) => segments.has(segment))
        )?.[0];
        const valid = [];
        for (let left = 0; left <= 9; left += 1) {
          for (let right = 0; right <= 9; right += 1) {
            for (const operator of ["+", "-"]) {
              const answer = operator === "+" ? left + right : left - right;
              if (answer >= 0 && answer <= 9) valid.push(`${left}${operator}${right}=${answer}`);
            }
          }
        }
        const validSet = new Set(valid);
        const candidates = [];
        valid.forEach((equation) => {
          const target = [equation[0], equation[1], equation[2], equation[4]];
          for (let from = 0; from < target.length; from += 1) {
            for (const removed of symbolSegments.get(target[from])) {
              const sourceFrom = glyphFor(new Set([...symbolSegments.get(target[from])].filter((segment) => segment !== removed)));
              if (!sourceFrom) continue;
              for (let to = 0; to < target.length; to += 1) {
                if (to === from) continue;
                const availableSegments = symbolSegments.get(target[to]);
                const possibleSegments = target[to].match(/\d/) ? "abcdefg" : "hv";
                for (const added of possibleSegments) {
                  if (availableSegments.has(added)) continue;
                  const sourceTo = glyphFor(new Set([...availableSegments, added]));
                  if (!sourceTo) continue;
                  const sourceTokens = [...target];
                  sourceTokens[from] = sourceFrom;
                  sourceTokens[to] = sourceTo;
                  const source = `${sourceTokens[0]}${sourceTokens[1]}${sourceTokens[2]}=${sourceTokens[3]}`;
                  if (!validSet.has(source) && source !== equation) candidates.push({ source, answer: equation });
                }
              }
            }
          }
        });
        const uniqueCandidates = [...new Map(candidates.map((candidate) => [`${candidate.source}:${candidate.answer}`, candidate])).values()];
        const puzzle = uniqueCandidates[(level * 37) % uniqueCandidates.length];
        if (!puzzle) throw new Error("No s'ha pogut generar un repte de llumins.");
        const distractors = valid.filter((equation) => equation !== puzzle.answer && equation !== puzzle.source).slice(level, level + 3);
        const options = randomize([puzzle.answer, ...distractors]);
        const format = (equation) => [...equation].join(" ");
        return {
          prompt: localized("Mou exactament un llumí. Quina igualtat correcta pots formar?", "Move exactly one match. Which correct equation can you make?", "Mueve exactamente una cerilla. ¿Qué igualdad correcta puedes formar?"),
          symbols: format(puzzle.source),
          options: options.map(format),
          answer: format(puzzle.answer)
        };

    }
