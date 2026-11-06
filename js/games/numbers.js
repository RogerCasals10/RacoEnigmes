    const numberGrid = document.getElementById("number-grid");
    const numberMessage = document.getElementById("number-message");
    const selectionHelp = document.getElementById("selection-help");
    const targetDisplay = document.getElementById("target-number");
    const operatorButtons = [...document.querySelectorAll(".operator")];
    let numberItems = [];
    let selectedNumbers = [];
    let nextNumberId = 0;
    let targetNumber = 0;

    function numberMessageText(text, kind = "") {
      numberMessage.textContent = text;
      numberMessage.className = `message ${kind}`.trim();
    }

    function newNumberGame() {
      let values;
      let target;
      if (currentLevel <= LEVEL_COUNT) {
        const maxValue = 20 + currentLevel * 2;
        do {
          values = Array.from({ length: 10 }, () => Math.floor(Math.random() * maxValue) + 1);
          target = values[0] * values[1] + values[2] * values[3];
        } while (target < 100 || target > 999);
      } else {
        const requiredCount = Math.min(10, 4 + Math.ceil((currentLevel - LEVEL_COUNT) * 0.6));
        do {
          values = Array.from({ length: 10 }, () => Math.floor(Math.random() * 12) + 4);
          const usedValues = values.slice(0, requiredCount);
          target = 0;
          for (let index = 0; index + 1 < requiredCount; index += 2) {
            target += usedValues[index] * usedValues[index + 1];
          }
          if (requiredCount % 2 !== 0) target += usedValues[requiredCount - 1];
        } while (target < 100 || target > 999);
        for (let index = values.length - 1; index > 0; index -= 1) {
          const swapIndex = Math.floor(Math.random() * (index + 1));
          [values[index], values[swapIndex]] = [values[swapIndex], values[index]];
        }
      }
      targetNumber = target;
      targetDisplay.textContent = String(target);
      numberItems = values.map((value) => ({ id: nextNumberId++, value }));
      selectedNumbers = [];
      numberMessageText(currentLevel <= LEVEL_COUNT ? "Pista: el resultat sempre es pot assolir amb els quatre primers nombres." : "Combina les operacions per arribar al resultat.");
      renderNumbers();
    }

    function renderNumbers() {
      numberGrid.replaceChildren();
      numberItems.forEach((item) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `number-tile${selectedNumbers.includes(item.id) ? " selected" : ""}`;
        button.textContent = String(item.value);
        button.setAttribute("aria-label", `Nombre ${item.value}${selectedNumbers.includes(item.id) ? ", seleccionat" : ""}`);
        button.setAttribute("aria-pressed", String(selectedNumbers.includes(item.id)));
        button.addEventListener("click", () => {
          if (selectedNumbers.includes(item.id)) {
            selectedNumbers = selectedNumbers.filter((id) => id !== item.id);
          } else if (selectedNumbers.length < 2) {
            selectedNumbers.push(item.id);
          }
          renderNumbers();
        });
        numberGrid.append(button);
      });
      const selectedItems = selectedNumbers.map((id) => numberItems.find((item) => item.id === id));
      operatorButtons.forEach((button) => {
        button.disabled = selectedItems.length !== 2;
        const preview = button.querySelector(".operator-preview");
        preview.hidden = selectedItems.length !== 2;
        preview.textContent = selectedItems.length !== 2
          ? ""
          : operationResult(selectedItems[0].value, selectedItems[1].value, button.dataset.operation) ?? "—";
      });
      selectionHelp.textContent = selectedNumbers.length === 2 ? "Ara tria una operació" : "Tria dos nombres i una operació";
    }

    function operationResult(first, second, operation) {
      if (operation === "+") return first + second;
      if (operation === "-") return Math.abs(first - second);
      if (operation === "*") return first * second;
      if (operation === "/") {
        const larger = Math.max(first, second);
        const smaller = Math.min(first, second);
        return smaller !== 0 && larger % smaller === 0 ? larger / smaller : null;
      }
      return null;
    }

    function applyOperation(operation) {
      if (selectedNumbers.length !== 2) return;
      const [first, second] = selectedNumbers.map((id) => numberItems.find((item) => item.id === id));
      if (!first || !second) return;
      const result = operationResult(first.value, second.value, operation);
      if (result === null) {
        numberMessageText("Aquesta divisió no és exacta. Prova una altra operació.", "error");
        return;
      }
      numberItems = numberItems.filter((item) => !selectedNumbers.includes(item.id));
      numberItems.push({ id: nextNumberId++, value: result });
      selectedNumbers = [];
      if (result === targetNumber) {
        numberMessageText("Exacte! Has trobat el resultat. Vols provar-ne un altre?", "success");
        markLevelSolved();
      } else {
        numberMessageText(`${first.value} ${operation} ${second.value} = ${result}. Continua!`);
      }
      renderNumbers();
    }

    operatorButtons.forEach((button) => button.addEventListener("click", () => applyOperation(button.dataset.operation)));
    document.getElementById("new-number-game").addEventListener("click", newNumberGame);

    const wordBank = [
      "aigua", "aire", "amic", "amiga", "animal", "arbre", "arena", "avui", "bala", "banc",
      "barca", "barri", "bassa", "beure", "boca", "bosc", "branca", "bufar", "cabra", "calaix",
      "calma", "cami", "camp", "cantar", "canya", "caragol", "casa", "caseta", "cavall", "cel",
      "cendra", "cercle", "cinta", "clar", "clau", "coberta", "codi", "coll", "color", "cometa",
      "conill", "cor", "costa", "crema", "cuina", "dansa", "darrer", "dau", "dit", "dolc",
      "dona", "dormir", "dues", "eina", "encendre", "energia", "enigma", "entrada", "escola", "escuma",
      "espai", "espera", "estrella", "familia", "farina", "finestra", "flama", "flor", "foc", "forat",
      "formatge", "fusta", "gall", "ganivet", "gat", "gelat", "gira", "gos", "grana", "granota",
      "grua", "guineu", "harmonia", "herba", "historia", "home", "horari", "illa", "imatge", "jardi",
      "joc", "joguina", "jornada", "lila", "llapis", "llarg", "lletra", "llimona", "lluna", "llum",
      "maquina", "mar", "mel", "ment", "mesa", "mesura", "mirall", "mola", "muntanya", "museu",
      "nadal", "neula", "neu", "nina", "nit", "nom", "novel", "nuvol", "oli", "ombra",
      "orella", "origen", "os", "ou", "paper", "paraula", "paret", "passadis", "pastis", "pedra",
      "peix", "pensa", "perla", "petit", "platja", "pluja", "porta", "postal", "prat", "puzzle",
      "quadern", "quatre", "raig", "raim", "reina", "rellotge", "riu", "roba", "roda", "roig",
      "sala", "salut", "samarreta", "sardina", "seient", "serp", "setmana", "sopa", "sorra", "sucre",
      "taula", "teatre", "temps", "terra", "tigre", "timba", "tinta", "tomaquet", "torre", "triangle",
      "ull", "unio", "univers", "vaca", "valent", "vaixell", "verd", "veritat", "viatge", "vidre",
      "vida", "vinya", "vola", "volum", "xarxa", "xocolata", "zebra",
      "gat", "dia", "nas", "peu", "fil", "fum", "avi", "set", "cap", "qui", "sal",
      "camins", "camines", "caminen", "canto", "canta", "cantem", "canten", "corro", "corre", "corren"
    ];
    const wordBanks = {
      ca: wordBank,
      en: [
        "about", "above", "after", "again", "apple", "arrow", "beach", "bread", "bring", "chair",
        "chase", "clean", "clock", "cloud", "coast", "dance", "dream", "earth", "eight", "enter",
        "event", "exact", "flame", "flour", "flower", "forest", "friend", "garden", "giant", "glass",
        "grape", "green", "guide", "heart", "house", "inside", "island", "jacket", "jungle", "large",
        "learn", "letter", "little", "market", "memory", "mountain", "number", "orange", "planet", "puzzle",
        "rabbit", "reason", "rocket", "school", "shadow", "silver", "smile", "spiral", "square", "stream",
        "strong", "summer", "table", "teacher", "thread", "ticket", "travel", "triangle", "tunnel", "turtle",
        "valley", "window", "winter", "wonder", "yellow",
        "cat", "dog", "sun", "sky", "sea", "car", "art", "one", "two", "bee", "ant", "hat", "red", "run", "ran", "eat", "tea", "map",
        "acre", "arts", "care", "cart", "cast", "cats", "east", "ears", "eats", "face", "farm", "fast", "fish", "four",
        "game", "gate", "hear", "heat", "near", "pots", "post", "race", "rate", "rats", "scar", "seat", "spot", "star",
        "stop", "tars", "tear", "teas", "tops", "opts",
        "reading", "learned", "garden", "plays", "played", "walked", "running"
      ],
      es: [
        "ahora", "amigo", "arena", "barco", "barrio", "blanco", "bosque", "camino", "campo", "cantar",
        "carta", "casa", "cielo", "claro", "color", "conejo", "correr", "cuatro", "dedo", "dibujo",
        "dormir", "estrella", "familia", "faro", "flor", "fuego", "gato", "gigante", "globo", "grande",
        "grupo", "hoja", "hombre", "jardin", "juego", "juguete", "lago", "libro", "lluvia", "madera",
        "mano", "mapa", "mariposa", "mesa", "montana", "naranja", "nube", "numero", "palabra", "papel",
        "parque", "pelota", "piedra", "playa", "puente", "queso", "reloj", "respuesta", "ruido", "secreto",
        "semana", "sonrisa", "sombra", "suelo", "tambor", "tomate", "tortuga", "trabajo", "viaje", "ventana",
        "viento", "zorro",
        "sol", "mar", "pan", "pez", "luz", "dos", "uno", "ola", "rio", "sal", "oso", "pie", "voz", "rey",
        "camino", "caminos", "caminar", "canto", "cantas", "canta", "cantamos", "cantan", "cantaba", "corro", "corres", "corre"
      ]
    };
