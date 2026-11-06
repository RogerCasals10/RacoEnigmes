
    "use strict";

    const translationRows = [
      ["El Racó dels Enigmes", "The Puzzle Corner", "El Rincón de los Enigmas"],
      ["Categories", "Categories", "Categorías"],
      ["Tria un nivell", "Choose a level", "Elige un nivel"],
      ["Veure nivells", "Browse levels", "Ver niveles"],
      ["Amaga nivells", "Hide levels", "Ocultar niveles"],
      ["Calcula el perímetre del dibuix.", "Find the perimeter shown.", "Calcula el perímetro del dibujo."],
      ["Completa la graella i prem Comprova.", "Complete the grid and press Check.", "Completa la cuadrícula y pulsa Comprobar."],
      ["Peces disponibles", "Available pieces", "Piezas disponibles"],
      ["Gira peça", "Rotate piece", "Girar pieza"],
      ["Accepta i col·loca", "Accept and place", "Aceptar y colocar"],
      ["Desfés darrera peça", "Undo last piece", "Deshacer última pieza"],
      ["Peça seleccionada: tria una casella d'inici.", "Piece selected: choose a starting square.", "Pieza seleccionada: elige una casilla de inicio."],
      ["Selecciona una peça abans de triar una casella.", "Select a piece before choosing a square.", "Selecciona una pieza antes de elegir una casilla."],
      ["La peça no hi cap en aquesta posició.", "The piece does not fit in this position.", "La pieza no cabe en esta posición."],
      ["Peça girada. Tria una casella d'inici.", "Piece rotated. Choose a starting square.", "Pieza girada. Elige una casilla de inicio."],
      ["Peça col·locada.", "Piece placed.", "Pieza colocada."],
      ["Fila", "Row", "Fila"],
      ["columna", "column", "columna"],
      ["Mesures del dibuix", "Diagram measurements", "Medidas del dibujo"],
      ["Graella de nonograma amb pistes de files i columnes.", "Nonogram grid with row and column clues.", "Cuadrícula de nonograma con pistas de filas y columnas."],
      ["Planta, alçat i perfil d'una estructura de cubs.", "Top, front, and side views of a stack of cubes.", "Planta, alzado y perfil de una estructura de cubos."],
      ["Tria un altre joc", "Choose another game", "Elige otro juego"],
      ["Càlcul mental", "Mental maths", "Cálculo mental"],
      ["Operacions llampec", "Quick-fire arithmetic", "Operaciones relámpago"],
      ["Sense límit de temps", "No time limit", "Sin límite de tiempo"],
      ["Anagrames", "Anagrams", "Anagramas"],
      ["Ordena les lletres", "Rearrange the letters", "Ordena las letras"],
      ["L'intrús", "Odd one out", "El intruso"],
      ["Troba què no encaixa", "Find what doesn't fit", "Encuentra qué no encaja"],
      ["Xifrat secret", "Secret cipher", "Cifrado secreto"],
      ["Desplaça l'alfabet", "Shift the alphabet", "Desplaza el alfabeto"],
      ["Rosa dels vents", "Compass challenge", "Rosa de los vientos"],
      ["Segueix les instruccions", "Follow the directions", "Sigue las instrucciones"],
      ["Balances", "Balancing scales", "Básculas"],
      ["Equacions de pesos", "Weight equations", "Ecuaciones de pesos"],
      ["Calendari lògic", "Calendar logic", "Lógica del calendario"],
      ["Dies i setmanes", "Days and weeks", "Días y semanas"],
      ["Mini sudoku", "Mini sudoku", "Mini sudoku"],
      ["Graella 4 × 4", "4 × 4 grid", "Cuadrícula 4 × 4"],
      ["Patrons visuals", "Visual patterns", "Patrones visuales"],
      ["Figures i seqüències", "Shapes and sequences", "Figuras y secuencias"],
      ["Preguntes trampa i deducció", "Trick questions and deduction", "Preguntas trampa y deducción"],
      ["Aproximació", "Estimation", "Aproximación"],
      ["Estima el resultat", "Estimate the result", "Estima el resultado"],
      ["Coordenades", "Coordinates", "Coordenadas"],
      ["Troba la casella", "Find the square", "Encuentra la casilla"],
      ["Escacs tàctics", "Chess tactics", "Táctica de ajedrez"],
      ["Troba la millor jugada", "Find the best move", "Encuentra la mejor jugada"],
      ["Geometria", "Geometry", "Geometría"],
      ["Mesures i perímetres", "Measures and perimeters", "Medidas y perímetros"],
      ["Vistes 3D", "3D views", "Vistas 3D"],
      ["Planta, alçat i perfil", "Top, front, and side views", "Planta, alzado y perfil"],
      ["Nonogrames", "Nonograms", "Nonogramas"],
      ["Descobreix la imatge", "Reveal the picture", "Descubre la imagen"],
      ["Graelles de deducció", "Logic grids", "Cuadrículas de deducción"],
      ["Creua les pistes", "Cross-reference the clues", "Cruza las pistas"],
      ["Miralls i raigs làser", "Mirrors and laser beams", "Espejos y rayos láser"],
      ["Guia el feix", "Guide the beam", "Guía el rayo"],
      ["Tessel·lacions", "Tessellations", "Teselaciones"],
      ["Encaixa les peces", "Fit the pieces", "Encaja las piezas"],
      ["Nivells", "Levels", "Niveles"],
      ["resolts", "completed", "resueltos"],
      ["Nivell", "Level", "Nivel"],
      ["Desbloquejat", "Unlocked", "Desbloqueado"],
      ["Bloquejat", "Locked", "Bloqueado"],
      ["Resolts", "Completed", "Resueltos"],
      ["Reinicia el nivell", "Restart level", "Reiniciar nivel"],
      ["Següent nivell", "Next level", "Siguiente nivel"],
      ["Sortir del mode aleatori", "Exit random mode", "Salir del modo aleatorio"],
      ["Selecciona un nivell per començar.", "Select a level to begin.", "Selecciona un nivel para empezar."],
      ["Repte", "Challenge", "Reto"],
      ["Correcte! Nivell completat.", "Correct! Level completed.", "¡Correcto! Nivel completado."],
      ["Resposta incorrecta. Torna-ho a provar.", "Incorrect answer. Try again.", "Respuesta incorrecta. Inténtalo de nuevo."],
      ["Has completat tots els nivells d'aquesta categoria!", "You've completed all levels in this category!", "¡Has completado todos los niveles de esta categoría!"],
      ["Enhorabona! Has completat el nivell.", "Well done! You completed the level.", "¡Enhorabuena! Has completado el nivel."],
      ["Escriu la resposta", "Enter your answer", "Escribe la respuesta"],
      ["No s'ha pogut desar el progrés.", "Could not save your progress.", "No se pudo guardar tu progreso."],
      ["Resolts", "Completed", "Resueltos"],
      ["La sala tancada", "The locked room", "La habitación cerrada"],
      ["Mode de joc aleatori", "Random game mode", "Modo de juego aleatorio"],
      ["Tria un minijoc", "Choose a mini-game", "Elige un minijuego"],
      ["Una pausa per al cervell", "A break for your brain", "Un descanso para el cerebro"],
      ["Pensa, prova,", "Think, try,", "Piensa, prueba,"],
      ["desxifra.", "and solve.", "y descifra."],
      ["Minijocs d'enginy per jugar al teu ritme. Tria un repte i posa les neurones en marxa.", "Brain-teasing mini-games to play at your own pace. Pick a challenge and get thinking.", "Minijuegos de ingenio para jugar a tu ritmo. Elige un reto y pon las neuronas en marcha."],
      ["26 categories · cap pressa", "26 categories · no rush", "26 categorías · sin prisa"],
      ["Idioma", "Language", "Idioma"],
      ["Categories del mode aleatori", "Random mode categories", "Categorías del modo aleatorio"],
      ["Tria com a mínim dues categories. La selecció es desa al teu navegador.", "Choose at least two categories. Your selection is saved in this browser.", "Elige al menos dos categorías. La selección se guarda en este navegador."],
      ["Selecciona-les totes", "Select all", "Seleccionarlas todas"],
      ["Desa les categories", "Save categories", "Guardar categorías"],
      ["Mode aleatori", "Random mode", "Modo aleatorio"],
      ["Reptes de categories diferents, sense repetir fins al final.", "Challenges from different categories, with no repeats until the round ends.", "Retos de distintas categorías, sin repetir hasta terminar la ronda."],
      ["Tria un joc o deixa que te'l triem nosaltres.", "Pick a game or let us choose one for you.", "Elige un juego o deja que elijamos uno por ti."],
      ["Juga aleatòriament", "Play randomly", "Jugar al azar"],
      ["Següent repte →", "Next challenge →", "Siguiente reto →"],
      ["Tria un minijoc", "Choose a mini-game", "Elige un minijuego"],
      ["El número exacte", "The exact number", "El número exacto"],
      ["Operacions i càlcul", "Math & operations", "Operaciones y cálculo"],
      ["Caçaparaules", "Word hunt", "Cazapalabras"],
      ["Lletres i vocabulari", "Letters & vocabulary", "Letras y vocabulario"],
      ["Completa els objectius de paraules del nivell amb les lletres disponibles.", "Meet the level's word goals using the available letters.", "Completa los objetivos de palabras del nivel con las letras disponibles."],
      ["Lògica clàssica", "Classic logic", "Lógica clásica"],
      ["Sala tancada", "Locked room", "Habitación cerrada"],
      ["Un codi per escapar", "Crack the escape code", "Un código para escapar"],
      ["Memòria visual", "Visual memory", "Memoria visual"],
      ["Repeteix la seqüència", "Repeat the sequence", "Repite la secuencia"],
      ["Quin ve després?", "What comes next?", "¿Qué viene después?"],
      ["Sèries i patrons", "Sequences & patterns", "Series y patrones"],
      ["Trenca el codi", "Crack the code", "Descifra el código"],
      ["Dedueix la combinació", "Deduce the combination", "Deduce la combinación"],
      ["Endevinalles", "Riddles", "Acertijos"],
      ["Preguntes trampa i deducció", "Trick questions and deduction", "Preguntas trampa y deducción"],
      ["Combina els nombres amb operacions per arribar al resultat. Tu tries quins fas servir.", "Combine numbers with operations to reach the target. You choose which ones to use.", "Combina números con operaciones para llegar al resultado. Tú eliges cuáles usar."],
      ["CÀLCUL", "MATH", "CÁLCULO"],
      ["RESULTAT OBJECTIU", "TARGET NUMBER", "NÚMERO OBJETIVO"],
      ["Nombres disponibles", "Available numbers", "Números disponibles"],
      ["Operacions", "Operations", "Operaciones"],
      ["Suma", "Add", "Sumar"],
      ["Resta", "Subtract", "Restar"],
      ["Multiplicació", "Multiply", "Multiplicar"],
      ["Divisió", "Divide", "Dividir"],
      ["Tria dos nombres i una operació", "Choose two numbers and an operation", "Elige dos números y una operación"],
      ["Ara tria una operació", "Now choose an operation", "Ahora elige una operación"],
      ["Pista: el resultat sempre es pot assolir amb els quatre primers nombres.", "Hint: the target can always be reached using the first four numbers.", "Pista: siempre puedes alcanzar el resultado con los cuatro primeros números."],
      ["Combina les operacions per arribar al resultat.", "Combine operations to reach the target.", "Combina operaciones para llegar al resultado."],
      ["Nova partida", "New game", "Nueva partida"],
      ["Cada operació consumeix els dos nombres triats i afegeix el resultat. Les divisions han de ser exactes i no s'admeten resultats negatius.", "Each operation uses the two selected numbers and adds the result. Division must be exact; negative results are not allowed.", "Cada operación consume los dos números elegidos y añade el resultado. Las divisiones deben ser exactas y no se permiten resultados negativos."],
      ["VOCABULARI", "WORDS", "VOCABULARIO"],
      ["Lletres disponibles", "Available letters", "Letras disponibles"],
      ["LA TEVA PARAULA", "YOUR WORD", "TU PALABRA"],
      ["Escriu una paraula", "Enter a word", "Escribe una palabra"],
      ["Comprova", "Check", "Comprobar"],
      ["Noves lletres", "New letters", "Nuevas letras"],
      ["OBJECTIUS DEL NIVELL", "LEVEL GOALS", "OBJETIVOS DEL NIVEL"],
      ["Només compten paraules incloses al diccionari del joc i formades amb les lletres disponibles. Les formes verbals conjugades només són vàlides si apareixen explícitament al diccionari; els accents no canvien la lletra.", "Only words in the game's dictionary that can be made from the available letters count. Verb forms count only when explicitly listed; accents do not change a letter.", "Solo cuentan las palabras del diccionario del juego que puedan formarse con las letras disponibles. Las formas verbales cuentan solo si aparecen explícitamente; los acentos no cambian la letra."],
      ["Escriu una paraula de la longitud demanada.", "Enter a word with a requested length.", "Escribe una palabra de la longitud pedida."],
      ["Aquesta paraula ja compta per al nivell.", "That word already counts for this level.", "Esa palabra ya cuenta para este nivel."],
      ["Paraula acceptada.", "Word accepted.", "Palabra aceptada."],
      ["Nivell completat! Has trobat totes les paraules.", "Level complete! You found every word.", "¡Nivel completado! Has encontrado todas las palabras."],
      ["Fes paraules de les longituds indicades.", "Make words of the listed lengths.", "Forma palabras de las longitudes indicadas."],
      ["Resol aquest nivell per desbloquejar el següent.", "Solve this level to unlock the next one.", "Resuelve este nivel para desbloquear el siguiente."],
      ["LÒGICA", "LOGIC", "LÓGICA"],
      ["Completa la graella: cada fila, columna i quadrat de 3 × 3 ha de contenir de l'1 al 9.", "Complete the grid: every row, column, and 3 × 3 box must contain the numbers 1 to 9.", "Completa la cuadrícula: cada fila, columna y cuadro de 3 × 3 debe contener del 1 al 9."],
      ["Graella de sudoku", "Sudoku grid", "Cuadrícula de sudoku"],
      ["Una graella per començar; les caselles en verd són pistes fixes.", "A puzzle to get started; the green cells are fixed clues.", "Un tablero para empezar; las casillas verdes son pistas fijas."],
      ["Reinicia", "Reset", "Reiniciar"],
      ["ESCAPE", "ESCAPE ROOM", "ESCAPE ROOM"],
      ["La porta només s'obre amb un codi de tres xifres. Llegeix les pistes en ordre.", "The door opens with a three-digit code. Read the clues in order.", "La puerta solo se abre con un código de tres cifras. Lee las pistas en orden."],
      ["TRES PISTES, TRES XIFRES", "THREE CLUES, THREE DIGITS", "TRES PISTAS, TRES CIFRAS"],
      ["El pany electrònic", "The electronic lock", "La cerradura electrónica"],
      ["Introdueix les tres xifres en ordre.", "Enter the three digits in order.", "Introduce las tres cifras en orden."],
      ["Codi de tres xifres", "Three-digit code", "Código de tres cifras"],
      ["Prova", "Try", "Probar"],
      ["Torna-ho a provar", "Try again", "Volver a intentarlo"],
      ["MEMÒRIA", "MEMORY", "MEMORIA"],
      ["Tria entre sis símbols; a partir del nivell 6, repeteix la seqüència en ordre invers.", "Choose from six symbols; from level 6 onward, repeat the sequence backwards.", "Elige entre seis símbolos; desde el nivel 6, repite la secuencia en orden inverso."],
      ["SEQÜÈNCIA", "SEQUENCE", "SECUENCIA"],
      ["Prem «Mostra la seqüència» per començar.", "Press “Show the sequence” to begin.", "Pulsa «Mostrar la secuencia» para empezar."],
      ["Tria el símbol següent", "Choose the next symbol", "Elige el siguiente símbolo"],
      ["Lluna", "Moon", "Luna"],
      ["Sol", "Sun", "Sol"],
      ["Estrella", "Star", "Estrella"],
      ["Núvol", "Cloud", "Nube"],
      ["Flama", "Flame", "Llama"],
      ["Gota", "Droplet", "Gota"],
      ["Mostra la seqüència", "Show the sequence", "Mostrar la secuencia"],
      ["PATRONS", "PATTERNS", "PATRONES"],
      ["Troba la regla de la sèrie i escriu el nombre que falta.", "Find the pattern and enter the missing number.", "Encuentra la regla de la serie y escribe el número que falta."],
      ["COMPLETA LA SÈRIE", "COMPLETE THE SEQUENCE", "COMPLETA LA SERIE"],
      ["EL SEGÜENT NOMBRE", "NEXT NUMBER", "SIGUIENTE NÚMERO"],
      ["Reinicia la sèrie", "Reset the sequence", "Reiniciar la serie"],
      ["DEDUCCIÓ", "DEDUCTION", "DEDUCCIÓN"],
      ["Dedueix el codi. Cada pista només diu en quantes posicions has encertat si hi va una lletra o una xifra, mai quin símbol ni on.", "Deduce the code. Each clue only tells you how many positions have the right type (letter or digit), never which symbol or where.", "Deduce el código. Cada pista solo dice en cuántas posiciones has acertado el tipo (letra o cifra), nunca qué símbolo ni dónde."],
      ["Tens 7 intents. Codi de 4 símbols; disponibles: 1–6.", "You have 7 tries. Code length: 4 symbols; available: 1–6.", "Tienes 7 intentos. Código de 4 símbolos; disponibles: 1–6."],
      ["EL TEU INTENT", "YOUR GUESS", "TU INTENTO"],
      ["Prova el codi", "Guess the code", "Probar el código"],
      ["Nou codi", "New code", "Nuevo código"],
      ["Historial d'intents", "Guess history", "Historial de intentos"],
      ["Fet per jugar una estona. No cal instal·lar res: funciona localment al teu navegador.", "Made for a little brain break. No installation needed; it runs locally in your browser.", "Hecho para jugar un rato. No hace falta instalar nada: funciona localmente en tu navegador."],
      ["Quantes cantonades té una habitació rectangular?", "How many corners does a rectangular room have?", "¿Cuántas esquinas tiene una habitación rectangular?"],
      ["Quantes vegades apareix la lletra «a» a «casa»?", "How many times does the letter “a” appear in “casa”?", "¿Cuántas veces aparece la letra «a» en «casa»?"],
      ["Quantes potes té una aranya?", "How many legs does a spider have?", "¿Cuántas patas tiene una araña?"],
      ["Troba x: 2x + 3 = 17.", "Find x: 2x + 3 = 17.", "Halla x: 2x + 3 = 17."],
      ["Quantes xifres té el resultat de 9 × 9?", "How many digits are in the result of 9 × 9?", "¿Cuántas cifras tiene el resultado de 9 × 9?"],
      ["Quin és el residu de 17 ÷ 7?", "What is the remainder when 17 is divided by 7?", "¿Cuál es el resto de dividir 17 entre 7?"],
      ["Quantes diagonals té un pentàgon?", "How many diagonals does a pentagon have?", "¿Cuántas diagonales tiene un pentágono?"],
      ["Calcula: (24 ÷ 3) − 1.", "Calculate: (24 ÷ 3) − 1.", "Calcula: (24 ÷ 3) − 1."],
      ["Quin és el dígit de les unitats del primer nombre primer després de l'11?", "What is the units digit of the first prime number after 11?", "¿Cuál es la cifra de las unidades del primer número primo después del 11?"],
      ["Calcula: 3³ − 20.", "Calculate: 3³ − 20.", "Calcula: 3³ − 20."],
      ["Quants divisors positius té el nombre 24?", "How many positive divisors does 24 have?", "¿Cuántos divisores positivos tiene el número 24?"],
      ["Quin és el residu de 50 ÷ 6?", "What is the remainder when 50 is divided by 6?", "¿Cuál es el resto de dividir 50 entre 6?"],
      ["Resol: 4x − 5 = 19.", "Solve: 4x − 5 = 19.", "Resuelve: 4x − 5 = 19."],
      ["Quin és el dígit de les unitats de 7²?", "What is the units digit of 7²?", "¿Cuál es la cifra de las unidades de 7²?"],
      ["Suma les xifres de 56 i escriu-ne només la xifra de les unitats.", "Add the digits of 56 and write only the units digit of the result.", "Suma las cifras de 56 y escribe solo la cifra de las unidades del resultado."],
      ["Quin és el resultat de 2⁵ − 24?", "What is the result of 2⁵ − 24?", "¿Cuál es el resultado de 2⁵ − 24?"],
      ["Quants factors primers diferents té 60?", "How many distinct prime factors does 60 have?", "¿Cuántos factores primos distintos tiene 60?"],
      ["Quina és la xifra de les unitats del nombre total de diagonals d'un hexàgon?", "What is the units digit of the total number of diagonals in a hexagon?", "¿Cuál es la cifra de las unidades del número total de diagonales de un hexágono?"],
      ["Descompon 90 en factors primers: quants factors diferents hi apareixen?", "Factor 90 into primes: how many different factors appear?", "Descompón 90 en factores primos: ¿cuántos factores distintos aparecen?"],
      ["Una graella de 3 × 3 té 14 quadrats. Quina és la xifra de les unitats?", "A 3 × 3 grid has 14 squares. What is the units digit?", "Una cuadrícula de 3 × 3 tiene 14 cuadrados. ¿Cuál es la cifra de las unidades?"],
      ["Quin és el residu de 100 ÷ 9?", "What is the remainder when 100 is divided by 9?", "¿Cuál es el resto de dividir 100 entre 9?"],
      ["Quin és el dígit de les unitats del mínim comú múltiple de 4, 6 i 9?", "What is the units digit of the least common multiple of 4, 6, and 9?", "¿Cuál es la cifra de las unidades del mínimo común múltiplo de 4, 6 y 9?"],
      ["Quants nombres de tres xifres diferents pots formar amb 1, 2 i 3?", "How many three-digit numbers with distinct digits can you make using 1, 2, and 3?", "¿Cuántos números de tres cifras distintas puedes formar con 1, 2 y 3?"],
      ["Resol: 5x − 7 = 18.", "Solve: 5x − 7 = 18.", "Resuelve: 5x − 7 = 18."],
      ["Quantes regions formen tres rectes en posició general?", "How many regions do three lines in general position form?", "¿Cuántas regiones forman tres rectas en posición general?"],
      ["Quin és el residu de 2¹⁰ ÷ 9?", "What is the remainder when 2¹⁰ is divided by 9?", "¿Cuál es el resto de dividir 2¹⁰ entre 9?"],
      ["Un nombre té dues xifres que sumen 9. La xifra de les desenes és 3. Quina és la xifra de les unitats?", "A two-digit number has digits that add up to 9. Its tens digit is 3. What is its units digit?", "Un número tiene dos cifras que suman 9. La cifra de las decenas es 3. ¿Cuál es la cifra de las unidades?"],
      ["Quantes potes té una cadira de quatre potes?", "How many legs does a four-legged chair have?", "¿Cuántas patas tiene una silla de cuatro patas?"],
      ["Quants dies té una setmana?", "How many days are in a week?", "¿Cuántos días tiene una semana?"],
      ["Quants costats té un triangle?", "How many sides does a triangle have?", "¿Cuántos lados tiene un triángulo?"],
      ["Quants sentits se solen ensenyar a l'escola?", "How many senses are commonly taught at school?", "¿Cuántos sentidos se suelen enseñar en la escuela?"],
      ["Quantes rodes té una bicicleta?", "How many wheels does a bicycle have?", "¿Cuántas ruedas tiene una bicicleta?"],
      ["Molt bé! Paraula registrada.", "Great! Word accepted.", "¡Muy bien! Palabra registrada."],
      ["Exacte! Has trobat el resultat. Vols provar-ne un altre?", "Exact! You found the target. Want to try another?", "¡Exacto! Has encontrado el resultado. ¿Quieres probar otro?"],
      ["Aquesta divisió no és exacta. Prova una altra operació.", "That division is not exact. Try another operation.", "Esa división no es exacta. Prueba otra operación."],
      ["Codi correcte.", "Correct code.", "Código correcto."],
      ["El pany no s'obre. Repassa les pistes i torna-ho a provar.", "The lock stays shut. Review the clues and try again.", "La cerradura no se abre. Repasa las pistas y vuelve a intentarlo."],
      ["Has escapat!", "You escaped!", "¡Has escapado!"],
      ["Les pistes eren la clau. Ben jugat!", "The clues were the key. Well played!", "Las pistas eran la clave. ¡Bien jugado!"],
      ["Prem «Mostra la seqüència» per començar.", "Press “Show the sequence” to begin.", "Pulsa «Mostrar la secuencia» para empezar."],
      ["Memoritza-la...", "Memorize it...", "Memorízala..."],
      ["Ara repeteix-la!", "Now repeat it!", "¡Ahora repítela!"],
      ["Tria els símbols en el mateix ordre.", "Choose the symbols in the same order.", "Elige los símbolos en el mismo orden."],
      ["Tria els símbols en ordre invers.", "Choose the symbols in reverse order.", "Elige los símbolos en orden inverso."],
      ["No era aquesta. Torna a mirar la seqüència!", "Not that one. Watch the sequence again!", "No era esa. ¡Vuelve a mirar la secuencia!"],
      ["Memòria d'elefant! Seqüència completada.", "Amazing memory! Sequence complete.", "¡Memoria de elefante! Secuencia completada."],
      ["Correcte! ", "Correct! ", "¡Correcto! "],
      ["Encara no. Busca el patró que relaciona els nombres.", "Not quite. Look for the pattern connecting the numbers.", "Aún no. Busca el patrón que relaciona los números."],
      ["Escriu quatre xifres diferents, de l'1 al 6.", "Enter four different digits from 1 to 6.", "Escribe cuatro cifras distintas, del 1 al 6."],
      ["Pista afegida a l'historial.", "Clue added to the history.", "Pista añadida al historial."],
      ["Exacte! Ben vist.", "Exactly! Well spotted.", "¡Exacto! Bien visto."],
      ["Tria un joc o deixa que te'l triem nosaltres.", "Pick a game or let us choose one for you.", "Elige un juego o deja que elijamos uno por ti."],
      ["La selecció ha de tenir com a mínim dues categories.", "Choose at least two categories.", "Selecciona al menos dos categorías."],
      ["Categories desades.", "Categories saved.", "Categorías guardadas."],
      ["Preferències desades en aquest navegador.", "Preferences saved in this browser.", "Preferencias guardadas en este navegador."],
      ["No s'han pogut desar les preferències. Comprova l'emmagatzematge del navegador.", "Could not save preferences. Check your browser storage settings.", "No se pudieron guardar las preferencias. Comprueba el almacenamiento del navegador."],
      ["No s'han pogut carregar les preferències desades.", "Could not load saved preferences.", "No se pudieron cargar las preferencias guardadas."],
      ["Totes les categories estan seleccionades.", "All categories are selected.", "Todas las categorías están seleccionadas."],
      ["El número exacte", "The exact number", "El número exacto"],
      ["Sudoku", "Sudoku", "Sudoku"],
      ["Què puja però mai no baixa?", "What goes up but never comes down?", "¿Qué sube pero nunca baja?"],
      ["L'edat", "Age", "La edad"],
      ["Un globus", "A balloon", "Un globo"],
      ["El fum", "Smoke", "El humo"],
      ["Un ascensor", "An elevator", "Un ascensor"],
      ["Què té moltes dents però no pot mossegar?", "What has many teeth but cannot bite?", "¿Qué tiene muchos dientes pero no puede morder?"],
      ["Una serra", "A saw", "Una sierra"],
      ["Una pinta", "A comb", "Un peine"],
      ["Un cocodril", "A crocodile", "Un cocodrilo"],
      ["Una cremallera", "A zipper", "Una cremallera"],
      ["Quin mes de l'any té 28 dies?", "Which month has 28 days?", "¿Qué mes del año tiene 28 días?"],
      ["Febrer", "February", "Febrero"],
      ["Tots", "All of them", "Todos"],
      ["Gener", "January", "Enero"],
      ["Cap", "None", "Ninguno"],
      ["Què es trenca quan dius el seu nom?", "What breaks when you say its name?", "¿Qué se rompe cuando dices su nombre?"],
      ["Un got", "A glass", "Un vaso"],
      ["El silenci", "Silence", "El silencio"],
      ["Un secret", "A secret", "Un secreto"],
      ["Una promesa", "A promise", "Una promesa"],
      ["Quants animals de cada espècie va pujar Moisès a l'arca?", "How many animals of each species did Moses take on the ark?", "¿Cuántos animales de cada especie subió Moisés al arca?"],
      ["Dos", "Two", "Dos"],
      ["Un mascle i una femella", "One male and one female", "Un macho y una hembra"],
      ["Cap: era Noè", "None: it was Noah", "Ninguno: era Noé"],
      ["Set parelles", "Seven pairs", "Siete parejas"],
      ["Tinc ciutats però no cases, boscos però no arbres i rius però no aigua. Què sóc?", "I have cities but no houses, forests but no trees, and rivers but no water. What am I?", "Tengo ciudades pero no casas, bosques pero no árboles y ríos pero no agua. ¿Qué soy?"],
      ["Un somni", "A dream", "Un sueño"],
      ["Un mapa", "A map", "Un mapa"],
      ["Una fotografia", "A photograph", "Una fotografía"],
      ["Un llibre", "A book", "Un libro"],
      ["Què és teu però els altres fan servir més que tu?", "What belongs to you but is used more by others?", "¿Qué es tuyo pero los demás usan más que tú?"],
      ["El teu nom", "Your name", "Tu nombre"],
      ["La teva cadira", "Your chair", "Tu silla"],
      ["El teu telèfon", "Your phone", "Tu teléfono"],
      ["El teu temps", "Your time", "Tu tiempo"],
      ["Un gall pon un ou al cim d'una teulada. Cap a quin costat cau?", "A rooster lays an egg on a roof. Which way does it fall?", "Un gallo pone un huevo en el tejado. ¿Hacia qué lado cae?"],
      ["A l'esquerra", "To the left", "A la izquierda"],
      ["A la dreta", "To the right", "A la derecha"],
      ["Cap: els galls no ponen ous", "Nowhere: roosters don't lay eggs", "A ningún lado: los gallos no ponen huevos"],
      ["Depèn del vent", "It depends on the wind", "Depende del viento"],
      ["No trobo aquesta paraula al vocabulari de demostració.", "That word is not in the sample dictionary.", "No encuentro esa palabra en el vocabulario de muestra."],
      ["Aquesta paraula necessita lletres que no tens.", "That word needs letters you don't have.", "Esa palabra necesita letras que no tienes."],
      ["Molt bé! ", "Well done! ", "¡Muy bien! "],
      ["Prova de superar la teva millor paraula.", "Try to beat your best word.", "Intenta superar tu mejor palabra."],
      ["Fes la paraula més llarga que puguis.", "Make the longest word you can.", "Forma la palabra más larga que puedas."],
      ["Perfecte! Sudoku resolt.", "Perfect! Sudoku solved.", "¡Perfecto! Sudoku resuelto."],
      ["Paraula més llarga del vocabulari:", "Longest word in the dictionary:", "Palabra más larga del vocabulario:"],
      ["Endevinalla", "Riddle", "Acertijo"],
      ["RESULTAT OBJECTIU", "TARGET NUMBER", "NÚMERO OBJETIVO"],
      ["LA TEVA PARAULA", "YOUR WORD", "TU PALABRA"],
      ["La teva millor:", "Your best:", "Tu mejor:"],
      ["La selecció ha de tenir com a mínim dues categories.", "Choose at least two categories.", "Selecciona al menos dos categorías."],
      ["Català", "Catalan", "Catalán"],
      ["Español", "Español", "Español"],
      ["Selecció pendent de desar.", "Unsaved selection.", "Selección pendiente de guardar."],
      ["Pista: el resultat sempre es pot assolir amb els quatre primers nombres.", "Hint: the target can always be reached using the first four numbers.", "Pista: siempre puedes alcanzar el resultado con los cuatro primeros números."],
      ["Codi correcte.", "Correct code.", "Código correcto."],
      ["No trobo aquesta paraula al vocabulari de demostració.", "That word is not in the sample dictionary.", "No encuentro esa palabra en el vocabulario de muestra."],
      ["Aquesta paraula necessita lletres que no tens.", "That word needs letters you don't have.", "Esa palabra necesita letras que no tienes."],
      ["Fes la paraula més llarga que puguis.", "Make the longest word you can.", "Forma la palabra más larga que puedas."],
      ["Exacte! Has trobat el resultat. Vols provar-ne un altre?", "Exact! You found the target. Want to try another?", "¡Exacto! Has encontrado el resultado. ¿Quieres probar otro?"],
      ["Aquesta divisió no és exacta. Prova una altra operació.", "That division is not exact. Try another operation.", "Esa división no es exacta. Prueba otra operación."],
      ["No era aquesta. Torna a mirar la seqüència!", "Not that one. Watch the sequence again!", "No era esa. ¡Vuelve a mirar la secuencia!"],
      ["Molt bé! ", "Well done! ", "¡Muy bien! "],
      ["Error local de base de dades", "Local database error", "Error de base de datos local"]
    ];
    const translations = { en: {}, es: {} };
    translationRows.forEach(([ca, en, es]) => {
      translations.en[ca] = en;
      translations.es[ca] = es;
    });
    const originalTexts = new WeakMap();
    const originalAttributes = new WeakMap();
    let applyingTranslations = false;

    function translateValue(catalan, language = document.documentElement.lang || "ca") {
      const dictionary = translations[language];
      if (!dictionary) return catalan;
      if (dictionary[catalan]) return dictionary[catalan];
      let match = catalan.match(/^Repte (\d+) de (\d+) · (.+)$/);
      if (match) return language === "en" ? `Challenge ${match[1]} of ${match[2]} · ${match[3]}` : `Reto ${match[1]} de ${match[2]} · ${match[3]}`;
      match = catalan.match(/^(\d+) de (\d+)\. Continua!$/);
      if (match) return language === "en" ? `${match[1]} of ${match[2]}. Keep going!` : `${match[1]} de ${match[2]}. ¡Sigue!`;
      match = catalan.match(/^(.+) lletres! Prova de superar la teva millor paraula\.$/);
      if (match) return language === "en" ? `${match[1]} letters! Try to beat your best word.` : `¡${match[1]} letras! Intenta superar tu mejor palabra.`;
      match = catalan.match(/^Molt bé! (\d+) lletres\.$/);
      if (match) return language === "en" ? `Well done! ${match[1]} letters.` : `¡Muy bien! ${match[1]} letras.`;
      match = catalan.match(/^(.+) (\d+) al lloc correcte, (\d+) al lloc equivocat$/);
      if (match) return language === "en" ? `${match[1]} — ${match[2]} in the right place, ${match[3]} misplaced` : `${match[1]} — ${match[2]} en el sitio correcto, ${match[3]} en otro lugar`;
      match = catalan.match(/^Codi descobert en (\d+) (intent|intents)!$/);
      if (match) return language === "en" ? `Code cracked in ${match[1]} ${Number(match[1]) === 1 ? "guess" : "guesses"}!` : `¡Código descubierto en ${match[1]} ${Number(match[1]) === 1 ? "intento" : "intentos"}!`;
      match = catalan.match(/^Et queden (\d+) intents\.$/);
      if (match) return language === "en" ? `${match[1]} guesses left.` : `Te quedan ${match[1]} intentos.`;
      match = catalan.match(/^S'han acabat els intents\. El codi era (\d+)\.$/);
      if (match) return language === "en" ? `No guesses left. The code was ${match[1]}.` : `Se acabaron los intentos. El código era ${match[1]}.`;
      match = catalan.match(/^Endevinalla (\d+)$/);
      if (match) return language === "en" ? `Riddle ${match[1]}` : `Acertijo ${match[1]}`;
      match = catalan.match(/^(\d+) ([+\-*\/]) (\d+) = (\d+)\. Continua!$/);
      if (match) {
        const operator = { "*": "×", "/": "÷" }[match[2]] || match[2];
        return language === "en" ? `${match[1]} ${operator} ${match[3]} = ${match[4]}. Keep going!` : `${match[1]} ${operator} ${match[3]} = ${match[4]}. ¡Sigue!`;
      }
      match = catalan.match(/^No ben bé: la resposta és «(.+)»\.$/);
      if (match) return language === "en" ? `Not quite: the answer is “${match[1]}”.` : `No exactamente: la respuesta es «${match[1]}».`;
      match = catalan.match(/^(\d+) caselles buides(?: · (\d+) valors incorrectes)?\.$/);
      if (match) return language === "en" ? `${match[1]} empty cells${match[2] ? ` · ${match[2]} incorrect values` : ""}.` : `${match[1]} casillas vacías${match[2] ? ` · ${match[2]} valores incorrectos` : ""}.`;
      match = catalan.match(/^(\d+) valors incorrectes\.$/);
      if (match) return language === "en" ? `${match[1]} incorrect values.` : `${match[1]} valores incorrectos.`;
      match = catalan.match(/^Fila (\d+), columna (\d+)(, pista)?$/);
      if (match) return language === "en" ? `Row ${match[1]}, column ${match[2]}${match[3] ? ", clue" : ""}` : `Fila ${match[1]}, columna ${match[2]}${match[3] ? ", pista" : ""}`;
      match = catalan.match(/^Nombre (\d+)(, seleccionat)?$/);
      if (match) return language === "en" ? `Number ${match[1]}${match[2] ? ", selected" : ""}` : `Número ${match[1]}${match[2] ? ", seleccionado" : ""}`;
      return catalan;
    }

    function translateNode(node) {
      if (!originalTexts.has(node)) originalTexts.set(node, node.nodeValue);
      const original = originalTexts.get(node);
      const trimmed = original.trim();
      if (!trimmed) return;
      const leading = original.match(/^\s*/)[0];
      const trailing = original.match(/\s*$/)[0];
      node.nodeValue = `${leading}${translateValue(trimmed)}${trailing}`;
    }

    function translateAttributes(root) {
      const elements = root.querySelectorAll ? [root, ...root.querySelectorAll("*")] : [];
      elements.forEach((element) => {
        ["placeholder", "aria-label"].forEach((attribute) => {
          if (!element.hasAttribute(attribute)) return;
          let originals = originalAttributes.get(element);
          if (!originals) {
            originals = {};
            originalAttributes.set(element, originals);
          }
          if (!(attribute in originals)) originals[attribute] = element.getAttribute(attribute);
          element.setAttribute(attribute, translateValue(originals[attribute]));
        });
      });
    }

    function translateTree(root = document.body) {
      applyingTranslations = true;
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      let node = walker.nextNode();
      while (node) {
        translateNode(node);
        node = walker.nextNode();
      }
      translateAttributes(root);
      applyingTranslations = false;
    }

    const translationObserver = new MutationObserver((mutations) => {
      if (applyingTranslations) return;
      applyingTranslations = true;
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) translateNode(node);
          else if (node.nodeType === Node.ELEMENT_NODE) {
            translateAttributes(node);
            const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
            let text = walker.nextNode();
            while (text) {
              translateNode(text);
              text = walker.nextNode();
            }
          }
        });
      });
      applyingTranslations = false;
    });

    function applyLanguage(language) {
      document.documentElement.lang = language;
      translateTree();
    }

    const tabs = [...document.querySelectorAll(".game-tab")];
    const panels = [...document.querySelectorAll(".game-panel")];
    const gameIds = tabs.map((tab) => tab.dataset.panel);
    const EXTRA_GAME_IDS = ["arithmetic", "anagrams", "oddone", "cipher", "directions", "weights", "calendar", "mini-grid", "shapes", "riddles", "estimation", "coordinates", "chess", "geometry", "projections", "nonogram", "logic-grid", "laser", "tiling"];
    const LEVEL_COUNT = 10;
    const CATEGORY_VERSION = 5;
    let selectedCategories = [...gameIds];
    let currentLanguage = "ca";
    let currentCategory = "";
    let currentLevel = 1;
    let levelProgress = {};
    let gameInitializers = {};
    let randomDeck = [];
    let randomPosition = -1;
    let randomModeActive = false;
    let levelPickerExpanded = false;

    function showGame(gameId, fromRandom = false) {
      if (currentCategory === "arithmetic" && gameId !== "arithmetic") clearArithmeticTimer();
      tabs.forEach((item) => item.setAttribute("aria-pressed", String(item.dataset.panel === gameId)));
      const panelId = EXTRA_GAME_IDS.includes(gameId) ? "panel-extra" : `panel-${gameId}`;
      panels.forEach((panel) => { panel.hidden = panel.id !== panelId; });
      currentCategory = gameId;
      currentLevel = 1;
      document.getElementById("level-picker").hidden = fromRandom;
      document.querySelector(".game-nav").hidden = true;
      document.getElementById("game-toolbar").hidden = fromRandom;
      document.getElementById("game-toolbar-label").textContent = translateValue(
        originalTexts.get(tabs.find((item) => item.dataset.panel === gameId)?.querySelector("strong").firstChild)?.trim() || ""
      );
      document.querySelector(".hero").hidden = true;
      document.getElementById("category-settings").hidden = true;
      document.querySelector(".random-bar").hidden = true;
      levelPickerExpanded = false;
      if (!fromRandom) renderLevelPicker();
      if (fromRandom) {
        gameInitializers[gameId]?.();
      } else {
        randomModeActive = false;
        document.getElementById("start-random").hidden = false;
        document.getElementById("next-random").hidden = true;
        document.getElementById("stop-random").hidden = true;
        document.getElementById("random-status").textContent = "Tria un joc o deixa que te'l triem nosaltres.";
        gameInitializers[gameId]?.();
      }
    }

    function solvedLevels(category) {
      const total = categoryLevelCount(category);
      return [...new Set((levelProgress[category] || []).filter((level) => Number.isInteger(level) && level >= 1 && level <= total))].sort((a, b) => a - b);
    }

    function categoryLevelCount(category) {
      if (category === "riddles") return 11;
      if (category === "geometry") return 30;
      return category === "numbers" || category === "escape" || category === "anagrams" ? 20 : LEVEL_COUNT;
    }

    function migrateWordLogicProgress(progress) {
      if (!Array.isArray(progress.wordlogic)) return false;
      const currentRiddleProgress = Array.isArray(progress.riddles)
        ? progress.riddles.filter((level) => Number.isInteger(level) && level >= 1 && level <= 11)
        : [];
      const mergedRiddleProgress = progress.wordlogic
        .filter((level) => Number.isInteger(level) && level >= 1 && level <= LEVEL_COUNT)
        .map((level) => 8 + Math.min(level, 3));
      progress.riddles = [...new Set([...currentRiddleProgress, ...mergedRiddleProgress])].sort((a, b) => a - b);
      delete progress.wordlogic;
      return true;
    }

    function maxUnlockedLevel(category) {
      const solved = new Set(solvedLevels(category));
      let level = 1;
      while (level < categoryLevelCount(category) && solved.has(level)) level += 1;
      return level;
    }

    function translateLevelCount(solved, total) {
      if (currentLanguage === "en") return `${solved} / ${total} completed`;
      if (currentLanguage === "es") return `${solved} / ${total} resueltos`;
      return `${solved} / ${total} resolts`;
    }

    function renderLevelPicker() {
      const picker = document.getElementById("level-picker");
      const list = document.getElementById("level-list");
      list.replaceChildren();
      if (!currentCategory) {
        picker.hidden = true;
        return;
      }
      picker.hidden = false;
      list.hidden = !levelPickerExpanded;
      document.getElementById("level-list-toggle").setAttribute("aria-expanded", String(levelPickerExpanded));
      document.getElementById("level-list-toggle-label").textContent = translateValue(levelPickerExpanded ? "Amaga nivells" : "Veure nivells");
      document.getElementById("current-level-label").textContent = `${translateValue("Nivell")} ${currentLevel} / ${categoryLevelCount(currentCategory)}`;
      const tab = tabs.find((item) => item.dataset.panel === currentCategory);
      const titleNode = tab.querySelector("strong").firstChild;
      const title = originalTexts.get(titleNode)?.trim() || tab.querySelector("strong").textContent;
      document.getElementById("level-category-name").textContent = `${translateValue(title)} · ${translateValue("Nivells")}`;
      const solved = new Set(solvedLevels(currentCategory));
      const unlocked = maxUnlockedLevel(currentCategory);
      const total = categoryLevelCount(currentCategory);
      document.getElementById("level-progress").textContent = translateLevelCount(solved.size, total);
      const nextLevelButton = document.getElementById("next-level");
      nextLevelButton.hidden = !solved.has(currentLevel) || currentLevel >= total;
      for (let level = 1; level <= total; level += 1) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `level-button${solved.has(level) ? " completed" : ""}${level > unlocked ? " locked" : ""}`;
        button.textContent = String(level);
        button.disabled = level > unlocked;
        button.setAttribute("aria-label", `${translateValue("Nivell")} ${level} · ${translateValue(level > unlocked ? "Bloquejat" : solved.has(level) ? "Resolts" : "Desbloquejat")}`);
        button.setAttribute("aria-pressed", String(currentLevel === level));
        button.addEventListener("click", () => {
          currentLevel = level;
          levelPickerExpanded = false;
          renderLevelPicker();
          gameInitializers[currentCategory]?.();
        });
        list.append(button);
      }
      translateTree();
    }

    async function markLevelSolved(category = currentCategory) {
      if (!category || randomModeActive) return;
      const solved = new Set(solvedLevels(category));
      if (solved.has(currentLevel)) return;
      solved.add(currentLevel);
      levelProgress[category] = [...solved].sort((a, b) => a - b);
      renderLevelPicker();
      try {
        const database = await openPreferencesDatabase();
        const transaction = database.transaction("progres", "readwrite");
        transaction.objectStore("progres").put(levelProgress, "nivells");
        await new Promise((resolve, reject) => {
          transaction.oncomplete = resolve;
          transaction.onerror = () => reject(transaction.error || new Error("No s'ha pogut desar el progrés."));
          transaction.onabort = () => reject(transaction.error || new Error("S'ha cancel·lat el desament del progrés."));
        });
      } catch (error) {
        console.error("Error desant el progrés dels nivells:", error);
        document.getElementById("level-progress").textContent = translateValue("No s'ha pogut desar el progrés.");
      }
    }

    function renderCategorySelection() {
      const list = document.getElementById("category-list");
      list.replaceChildren();
      tabs.forEach((tab) => {
        const label = document.createElement("label");
        label.className = "category-option";
        const titleNode = tab.querySelector("strong").firstChild;
        const categoryName = originalTexts.get(titleNode)?.trim() || tab.querySelector("strong").textContent;
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = tab.dataset.panel;
        checkbox.checked = selectedCategories.includes(tab.dataset.panel);
        checkbox.setAttribute("aria-label", categoryName);
        const name = document.createElement("span");
        name.textContent = categoryName;
        label.append(checkbox, name);
        list.append(label);
        checkbox.addEventListener("change", () => {
          const checked = [...list.querySelectorAll("input:checked")].map((input) => input.value);
          if (checked.length < 2) {
            checkbox.checked = true;
            setPreferenceStatus("La selecció ha de tenir com a mínim dues categories.");
            return;
          }
          selectedCategories = checked;
          setPreferenceStatus("Selecció pendent de desar.");
        });
      });
      translateTree();
    }

    function setPreferenceStatus(message) {
      document.getElementById("preferences-status").textContent = message;
    }

    let databasePromise;
    function openPreferencesDatabase() {
      if (!databasePromise) {
        databasePromise = new Promise((resolve, reject) => {
          const request = window.indexedDB.open("el-raco-dels-enigmes", 2);
          request.onupgradeneeded = () => {
            if (!request.result.objectStoreNames.contains("preferencies")) {
              request.result.createObjectStore("preferencies");
            }
            if (!request.result.objectStoreNames.contains("progres")) {
              request.result.createObjectStore("progres");
            }
          };
          request.onsuccess = () => resolve(request.result);
          request.onerror = () => reject(request.error || new Error("No s'ha pogut obrir IndexedDB."));
        });
      }
      return databasePromise;
    }

    async function readPreferences() {
      const database = await openPreferencesDatabase();
      return new Promise((resolve, reject) => {
        const transaction = database.transaction("preferencies", "readonly");
        const request = transaction.objectStore("preferencies").get("usuari");
        request.onsuccess = () => resolve(request.result || null);
        request.onerror = () => reject(request.error || new Error("No s'han pogut llegir les preferències."));
        transaction.onerror = () => reject(transaction.error || new Error("Error en llegir la base de dades local."));
      });
    }

    async function readLevelProgress() {
      const database = await openPreferencesDatabase();
      return new Promise((resolve, reject) => {
        const transaction = database.transaction("progres", "readonly");
        const request = transaction.objectStore("progres").get("nivells");
        request.onsuccess = () => resolve(request.result || {});
        request.onerror = () => reject(request.error || new Error("No s'ha pogut llegir el progrés."));
        transaction.onerror = () => reject(transaction.error || new Error("Error en llegir el progrés."));
      });
    }

    async function writePreferences() {
      const database = await openPreferencesDatabase();
      const transaction = database.transaction("preferencies", "readwrite");
      transaction.objectStore("preferencies").put({
        language: currentLanguage,
        categories: [...selectedCategories],
        categoryVersion: CATEGORY_VERSION
      }, "usuari");
      return new Promise((resolve, reject) => {
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error || new Error("No s'han pogut desar les preferències."));
        transaction.onabort = () => reject(transaction.error || new Error("S'ha cancel·lat el desament de preferències."));
      });
    }

    async function savePreferences(successMessage = "Preferències desades en aquest navegador.") {
      try {
        await writePreferences();
        setPreferenceStatus(successMessage);
      } catch (error) {
        console.error("Error desant les preferències locals:", error);
        setPreferenceStatus("No s'han pogut desar les preferències. Comprova l'emmagatzematge del navegador.");
      }
    }

    async function initializePreferences() {
      const languageSelect = document.getElementById("language-select");
      const selectAllButton = document.getElementById("select-all-categories");
      const saveCategoriesButton = document.getElementById("save-categories");
      const randomButton = document.getElementById("start-random");
      languageSelect.disabled = true;
      selectAllButton.disabled = true;
      saveCategoriesButton.disabled = true;
      randomButton.disabled = true;
      try {
        const saved = await readPreferences();
        levelProgress = await readLevelProgress();
        if (migrateWordLogicProgress(levelProgress)) {
          const database = await openPreferencesDatabase();
          const transaction = database.transaction("progres", "readwrite");
          transaction.objectStore("progres").put(levelProgress, "nivells");
          await new Promise((resolve, reject) => {
            transaction.oncomplete = resolve;
            transaction.onerror = () => reject(transaction.error || new Error("No s'ha pogut migrar el progrés d'endevinalles."));
            transaction.onabort = () => reject(transaction.error || new Error("S'ha cancel·lat la migració del progrés d'endevinalles."));
          });
        }
        let migratedCategories = false;
        if (saved && ["ca", "en", "es"].includes(saved.language)) currentLanguage = saved.language;
        if (saved && Array.isArray(saved.categories)) {
          let valid = [...new Set(saved.categories.filter((id) => gameIds.includes(id)))];
          if (saved.categoryVersion !== CATEGORY_VERSION) {
            valid = [...new Set([...valid, ...EXTRA_GAME_IDS])];
            migratedCategories = true;
          }
          if (valid.length >= 2) selectedCategories = [...new Set(valid)];
        }
        languageSelect.value = currentLanguage;
        renderCategorySelection();
        if (currentCategory) renderLevelPicker();
        applyLanguage(currentLanguage);
        document.title = translateValue("El Racó dels Enigmes", currentLanguage);
        if (migratedCategories) await writePreferences();
        if (saved) setPreferenceStatus("Preferències desades en aquest navegador.");
      } catch (error) {
        console.error("Error carregant les preferències locals:", error);
        setPreferenceStatus("No s'han pogut carregar les preferències desades.");
        renderCategorySelection();
        applyLanguage(currentLanguage);
        document.title = translateValue("El Racó dels Enigmes", currentLanguage);
      } finally {
        languageSelect.disabled = false;
        selectAllButton.disabled = false;
        saveCategoriesButton.disabled = false;
        randomButton.disabled = false;
      }
    }

    document.getElementById("language-select").addEventListener("change", (event) => {
      currentLanguage = event.target.value;
      applyLanguage(currentLanguage);
      document.title = translateValue("El Racó dels Enigmes", currentLanguage);
      if (randomModeActive) updateRandomStatus();
      newWordGame();
      if (EXTRA_GAME_IDS.includes(currentCategory)) newExtraGame();
      if (!randomModeActive) renderLevelPicker();
      savePreferences();
    });

    document.getElementById("select-all-categories").addEventListener("click", () => {
      selectedCategories = [...gameIds];
      renderCategorySelection();
      setPreferenceStatus("Totes les categories estan seleccionades.");
    });

    document.getElementById("save-categories").addEventListener("click", () => {
      selectedCategories = [...document.querySelectorAll("#category-list input:checked")].map((input) => input.value);
      if (selectedCategories.length < 2) {
        setPreferenceStatus("La selecció ha de tenir com a mínim dues categories.");
        return;
      }
      savePreferences("Categories desades.");
    });

    tabs.forEach((tab) => tab.addEventListener("click", () => {
      tabs.forEach((item) => item.setAttribute("aria-pressed", String(item === tab)));
      showGame(tab.dataset.panel);
    }));
    document.getElementById("choose-game").addEventListener("click", () => {
      currentCategory = "";
      tabs.forEach((tab) => tab.setAttribute("aria-pressed", "false"));
      document.getElementById("game-toolbar").hidden = true;
      document.querySelector(".hero").hidden = false;
      document.getElementById("category-settings").hidden = false;
      document.querySelector(".random-bar").hidden = false;
      document.querySelector(".game-nav").hidden = false;
      document.getElementById("level-picker").hidden = true;
      panels.forEach((panel) => { panel.hidden = true; });
      document.querySelector(".game-nav").scrollIntoView({ block: "start" });
      tabs[0].focus();
    });
    document.getElementById("open-categories").addEventListener("click", () => {
      document.getElementById("choose-game").click();
    });
    document.getElementById("level-list-toggle").addEventListener("click", () => {
      levelPickerExpanded = !levelPickerExpanded;
      renderLevelPicker();
    });
