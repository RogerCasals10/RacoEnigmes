function createProjectionsChallenge(category, level) {
  const maximumPositions = [
    [0, 0], [1, 2], [2, 1], [0, 2], [1, 0],
    [2, 2], [0, 1], [1, 2], [2, 0], [2, 1]
  ];
  const [targetRow, targetColumn] = maximumPositions[level - 1];
  if (!maximumPositions[level - 1]) throw new Error(`No hi ha cap repte de vistes 3D per al nivell ${level}.`);
  const projectionData = Array.from({ length: 3 }, (_, row) =>
    Array.from({ length: 3 }, (_, column) => {
      if (row === targetRow && column === targetColumn) return 4 + Math.floor((level - 1) / 3);
      return 1 + ((row * 2 + column + level) % 3);
    })
  );
  const maximumHeight = projectionData[targetRow][targetColumn];
  return {
    prompt: localized(
      "Quina casella de la planta conté la pila més alta? Combina la fila indicada per l'alçat amb la columna indicada pel perfil i toca'n la intersecció.",
      "Which top-view square contains the tallest stack? Combine the row shown by the front view with the column shown by the side view, then tap their intersection.",
      "¿Qué casilla de la planta contiene la pila más alta? Combina la fila indicada por el alzado con la columna indicada por el perfil y toca su intersección."
    ),
    projectionData,
    projectionAnswer: { row: targetRow, column: targetColumn },
    answer: `${targetRow},${targetColumn}`,
    explanation: {
      ca: `L'alçat mostra que la fila ${targetRow + 1} arriba a ${maximumHeight} cubs i el perfil mostra que la columna ${"ABC"[targetColumn]} arriba a ${maximumHeight}. A la planta, la intersecció d'aquesta fila i columna és la pila més alta.`,
      en: `The front view shows row ${targetRow + 1} reaches ${maximumHeight} cubes, and the side view shows column ${"ABC"[targetColumn]} reaches ${maximumHeight}. Their intersection in the top view is the tallest stack.`,
      es: `El alzado muestra que la fila ${targetRow + 1} alcanza ${maximumHeight} cubos y el perfil muestra que la columna ${"ABC"[targetColumn]} alcanza ${maximumHeight}. Su intersección en la planta es la pila más alta.`
    }
  };
}
