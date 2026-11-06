function createChessChallenge(category, level) {
  const puzzles = [
    {
      pieces: [["C6", "♘"], ["E6", "♚"], ["F7", "♛"], ["A1", "♔"]],
      from: "C6",
      to: "D8",
      explanation: {
        ca: "El cavall a D8 fa una forquilla: dona escac al rei i alhora ataca la dama. El rei ha de respondre a l'escac i després podràs capturar la dama.",
        en: "The knight on D8 forks the king and queen: it gives check while attacking the queen. The king must answer the check, then you can capture the queen.",
        es: "El caballo en D8 hace una horquilla: da jaque al rey y ataca a la dama a la vez. El rey debe responder al jaque y después podrás capturar la dama."
      }
    },
    {
      pieces: [["B4", "♘"], ["D8", "♚"], ["E7", "♜"], ["H1", "♔"]],
      from: "B4",
      to: "C6",
      explanation: {
        ca: "El cavall a C6 ataca al rei amb escac i també a la torre d'E7. El rei no pot ignorar l'escac: després, el cavall guanyarà la torre.",
        en: "The knight on C6 checks the king and also attacks the rook on E7. The king cannot ignore check, so the knight will win the rook.",
        es: "El caballo en C6 da jaque al rey y también ataca a la torre de E7. El rey no puede ignorar el jaque, así que el caballo ganará la torre."
      }
    },
    {
      pieces: [["B2", "♗"], ["C3", "♟"], ["E5", "♚"], ["A5", "♛"], ["H1", "♔"]],
      from: "B2",
      to: "C3",
      explanation: {
        ca: "L'alfil captura el peó a C3, que li barrava el pas, i descobreix el rei a E5. Des de C3 també ataca la dama a A5 per l'altra diagonal: forquilla d'alfil amb escac.",
        en: "The bishop captures the pawn on C3, which was blocking the line to the king on E5. From C3 it also attacks the queen on A5 along the other diagonal: a bishop fork with check.",
        es: "El alfil captura el peón en C3, que bloqueaba la línea hacia el rey en E5. Desde C3 también ataca a la dama en A5 por la otra diagonal: una horquilla de alfil con jaque."
      }
    },
    {
      pieces: [["D5", "♗"], ["D7", "♛"], ["E8", "♚"], ["C1", "♖"], ["H1", "♔"]],
      from: "D5",
      to: "C6",
      explanation: {
        ca: "L'alfil queda alineat amb la dama a D7 i el rei a E8. La dama està clavada: si es mou, l'alfil donarà escac al rei.",
        en: "The bishop lines up the queen on D7 with the king on E8. The queen is pinned: if it moves, the bishop will check the king.",
        es: "El alfil queda alineado con la dama en D7 y el rey en E8. La dama está clavada: si se mueve, el alfil dará jaque al rey."
      }
    },
    {
      pieces: [["A1", "♖"], ["E7", "♚"], ["E8", "♛"], ["A2", "♔"]],
      from: "A1",
      to: "E1",
      explanation: {
        ca: "La torre entra a E1 i posa el rei a escac per la columna. El rei és davant de la dama: quan s'aparti de l'escac, la torre podrà capturar la dama. És un enfilall.",
        en: "The rook moves to E1 and checks up the file. The king is in front of the queen; once it moves out of check, the rook can capture the queen. This is a skewer.",
        es: "La torre llega a E1 y da jaque por la columna. El rey está delante de la dama; cuando se aparte del jaque, la torre podrá capturar la dama. Es un enfilado."
      }
    },
    {
      pieces: [["E4", "♗"], ["E1", "♖"], ["F5", "♞"], ["E8", "♚"], ["A1", "♔"]],
      from: "E4",
      to: "F5",
      explanation: {
        ca: "L'alfil captura el cavall de F5 i, en sortir de la columna E, descobreix un escac de la torre al rei. Guanyes una peça amb escac descobert.",
        en: "The bishop captures the knight on F5 and uncovers the rook's attack along the E-file. You win a piece with discovered check.",
        es: "El alfil captura el caballo de F5 y, al salir de la columna E, descubre el jaque de la torre al rey. Ganas una pieza con jaque descubierto."
      }
    },
    {
      pieces: [["D3", "♕"], ["C4", "♟"], ["F5", "♟"], ["H7", "♚"], ["B5", "♜"], ["A1", "♔"]],
      from: "D3",
      to: "F5",
      explanation: {
        ca: "La dama captura el peó a F5 i dona escac al rei a H7. A més, amenaça la torre a B5: el rei ha de respondre a l'escac i la dama podrà capturar la torre.",
        en: "The queen captures the pawn on F5 and checks the king on H7. It also threatens the rook on B5: the king must answer the check, then the queen can capture the rook.",
        es: "La dama captura el peón en F5 y da jaque al rey en H7. Además, amenaza a la torre en B5: el rey debe responder al jaque y la dama podrá capturar la torre."
      }
    },
    {
      pieces: [["A7", "♙"], ["B8", "♜"], ["H8", "♚"], ["H1", "♔"]],
      from: "A7",
      to: "B8",
      promotion: true,
      explanation: {
        ca: "El peó captura en diagonal la torre de B8 i es corona en dama amb escac: la nova dama ataca el rei per la fila 8. Guanyes una torre i forces una resposta immediata.",
        en: "The pawn captures the rook on B8 diagonally and promotes to a queen with check: the new queen attacks the king along rank 8. You win a rook and force an immediate response.",
        es: "El peón captura en diagonal la torre de B8 y corona en dama con jaque: la nueva dama ataca al rey por la fila 8. Ganas una torre y fuerzas una respuesta inmediata."
      }
    },
    {
      pieces: [["A1", "♖"], ["G8", "♚"], ["F7", "♟"], ["G7", "♟"], ["H7", "♟"], ["B1", "♔"]],
      from: "A1",
      to: "A8",
      explanation: {
        ca: "La torre a A8 dona escac al llarg de la vuitena fila. Els peons negres ocupen les sortides a F7, G7 i H7, i la torre atacaria F8 o H8 si el rei s'hi mogués: és escac i mat.",
        en: "The rook on A8 checks along the eighth rank. Black's pawns occupy F7, G7, and H7, and the rook would attack F8 or H8 if the king moved there: it is checkmate.",
        es: "La torre en A8 da jaque por la octava fila. Los peones negros ocupan las salidas en F7, G7 y H7, y la torre atacaría F8 o H8 si el rey se moviera allí: es jaque mate."
      }
    },
    {
      pieces: [["E4", "♗"], ["E1", "♖"], ["G6", "♛"], ["E8", "♚"], ["A1", "♔"]],
      from: "E4",
      to: "G6",
      explanation: {
        ca: "L'alfil captura la dama a G6. Alhora, en desocupar E4, descobreix l'escac de la torre per la columna E; l'alfil també ataca el rei per la diagonal. És un doble escac: el rei ha de moure's.",
        en: "The bishop captures the queen on G6. Leaving E4 also uncovers the rook's check on the E-file, while the bishop attacks the king along a diagonal. It is double check: the king must move.",
        es: "El alfil captura la dama en G6. Al salir de E4, descubre el jaque de la torre por la columna E; además, el alfil ataca al rey por la diagonal. Es un jaque doble: el rey debe moverse."
      }
    }
  ];
  const puzzle = puzzles[level - 1];
  if (!puzzle) throw new Error(`No hi ha cap repte d'escacs per al nivell ${level}.`);
  const squareIndex = (square) => ["ABCDEFGH".indexOf(square[0]), 8 - Number(square[1])];
  const grid = Array.from({ length: 8 }, () => Array(8).fill("·"));
  puzzle.pieces.forEach(([square, piece]) => {
    const [col, row] = squareIndex(square);
    grid[row][col] = piece;
  });
  return {
    prompt: localized(
      "Troba la millor jugada. Clica una peça blanca i després la casella de destí.",
      "Find the best move. Click a white piece, then its destination square.",
      "Encuentra la mejor jugada. Haz clic en una pieza blanca y luego en la casilla de destino."
    ),
    coordinateGrid: grid,
    coordinateColumns: "ABCDEFGH",
    coordinateRows: Array.from({ length: 8 }, (_, index) => String(8 - index)),
    boardType: "chess",
    chessMove: { from: puzzle.from, to: puzzle.to, promotion: puzzle.promotion === true },
    answer: `${puzzle.from}-${puzzle.to}`,
    explanation: puzzle.explanation
  };
}
