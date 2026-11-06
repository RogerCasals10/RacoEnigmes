    function newMemoryGame() {
      memorySequence = Array.from({ length: 2 + currentLevel }, () => Math.floor(Math.random() * memorySymbols.length));
      memoryProgress = 0;
      memoryActive = false;
      memoryReverse = currentLevel >= 6;
      document.getElementById("memory-display").textContent = "Prem «Mostra la seqüència» per començar.";
      document.getElementById("memory-message").textContent = "";
      document.getElementById("memory-message").className = "message";
      memoryButtons.forEach((button) => { button.disabled = true; });
      document.getElementById("start-memory").disabled = false;
    }

    document.getElementById("start-memory").addEventListener("click", () => {
      memoryProgress = 0;
      memoryActive = false;
      memoryButtons.forEach((button) => { button.disabled = true; });
      document.getElementById("start-memory").disabled = true;
      document.getElementById("memory-display").textContent = memorySequence.map((symbol) => memorySymbols[symbol]).join(" ");
      document.getElementById("memory-message").textContent = "Memoritza-la...";
      window.setTimeout(() => {
        document.getElementById("memory-display").textContent = "Ara repeteix-la!";
        document.getElementById("memory-message").textContent = memoryReverse
          ? "Tria els símbols en ordre invers."
          : "Tria els símbols en el mateix ordre.";
        memoryActive = true;
        memoryButtons.forEach((button) => { button.disabled = false; });
      }, 1800);
    });

    memoryButtons.forEach((button) => button.addEventListener("click", () => {
      if (!memoryActive) return;
      const expectedIndex = memoryReverse ? memorySequence.length - 1 - memoryProgress : memoryProgress;
      if (Number(button.dataset.symbol) !== memorySequence[expectedIndex]) {
        memoryActive = false;
        document.getElementById("memory-message").textContent = "No era aquesta. Torna a mirar la seqüència!";
        document.getElementById("memory-message").className = "message error";
        memoryButtons.forEach((item) => { item.disabled = true; });
        document.getElementById("start-memory").disabled = false;
        return;
      }
      memoryProgress += 1;
      if (memoryProgress === memorySequence.length) {
        memoryActive = false;
        document.getElementById("memory-message").textContent = "Memòria d'elefant! Seqüència completada.";
        document.getElementById("memory-message").className = "message success";
        memoryButtons.forEach((item) => { item.disabled = true; });
        document.getElementById("start-memory").disabled = false;
        markLevelSolved();
      } else {
        document.getElementById("memory-message").textContent = `${memoryProgress} de ${memorySequence.length}. Continua!`;
      }
    }));

    const sequenceChallenges = [
      { items: [2, 4, 6, 8], answer: 10, hint: { ca: "Suma 2 cada vegada.", en: "Add 2 each time.", es: "Suma 2 cada vez." } },
      { items: [3, 6, 12, 24], answer: 48, hint: { ca: "Cada nombre es duplica.", en: "Each number doubles.", es: "Cada número se duplica." } },
      { items: [1, 4, 9, 16], answer: 25, hint: { ca: "Són quadrats perfectes.", en: "They are perfect squares.", es: "Son cuadrados perfectos." } },
      { items: [20, 17, 14, 11], answer: 8, hint: { ca: "Resta 3 cada vegada.", en: "Subtract 3 each time.", es: "Resta 3 cada vez." } },
      { items: [1, 1, 2, 3, 5, 8], answer: 13, hint: { ca: "Cada terme suma els dos anteriors.", en: "Each term is the sum of the two before it.", es: "Cada término suma los dos anteriores." } },
      { items: [1, 3, 6, 10, 15], answer: 21, hint: { ca: "Suma successivament 2, 3, 4, 5 i després 6.", en: "Add 2, then 3, 4, 5, and then 6.", es: "Suma sucesivamente 2, 3, 4, 5 y después 6." } },
      { items: [2, 5, 10, 17, 26, 37], answer: 50, hint: { ca: "Les diferències són els nombres senars consecutius.", en: "The differences are consecutive odd numbers.", es: "Las diferencias son números impares consecutivos." } },
      { items: [243, 81, 27, 9, 3], answer: 1, hint: { ca: "Divideix entre 3 cada vegada.", en: "Divide by 3 each time.", es: "Divide entre 3 cada vez." } },
      { items: [2, 11, 4, 14, 6, 17, 8], answer: 20, hint: { ca: "Són dues sèries intercalades: una suma 2 i l'altra suma 3.", en: "Two interleaved sequences: one adds 2 and the other adds 3.", es: "Son dos series intercaladas: una suma 2 y la otra suma 3." } },
      { items: [1, 8, 4, 27, 9, 64, 16], answer: 125, hint: { ca: "S'intercalen quadrats perfectes i cubs perfectes.", en: "Perfect squares and perfect cubes are interleaved.", es: "Se intercalan cuadrados perfectos y cubos perfectos." } }
    ];
    let activeSequence = sequenceChallenges[0];

