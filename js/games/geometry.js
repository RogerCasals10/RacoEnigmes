function createGeometryChallenge(category, level) {
        const puzzles = [
          {
            prompt: localized("Calcula el perímetre d'aquesta figura. Tots els costats són rectes.", "Find the perimeter of this shape. All sides are straight.", "Calcula el perímetro de esta figura. Todos los lados son rectos."),
            answer: 48,
            diagram: "t-shape",
            explanation: {
              ca: "Els costats horitzontals sumen 14 + (14 − 4) + 4 = 28 cm. Els verticals sumen 4 + 6 + 6 + 4 = 20 cm. Per tant, el perímetre és 28 + 20 = 48 cm.",
              en: "The horizontal sides total 14 + (14 − 4) + 4 = 28 cm. The vertical sides total 4 + 6 + 6 + 4 = 20 cm. So the perimeter is 28 + 20 = 48 cm.",
              es: "Los lados horizontales suman 14 + (14 − 4) + 4 = 28 cm. Los verticales suman 4 + 6 + 6 + 4 = 20 cm. Por tanto, el perímetro es 28 + 20 = 48 cm."
            }
          },
          {
            prompt: localized("Un triangle té costats de 7 cm, 9 cm i 12 cm. Quin perímetre té?", "A triangle has sides of 7 cm, 9 cm, and 12 cm. What is its perimeter?", "Un triángulo tiene lados de 7 cm, 9 cm y 12 cm. ¿Cuál es su perímetro?"),
            answer: 28,
            explanation: { ca: "El perímetre és 7 + 9 + 12 = 28 cm.", en: "The perimeter is 7 + 9 + 12 = 28 cm.", es: "El perímetro es 7 + 9 + 12 = 28 cm." }
          },
          {
            prompt: localized("Un quadrat té un costat de 11 cm. Quin perímetre té?", "A square has a side length of 11 cm. What is its perimeter?", "Un cuadrado tiene un lado de 11 cm. ¿Cuál es su perímetro?"),
            answer: 44,
            explanation: { ca: "Els quatre costats són iguals: 4 × 11 = 44 cm.", en: "All four sides are equal: 4 × 11 = 44 cm.", es: "Los cuatro lados son iguales: 4 × 11 = 44 cm." }
          },
          {
            prompt: localized("Un paral·lelogram té costats de 14 cm i 9 cm. Quin perímetre té?", "A parallelogram has side lengths of 14 cm and 9 cm. What is its perimeter?", "Un paralelogramo tiene lados de 14 cm y 9 cm. ¿Cuál es su perímetro?"),
            answer: 46,
            explanation: { ca: "Els costats oposats són iguals: 2 × (14 + 9) = 46 cm.", en: "Opposite sides are equal: 2 × (14 + 9) = 46 cm.", es: "Los lados opuestos son iguales: 2 × (14 + 9) = 46 cm." }
          },
          {
            prompt: localized("Un hexàgon regular té costats de 7 cm. Quin perímetre té?", "A regular hexagon has sides of 7 cm. What is its perimeter?", "Un hexágono regular tiene lados de 7 cm. ¿Cuál es su perímetro?"),
            answer: 42,
            explanation: { ca: "Un hexàgon té sis costats iguals: 6 × 7 = 42 cm.", en: "A hexagon has six equal sides: 6 × 7 = 42 cm.", es: "Un hexágono tiene seis lados iguales: 6 × 7 = 42 cm." }
          },
          {
            prompt: localized("Un trapezi té costats de 8 cm, 12 cm, 7 cm i 15 cm. Quin perímetre té?", "A trapezoid has sides of 8 cm, 12 cm, 7 cm, and 15 cm. What is its perimeter?", "Un trapecio tiene lados de 8 cm, 12 cm, 7 cm y 15 cm. ¿Cuál es su perímetro?"),
            answer: 42,
            explanation: { ca: "Suma els quatre costats: 8 + 12 + 7 + 15 = 42 cm.", en: "Add the four sides: 8 + 12 + 7 + 15 = 42 cm.", es: "Suma los cuatro lados: 8 + 12 + 7 + 15 = 42 cm." }
          },
          {
            prompt: localized("Un triangle rectangle té catets de 9 cm i 12 cm. Quant fa el perímetre?", "A right triangle has legs of 9 cm and 12 cm. What is its perimeter?", "Un triángulo rectángulo tiene catetos de 9 cm y 12 cm. ¿Cuál es su perímetro?"),
            answer: 36,
            explanation: { ca: "La hipotenusa fa 15 cm perquè 9² + 12² = 15²; el perímetre és 9 + 12 + 15 = 36 cm.", en: "The hypotenuse is 15 cm because 9² + 12² = 15²; the perimeter is 9 + 12 + 15 = 36 cm.", es: "La hipotenusa mide 15 cm porque 9² + 12² = 15²; el perímetro es 9 + 12 + 15 = 36 cm." }
          },
          {
            prompt: localized("Un rectangle fa 20 cm de llarg i 11 cm d'ample. Quin perímetre té?", "A rectangle is 20 cm long and 11 cm wide. What is its perimeter?", "Un rectángulo mide 20 cm de largo y 11 cm de ancho. ¿Cuál es su perímetro?"),
            answer: 62,
            explanation: { ca: "El perímetre és 2 × (20 + 11) = 62 cm.", en: "The perimeter is 2 × (20 + 11) = 62 cm.", es: "El perímetro es 2 × (20 + 11) = 62 cm." }
          },
          {
            prompt: localized("D'un rectangle de 14 × 10 cm es retalla un rectangle de 4 × 3 cm en una cantonada. Quin perímetre té la figura en forma de L?", "A 14 × 10 cm rectangle has a 4 × 3 cm rectangle cut from one corner. What is the perimeter of the L-shaped figure?", "A un rectángulo de 14 × 10 cm se le recorta un rectángulo de 4 × 3 cm en una esquina. ¿Cuál es el perímetro de la figura en forma de L?"),
            answer: 48,
            explanation: { ca: "Retallar una cantonada afegeix al perímetre interior exactament les longituds que s'han tret de l'exterior: continua sent 2 × (14 + 10) = 48 cm.", en: "The cut-out adds exactly the lengths removed from the outside: the perimeter remains 2 × (14 + 10) = 48 cm.", es: "El recorte añade al perímetro interior exactamente las longitudes quitadas del exterior: sigue siendo 2 × (14 + 10) = 48 cm." }
          },
          {
            prompt: localized("Un dodecàgon regular té 12 costats iguals de 3,5 cm. Quin perímetre té?", "A regular dodecagon has 12 equal sides of 3.5 cm. What is its perimeter?", "Un dodecágono regular tiene 12 lados iguales de 3,5 cm. ¿Cuál es su perímetro?"),
            answer: 42,
            explanation: { ca: "Multiplica la longitud d'un costat pel nombre de costats: 12 × 3,5 = 42 cm.", en: "Multiply one side by the number of sides: 12 × 3.5 = 42 cm.", es: "Multiplica la longitud de un lado por el número de lados: 12 × 3,5 = 42 cm." }
          },
          {
            prompt: localized("A un rectangle de 18 × 11 cm se li fa un entrant rectangular de 5 cm d'amplada i 3 cm de profunditat en un costat. Quin perímetre té la figura?", "A 18 × 11 cm rectangle has a rectangular notch cut 5 cm wide and 3 cm deep into one side. What is the shape's perimeter?", "A un rectángulo de 18 × 11 cm se le hace una entrada rectangular de 5 cm de ancho y 3 cm de profundidad en un lado. ¿Cuál es el perímetro de la figura?"),
            answer: 64,
            explanation: { ca: "El rectangle original fa 2 × (18 + 11) = 58 cm. L'entrant afegeix dues profunditats: 58 + 2 × 3 = 64 cm.", en: "The original rectangle has perimeter 2 × (18 + 11) = 58 cm. The notch adds two depths: 58 + 2 × 3 = 64 cm.", es: "El rectángulo original tiene perímetro 2 × (18 + 11) = 58 cm. La entrada añade dos profundidades: 58 + 2 × 3 = 64 cm." }
          },
          {
            prompt: localized("A un rectangle de 20 × 13 cm se li fa un entrant de 6 cm d'amplada i 4 cm de profunditat al mig d'un costat. Quin perímetre té la figura resultant?", "A 20 × 13 cm rectangle has a notch 6 cm wide and 4 cm deep cut into the middle of one side. What is the perimeter of the resulting shape?", "A un rectángulo de 20 × 13 cm se le hace una entrada de 6 cm de ancho y 4 cm de profundidad en el centro de un lado. ¿Cuál es el perímetro de la figura resultante?"),
            answer: 74,
            explanation: { ca: "El rectangle fa 2 × (20 + 13) = 66 cm de perímetre. L'entrant afegeix dues profunditats: 66 + 2 × 4 = 74 cm.", en: "The rectangle's perimeter is 2 × (20 + 13) = 66 cm. The notch adds two depths: 66 + 2 × 4 = 74 cm.", es: "El perímetro del rectángulo es 2 × (20 + 13) = 66 cm. La entrada añade dos profundidades: 66 + 2 × 4 = 74 cm." }
          },
          {
            prompt: localized("Un quadrat de costat 12 cm té un entrant rectangular en un costat, de 3 cm d'amplada i 5 cm de profunditat. Quin perímetre té la figura?", "A square with 12 cm sides has a rectangular notch 3 cm wide and 5 cm deep cut into one side. What is the shape's perimeter?", "Un cuadrado de lado 12 cm tiene una entrada rectangular en un lado, de 3 cm de ancho y 5 cm de profundidad. ¿Cuál es el perímetro de la figura?"),
            answer: 58,
            explanation: { ca: "El quadrat fa 48 cm de perímetre. L'entrant substitueix un tram recte per tres trams i hi afegeix dues profunditats: 48 + 2 × 5 = 58 cm.", en: "The square's perimeter is 48 cm. The notch replaces one straight section with three sections, adding two depths: 48 + 2 × 5 = 58 cm.", es: "El cuadrado tiene 48 cm de perímetro. La entrada sustituye un tramo recto por tres tramos y añade dos profundidades: 48 + 2 × 5 = 58 cm." }
          },
          {
            prompt: localized("Un triangle isòsceles té dos costats iguals de 13 cm i una base de 10 cm. Quin perímetre té?", "An isosceles triangle has two equal sides of 13 cm and a base of 10 cm. What is its perimeter?", "Un triángulo isósceles tiene dos lados iguales de 13 cm y una base de 10 cm. ¿Cuál es su perímetro?"),
            answer: 36,
            explanation: { ca: "Suma els tres costats: 13 + 13 + 10 = 36 cm.", en: "Add the three sides: 13 + 13 + 10 = 36 cm.", es: "Suma los tres lados: 13 + 13 + 10 = 36 cm." }
          },
          {
            prompt: localized("Un octàgon regular té costats de 4,5 cm. Quin perímetre té?", "A regular octagon has sides of 4.5 cm. What is its perimeter?", "Un octágono regular tiene lados de 4,5 cm. ¿Cuál es su perímetro?"),
            answer: 36,
            explanation: { ca: "Un octàgon té vuit costats: 8 × 4,5 = 36 cm.", en: "An octagon has eight sides: 8 × 4.5 = 36 cm.", es: "Un octágono tiene ocho lados: 8 × 4,5 = 36 cm." }
          },
          {
            prompt: localized("A un rectangle de 24 × 15 cm se li fan dos entrants des de la vora: un de 5 cm d'amplada i 3 cm de profunditat, i un altre de 4 cm d'amplada i 2 cm de profunditat. Quin perímetre té la figura?", "A 24 × 15 cm rectangle has two notches cut in from the edge: one 5 cm wide and 3 cm deep, and another 4 cm wide and 2 cm deep. What is the shape's perimeter?", "A un rectángulo de 24 × 15 cm se le hacen dos entradas desde el borde: una de 5 cm de ancho y 3 cm de profundidad, y otra de 4 cm de ancho y 2 cm de profundidad. ¿Cuál es el perímetro de la figura?"),
            answer: 88,
            explanation: { ca: "El rectangle fa 78 cm de perímetre. Cada retall afegeix dues vegades la seva profunditat: 78 + 2 × 3 + 2 × 2 = 88 cm.", en: "The rectangle has perimeter 78 cm. Each cut-out adds twice its depth: 78 + 2 × 3 + 2 × 2 = 88 cm.", es: "El rectángulo tiene 78 cm de perímetro. Cada recorte añade dos veces su profundidad: 78 + 2 × 3 + 2 × 2 = 88 cm." }
          },
          {
            prompt: localized("Un rectangle de 20 × 14 cm té un entrant de 8 cm d'amplada i 5 cm de profunditat al mig d'un costat. Quin perímetre té la figura en forma de U?", "A 20 × 14 cm rectangle has a notch 8 cm wide and 5 cm deep cut into the middle of one side. What is the perimeter of the U-shaped figure?", "Un rectángulo de 20 × 14 cm tiene una entrada de 8 cm de ancho y 5 cm de profundidad en el centro de un lado. ¿Cuál es el perímetro de la figura en forma de U?"),
            answer: 78,
            explanation: { ca: "El perímetre del rectangle és 68 cm. L'entrant afegeix dues profunditats: 68 + 2 × 5 = 78 cm.", en: "The rectangle's perimeter is 68 cm. The notch adds two depths: 68 + 2 × 5 = 78 cm.", es: "El perímetro del rectángulo es 68 cm. La entrada añade dos profundidades: 68 + 2 × 5 = 78 cm." }
          },
          {
            prompt: localized("Una placa rectangular fa 30 × 20 cm i té un forat rectangular interior de 12 × 8 cm. Quin perímetre total de contorn i forat s'ha de pintar?", "A rectangular plate is 30 × 20 cm and has an inner rectangular hole measuring 12 × 8 cm. What total length of outer and inner boundary must be painted?", "Una placa rectangular mide 30 × 20 cm y tiene un agujero rectangular interior de 12 × 8 cm. ¿Qué longitud total de contorno exterior e interior hay que pintar?"),
            answer: 140,
            explanation: { ca: "Suma el contorn exterior i el del forat: 2 × (30 + 20) + 2 × (12 + 8) = 100 + 40 = 140 cm.", en: "Add the outer boundary and the hole's boundary: 2 × (30 + 20) + 2 × (12 + 8) = 100 + 40 = 140 cm.", es: "Suma el contorno exterior y el del agujero: 2 × (30 + 20) + 2 × (12 + 8) = 100 + 40 = 140 cm." }
          },
          {
            prompt: localized("Una figura semblant té un perímetre de 54 cm. Si cada longitud s'amplia amb un factor d'escala de 5/3, quin perímetre tindrà?", "A similar shape has a perimeter of 54 cm. If every length is enlarged by a scale factor of 5/3, what will its perimeter be?", "Una figura semejante tiene un perímetro de 54 cm. Si cada longitud se amplía con un factor de escala de 5/3, ¿qué perímetro tendrá?"),
            answer: 90,
            explanation: { ca: "El perímetre també es multiplica pel factor d'escala: 54 × 5/3 = 90 cm.", en: "Perimeter scales by the same factor: 54 × 5/3 = 90 cm.", es: "El perímetro también se multiplica por el factor de escala: 54 × 5/3 = 90 cm." }
          },
          {
            prompt: localized("Un rectangle té els costats en proporció 3:2 i una àrea de 216 cm². Quin perímetre té?", "A rectangle has side lengths in the ratio 3:2 and an area of 216 cm². What is its perimeter?", "Un rectángulo tiene los lados en proporción 3:2 y un área de 216 cm². ¿Cuál es su perímetro?"),
            answer: 60,
            explanation: { ca: "Els costats són 3x i 2x. Com que 6x² = 216, x = 6; els costats fan 18 i 12 cm, i el perímetre és 60 cm.", en: "The sides are 3x and 2x. Since 6x² = 216, x = 6; the sides are 18 and 12 cm, so the perimeter is 60 cm.", es: "Los lados son 3x y 2x. Como 6x² = 216, x = 6; los lados miden 18 y 12 cm, y el perímetro es 60 cm." }
          },
          {
            prompt: localized("Uneix un quadrat de costat 8 cm i un de costat 5 cm fent coincidir completament un costat del quadrat petit amb el gran. Quin perímetre té la figura conjunta?", "Join an 8 cm square and a 5 cm square along one complete side of the smaller square. What is the perimeter of the combined shape?", "Une un cuadrado de lado 8 cm y otro de lado 5 cm haciendo coincidir por completo un lado del pequeño con el grande. ¿Cuál es el perímetro de la figura conjunta?"),
            answer: 42,
            explanation: { ca: "La suma dels perímetres és 32 + 20 = 52 cm, però el costat compartit de 5 cm queda a dins i es comptava dues vegades: 52 − 2 × 5 = 42 cm.", en: "The perimeters add to 32 + 20 = 52 cm, but the shared 5 cm side is inside and was counted twice: 52 − 2 × 5 = 42 cm.", es: "La suma de los perímetros es 32 + 20 = 52 cm, pero el lado compartido de 5 cm queda dentro y se contó dos veces: 52 − 2 × 5 = 42 cm." }
          },
          {
            prompt: localized("Un quadrat de 10 cm de costat té un quadrat de 6 cm de costat enganxat a cadascun de dos costats oposats del gran. Cada quadrat petit comparteix un costat sencer de 6 cm. Quin perímetre té la figura conjunta?", "A 10 cm square has a 6 cm square attached to each of two opposite sides. Each smaller square shares one full 6 cm side. What is the perimeter of the combined shape?", "Un cuadrado de 10 cm de lado tiene un cuadrado de 6 cm pegado a cada uno de dos lados opuestos del grande. Cada cuadrado pequeño comparte un lado completo de 6 cm. ¿Cuál es el perímetro de la figura conjunta?"),
            answer: 64,
            explanation: { ca: "Suma els perímetres: 40 + 24 + 24 = 88 cm. Resta dues vegades cadascun dels dos costats compartits: 88 − 2 × 6 − 2 × 6 = 64 cm.", en: "Add the perimeters: 40 + 24 + 24 = 88 cm. Subtract each of the two shared sides twice: 88 − 2 × 6 − 2 × 6 = 64 cm.", es: "Suma los perímetros: 40 + 24 + 24 = 88 cm. Resta dos veces cada uno de los dos lados compartidos: 88 − 2 × 6 − 2 × 6 = 64 cm." }
          },
          {
            prompt: localized("Un cercle té 14 cm de diàmetre. Calcula la seva circumferència fent servir π = 22/7.", "A circle has a diameter of 14 cm. Find its circumference using π = 22/7.", "Un círculo tiene 14 cm de diámetro. Calcula su circunferencia usando π = 22/7."),
            answer: 44,
            explanation: { ca: "La circumferència és π × diàmetre: (22/7) × 14 = 44 cm.", en: "Circumference is π × diameter: (22/7) × 14 = 44 cm.", es: "La circunferencia es π × diámetro: (22/7) × 14 = 44 cm." }
          },
          {
            prompt: localized("Un semicercle té un radi de 7 cm. Quin és el perímetre de tota la figura, incloent-hi el diàmetre? Fes servir π = 22/7.", "A semicircle has a radius of 7 cm. What is the perimeter of the whole shape, including its diameter? Use π = 22/7.", "Un semicírculo tiene un radio de 7 cm. ¿Cuál es el perímetro de toda la figura, incluido el diámetro? Usa π = 22/7."),
            answer: 36,
            explanation: { ca: "La meitat de la circumferència és 22 cm i el diàmetre fa 14 cm: 22 + 14 = 36 cm.", en: "Half the circumference is 22 cm and the diameter is 14 cm: 22 + 14 = 36 cm.", es: "La mitad de la circunferencia es 22 cm y el diámetro mide 14 cm: 22 + 14 = 36 cm." }
          },
          {
            prompt: localized("Un quart de cercle té un radi de 14 cm. Quin és el perímetre de la figura, comptant l'arc i els dos radis? Fes servir π = 22/7.", "A quarter-circle has a radius of 14 cm. What is its perimeter, including the arc and both radii? Use π = 22/7.", "Un cuarto de círculo tiene un radio de 14 cm. ¿Cuál es el perímetro de la figura, contando el arco y los dos radios? Usa π = 22/7."),
            answer: 50,
            explanation: { ca: "L'arc és un quart de 2πr: 22 cm. Afegeix-hi dos radis: 22 + 14 + 14 = 50 cm.", en: "The arc is one quarter of 2πr: 22 cm. Add the two radii: 22 + 14 + 14 = 50 cm.", es: "El arco es un cuarto de 2πr: 22 cm. Añade los dos radios: 22 + 14 + 14 = 50 cm." }
          },
          {
            prompt: localized("Un polígon ortogonal té vèrtexs consecutius a (0,0), (10,0), (10,4), (6,4), (6,9) i (0,9), en centímetres. Quin perímetre té?", "An orthogonal polygon has consecutive vertices at (0,0), (10,0), (10,4), (6,4), (6,9), and (0,9), in centimetres. What is its perimeter?", "Un polígono ortogonal tiene vértices consecutivos en (0,0), (10,0), (10,4), (6,4), (6,9) y (0,9), en centímetros. ¿Cuál es su perímetro?"),
            answer: 38,
            explanation: { ca: "Els trams fan 10, 4, 4, 5, 6 i 9 cm. La suma és 10 + 4 + 4 + 5 + 6 + 9 = 38 cm.", en: "The segments are 10, 4, 4, 5, 6, and 9 cm. Their sum is 10 + 4 + 4 + 5 + 6 + 9 = 38 cm.", es: "Los tramos miden 10, 4, 4, 5, 6 y 9 cm. La suma es 10 + 4 + 4 + 5 + 6 + 9 = 38 cm." }
          },
          {
            prompt: localized("Un polígon regular de 15 costats té costats de 2,4 cm. Quin perímetre té?", "A regular 15-sided polygon has sides of 2.4 cm. What is its perimeter?", "Un polígono regular de 15 lados tiene lados de 2,4 cm. ¿Cuál es su perímetro?"),
            answer: 36,
            explanation: { ca: "Multiplica: 15 × 2,4 = 36 cm.", en: "Multiply: 15 × 2.4 = 36 cm.", es: "Multiplica: 15 × 2,4 = 36 cm." }
          },
          {
            prompt: localized("Un polígon té vuit costats de longituds 4, 7, 10, 13, 16, 19, 22 i 25 cm. Quin perímetre té?", "A polygon has eight sides with lengths 4, 7, 10, 13, 16, 19, 22, and 25 cm. What is its perimeter?", "Un polígono tiene ocho lados de longitudes 4, 7, 10, 13, 16, 19, 22 y 25 cm. ¿Cuál es su perímetro?"),
            answer: 116,
            explanation: { ca: "Suma els vuit costats: 4 + 7 + 10 + 13 + 16 + 19 + 22 + 25 = 116 cm.", en: "Add all eight sides: 4 + 7 + 10 + 13 + 16 + 19 + 22 + 25 = 116 cm.", es: "Suma los ocho lados: 4 + 7 + 10 + 13 + 16 + 19 + 22 + 25 = 116 cm." }
          },
          {
            prompt: localized("Una placa de 30 × 18 cm té dos entrants rectangulars des de la vora, de profunditats 3 cm i 2 cm, i un forat interior de 6 × 4 cm. Quin perímetre total tenen tots els contorns?", "A 30 × 18 cm plate has two notches cut in from the edge, 3 cm and 2 cm deep, and an inner 6 × 4 cm hole. What is the total perimeter of all boundaries?", "Una placa de 30 × 18 cm tiene dos entradas rectangulares desde el borde, de profundidades 3 cm y 2 cm, y un agujero interior de 6 × 4 cm. ¿Cuál es el perímetro total de todos los contornos?"),
            answer: 126,
            explanation: { ca: "El contorn exterior base fa 96 cm. Els entrants hi afegeixen 2 × 3 + 2 × 2 = 10 cm, i el forat aporta 2 × (6 + 4) = 20 cm. Total: 126 cm.", en: "The original outer boundary is 96 cm. The notches add 2 × 3 + 2 × 2 = 10 cm, and the hole adds 2 × (6 + 4) = 20 cm. Total: 126 cm.", es: "El contorno exterior base mide 96 cm. Las entradas añaden 2 × 3 + 2 × 2 = 10 cm, y el agujero aporta 2 × (6 + 4) = 20 cm. Total: 126 cm." }
          },
          {
            prompt: localized("Un rectangle de 14 × 7 cm té un semicercle de diàmetre 14 cm enganxat al costat llarg de 14 cm. Quin perímetre té el contorn exterior de la figura? Fes servir π = 22/7.", "A 14 × 7 cm rectangle has a semicircle with diameter 14 cm attached along its 14 cm side. What is the perimeter of the combined outer boundary? Use π = 22/7.", "Un rectángulo de 14 × 7 cm tiene un semicírculo de diámetro 14 cm unido a su lado largo de 14 cm. ¿Cuál es el perímetro del contorno exterior de la figura? Usa π = 22/7."),
            answer: 50,
            explanation: { ca: "El costat compartit no forma part del contorn. Queden tres costats del rectangle (14 + 7 + 7 = 28 cm) i l'arc del semicercle (22 cm): 50 cm.", en: "The shared side is not on the outside boundary. The three exposed rectangle sides total 14 + 7 + 7 = 28 cm, and the semicircle arc is 22 cm: 50 cm.", es: "El lado compartido no forma parte del contorno. Quedan tres lados del rectángulo (14 + 7 + 7 = 28 cm) y el arco del semicírculo (22 cm): 50 cm." }
          }
        ];
        const diagramMeasurements = [
          ["14 cm", "4 cm", "5 cm", "6 cm", "6 cm", "5 cm", "4 cm", "4 cm"],
          ["7 cm", "9 cm", "12 cm"],
          ["11 cm", "11 cm", "11 cm", "11 cm"],
          ["14 cm", "9 cm", "14 cm", "9 cm"],
          ["7 cm", "7 cm", "7 cm", "7 cm", "7 cm", "7 cm"],
          ["8 cm", "12 cm", "7 cm", "15 cm"],
          ["9 cm", "12 cm", "15 cm"],
          ["20 cm", "11 cm", "20 cm", "11 cm"],
          ["14 cm", "10 cm", "4 cm", "3 cm"],
          ["3,5 cm"],
          ["18 cm", "11 cm", "5 cm", "3 cm"],
          ["20 cm", "13 cm", "6 cm", "4 cm"],
          ["12 cm", "3 cm", "5 cm"],
          ["13 cm", "10 cm"],
          ["4,5 cm"],
          ["24 cm", "15 cm", "5 cm", "3 cm", "4 cm", "2 cm"],
          ["20 cm", "14 cm", "8 cm", "5 cm"],
          ["30 cm", "20 cm", "12 cm", "8 cm"],
          ["54 cm", "× 5/3"],
          [localized("proporció 3:2", "ratio 3:2", "proporción 3:2"), localized("àrea 216 cm²", "area 216 cm²", "área 216 cm²")],
          ["8 cm", "5 cm"],
          ["10 cm", "6 cm"],
          [localized("diàmetre 14 cm", "diameter 14 cm", "diámetro 14 cm"), "π = 22/7"],
          [localized("radi 7 cm", "radius 7 cm", "radio 7 cm"), localized("diàmetre 14 cm", "diameter 14 cm", "diámetro 14 cm"), localized("arc 22 cm", "arc 22 cm", "arco 22 cm")],
          [localized("radi 14 cm", "radius 14 cm", "radio 14 cm"), localized("arc 22 cm", "arc 22 cm", "arco 22 cm")],
          ["10 cm", "4 cm", "4 cm", "5 cm", "6 cm", "9 cm"],
          ["15 × 2,4 cm"],
          ["4 cm", "7 cm", "10 cm", "13 cm", "16 cm", "19 cm", "22 cm", "25 cm"],
          ["30 cm", "18 cm", "3 cm", "2 cm", "6 cm", "4 cm"],
          ["14 cm", "7 cm", "arc 22 cm"]
        ];
        const order = [1, 0, 8, 6, 2, 3, 5, 4, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
        const puzzle = puzzles[order[level - 1]];
        const challenge = {
          prompt: translateValue("Calcula el perímetre del dibuix."),
          diagram: "geometry",
          geometryLevel: order[level - 1] + 1,
          diagramMeasurements: diagramMeasurements[order[level - 1]],
          answer: String(puzzle.answer)
        };
        if (level <= 3) {
          const options = [puzzle.answer, puzzle.answer - 4, puzzle.answer + 7, puzzle.answer + 13].map(String);
          for (let index = options.length - 1; index > 0; index -= 1) {
            const swapIndex = Math.floor(Math.random() * (index + 1));
            [options[index], options[swapIndex]] = [options[swapIndex], options[index]];
          }
          challenge.options = options;
        }
        return challenge;

    }
