# Decisions sobre els minijocs

Registre persistent de les valoracions i idees de millora acordades amb l'usuari.
S'actualitza després de cada resposta; les decisions pendents no s'han d'endevinar.

## Respostes confirmades

### El número exacte

- Mantenir el joc i els primers 10 nivells tal com estan.
- En seleccionar dos nombres, mostrar sota cada operació el resultat que produiria.
- Afegir 10 nivells, del 11 al 20, amb dificultat creixent.
- Estat: canvis aplicats localment; pendent de revisió abans de publicar.

### Sala tancada

- Mantenir el joc.
- Afegir nivells nous més difícils al final de la progressió.
- Estat: canvis aplicats localment; pendent de revisió abans de publicar.

### Caçaparaules

- Redissenyar-lo com un repte per nivells que demana diverses paraules de longituds definides.
- Fer que la quantitat i la longitud requerides augmentin amb la dificultat del nivell.
- Acceptar només paraules del diccionari local que es puguin formar amb les lletres disponibles; una forma conjugada només compta si figura explícitament al diccionari. Els accents no canvien la lletra.
- Estat: implementat i provat localment en català, anglès i castellà; l'usuari el provarà abans de valorar-lo.

### Sudoku

- Mantenir el joc tal com està, sense canvis.
- Estat: decisió desada.

### Memòria visual

- Pujar-ne la dificultat i fer-la més enginyosa.
- Fer servir sis símbols; a partir del nivell 6, repetir la seqüència en ordre invers.
- Estat: implementat i provat localment; pendent de valoració de l'usuari abans de publicar.

### Quin ve després?

- Pujar-ne la dificultat i evitar que els nivells finals repeteixin patrons.
- Tenir 10 sèries diferents, amb progressió cap a patrons intercalats als nivells 9 i 10.
- Estat: implementat i provat localment en català, anglès i castellà; pendent de valoració de l'usuari abans de publicar.

### Trenca el codi

- Fer créixer la llargada del codi amb els nivells i afegir-hi progressivament xifres i lletres.
- Donar només el recompte de posicions on s'ha encertat el tipus de símbol (lletra o xifra), sense revelar quines posicions ni quins símbols són correctes.
- No mostrar el codi secret en esgotar els intents.
- El codi creix de 4 a 8 símbols; el conjunt disponible s'amplia des de 1–6 i A–B fins a 1–9 i A–K. Cada codi conté com a mínim una xifra i una lletra.
- Estat: implementat i provat localment en català, anglès i castellà per als 10 nivells, les pistes i els intents; pendent de valoració de l'usuari abans de publicar.

### Endevinalles

- Ajuntar-hi la categoria duplicada Lògica de paraules en una sola progressió, amb les preguntes trampa i els tres enigmes de paraules.
- Fer servir 11 nivells; barrejar l'ordre de les respostes i explicar la solució en encertar.
- Eliminar la pestanya redundant i migrar a Endevinalles el progrés que ja s'hagués desat a Lògica de paraules.
- Mantenir 19 categories després de la fusió; l'usuari prefereix afegir-ne de noves més endavant.
- Estat: implementat i provat localment en català, anglès i castellà als 11 nivells; pendent de valoració abans de publicar.

### Aproximació

- Fer-la progressivament més difícil amb operacions combinades.
- Als primers nivells, incloure el resultat exacte; als avançats, ometre'l i validar l'opció més propera.
- Explicar el resultat exacte i la distància de la millor aproximació en encertar.
- Estat: implementat i provat localment en català, anglès i castellà als 10 nivells; pendent de valoració abans de publicar.

### Coordenades

- Fer-la més difícil i variada.
- Progressar des de consultar caselles en graelles 4 × 4 fins a seguir rutes de diversos moviments en graelles 5 × 5 i 6 × 6.
- Mostrar les graelles amb files i columnes ben delimitades.
- Estat: implementat i provat localment en català, anglès i castellà als 10 nivells, també en pantalla mòbil; pendent de valoració abans de publicar.

### Càlcul mental

- Fer-lo més difícil i variat amb una ratxa d'operacions: cada encert mostra la següent i qualsevol error reinicia la ratxa des de la primera.
- Els nivells 1–3 no tenen temporitzador; els nivells 4–10 sí. La longitud de la ratxa augmenta de 3 a 7 operacions i el límit baixa de 45 a 27 segons.
- Si s'esgota el temps, la ratxa també torna a començar des de la primera operació.
- Estat: implementat i provat localment en català, anglès i castellà; pendent de valoració de l'usuari abans de publicar.

### Anagrames

- Ampliar la progressió de 10 a 20 nivells.
- Fer servir paraules de 6–8 lletres als nivells 11–20 i barrejar-ne les lletres.
- Estat: implementat i provat localment en català, anglès i castellà (tots els 20 nivells, sense paraules repetides als nivells nous); pendent de valoració de l'usuari abans de publicar.

### L'intrús

- Fer-lo més difícil i variat amb 10 regles diferents, en lloc de repetir la regla de nombres parells.
- Barrejar l'ordre de les opcions i explicar la regla en encertar.
- Estat: implementat i provat localment en català, anglès i castellà; pendent de valoració de l'usuari abans de publicar.

### Xifrat secret

- Fer-lo més difícil i progressiu.
- Començar amb desplaçaments Cèsar i avançar cap a alfabet mirall, desplaçaments variables i xifrat Vigenère amb clau.
- Estat: implementat i provat localment en català, anglès i castellà als 10 nivells; pendent de valoració de l'usuari abans de publicar.

### Compte visual

- Eliminar el joc.
- Estat: eliminat localment; les categories desades es migren perquè deixin d'incloure'l.

### Rosa dels vents

- Fer-la més difícil progressivament.
- Augmentar de 5 a 14 moviments; introduir distàncies variables als nivells 4–6 i diagonals als nivells 7–10.
- Estat: implementat i provat localment en català, anglès i castellà; pendent de valoració de l'usuari abans de publicar.

### Calendari lògic

- Fer-lo més difícil i variat.
- Progressar des del càlcul de dies fins a raonaments de dates entre mesos de durada diferent i anys de traspàs; barrejar l'ordre de les respostes.
- Estat: implementat i provat localment en català, anglès i castellà als 10 nivells; pendent de valoració de l'usuari abans de publicar.

### Mini sudoku

- Corregir la presentació visual de la graella i augmentar-ne la dificultat.
- Començar amb graelles 4 × 4 i símbols alfanumèrics; progressar a graelles 6 × 6 amb nombres i lletres barrejats, més caselles buides i blocs de 2 × 3.
- Demanar les respostes en ordre de lectura i comprovar que cada repte té solució única.
- Estat: implementat i provat localment en català, anglès i castellà als 10 nivells; pendent de valoració de l'usuari abans de publicar.

### Patrons visuals

- Fer-lo més difícil i variat, mantenint-lo només si el canvi realment puja el nivell.
- Combinar progressions de forma, orientació i farcit; introduir salts alternats, seqüències intercalades i patrons Fibonacci amb respostes múltiples i explicació en encertar.
- Estat: implementat i provat localment en català, anglès i castellà als 10 nivells; pendent de valoració de l'usuari abans de publicar.

### Balances

- Fer-la més difícil i variada.
- Progressar d'equacions amb un pes conegut a sistemes de diverses equacions amb tres pesos desconeguts.
- Estat: implementat i provat localment en català, anglès i castellà als 10 nivells; pendent de valoració de l'usuari abans de publicar.

## Millores de navegació demanades

- En resoldre un nivell, oferir «Següent nivell» per continuar directament.
- Al mode aleatori, amagar la selecció de nivells i els minijocs mentre s'hi juga.
- Fer que la selecció de categories aleatòries sigui un desplegable, tancat inicialment.
- En seleccionar una categoria, amagar el menú de minijocs i mostrar el joc; afegir un botó per tornar al menú.
- Estat: canvis aplicats localment; pendent de revisió abans de publicar.

## Idees de nous minijocs

- Reptes d'escacs.
- Geometria: donar una figura amb dades i calcular-ne el perímetre. El nivell 1 és la figura en forma de T compartida per l'usuari: amplada superior 14 cm, gruix superior 4 cm, alçada total 10 cm i amplada del tronc 4 cm; resposta 48 cm.
- Reconeixement de figures a partir de l'alçat, la planta i el perfil.
- Nonogrames: deduir una imatge a partir de pistes numèriques per files i columnes.
- Graelles de deducció: relacionar persones, objectes i dades amb pistes lògiques.
- Miralls i raigs làser: orientar miralls per conduir un feix fins a l'objectiu.
- Reptes amb llumins: moure o treure peces per corregir igualtats i figures.
- Tessel·lacions: cobrir una forma amb peces sense solapaments ni espais buits.
- Estat de la figura T: implementada com a nivell 1 de Geometria, amb diagrama vectorial accessible i explicació del càlcul en català, anglès i castellà.
- Dificultat de Geometria: mantenir quatre opcions als nivells 1–3 i demanar que s'escrigui la resposta del nivell 4 en endavant.
- Joc de perímetres ampliat i provat: 30 nivells progressius, des de polígons fins a entrants i forats, figures compostes, escala i circumferències.

## Pendents de valorar, un per un

- Caçaparaules
