function createCalendarChallenge(category, level) {
        const dayNames = {
          ca: ["dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte", "diumenge"],
          en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          es: ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"]
        }[currentLanguage];
        const puzzles = [
          {
            start: 2, offset: 17,
            prompt: localized("Si avui és dimecres, quin dia serà d'aquí a 17 dies?", "If today is Wednesday, what day will it be in 17 days?", "Si hoy es miércoles, ¿qué día será dentro de 17 días?")
          },
          {
            start: 6, offset: -23,
            prompt: localized("Si avui és diumenge, quin dia era fa 23 dies?", "If today is Sunday, what day was it 23 days ago?", "Si hoy es domingo, ¿qué día era hace 23 días?")
          },
          {
            start: 0, offset: 46,
            prompt: localized("Si avui és dilluns, quin dia serà d'aquí a 6 setmanes i 4 dies?", "If today is Monday, what day will it be in 6 weeks and 4 days?", "Si hoy es lunes, ¿qué día será dentro de 6 semanas y 4 días?")
          },
          {
            start: 3, offset: 30,
            prompt: localized("Un mes de 31 dies comença en dijous. Quin dia de la setmana és el dia 31?", "A 31-day month starts on Thursday. What day of the week is the 31st?", "Un mes de 31 días empieza en jueves. ¿Qué día de la semana es el día 31?")
          },
          {
            start: 0, offset: -17,
            prompt: localized("En un mes de 30 dies, el dia 20 és dilluns. Quin dia de la setmana és el dia 3?", "In a 30-day month, the 20th is Monday. What day of the week is the 3rd?", "En un mes de 30 días, el día 20 es lunes. ¿Qué día de la semana es el día 3?")
          },
          {
            start: 6, offset: -30,
            prompt: localized("Un mes de 31 dies acaba en diumenge. Quin dia de la setmana és el dia 1?", "A 31-day month ends on Sunday. What day of the week is the 1st?", "Un mes de 31 días termina en domingo. ¿Qué día de la semana es el día 1?")
          },
          {
            start: 1, offset: 29,
            prompt: localized("En un any de traspàs, l'1 de febrer és dimarts. Quin dia de la setmana és l'1 de març?", "In a leap year, February 1 is Tuesday. What day of the week is March 1?", "En un año bisiesto, el 1 de febrero es martes. ¿Qué día de la semana es el 1 de marzo?")
          },
          {
            start: 0, offset: 29,
            prompt: localized("En un any no de traspàs, el 31 de gener és dilluns. Quin dia de la setmana és l'1 de març?", "In a non-leap year, January 31 is Monday. What day of the week is March 1?", "En un año no bisiesto, el 31 de enero es lunes. ¿Qué día de la semana es el 1 de marzo?")
          },
          {
            start: 5, offset: 33,
            prompt: localized("Un mes de 31 dies comença en dissabte. Quin dia de la setmana és el dia 3 del mes següent?", "A 31-day month starts on Saturday. What day of the week is the 3rd of the following month?", "Un mes de 31 días empieza en sábado. ¿Qué día de la semana es el día 3 del mes siguiente?")
          },
          {
            start: 0, offset: 60,
            prompt: localized("En un any de traspàs, l'1 de febrer és dilluns. Quin dia de la setmana és l'1 d'abril?", "In a leap year, February 1 is Monday. What day of the week is April 1?", "En un año bisiesto, el 1 de febrero es lunes. ¿Qué día de la semana es el 1 de abril?")
          }
        ];
        const puzzle = puzzles[level - 1];
        const answerIndex = ((puzzle.start + puzzle.offset) % 7 + 7) % 7;
        const answer = dayNames[answerIndex];
        const options = [0, 1, 3, 5].map((offset) => dayNames[(answerIndex + offset) % 7]);
        for (let index = options.length - 1; index > 0; index -= 1) {
          const swapIndex = Math.floor(Math.random() * (index + 1));
          [options[index], options[swapIndex]] = [options[swapIndex], options[index]];
        }
        return {
          prompt: puzzle.prompt,
          options, answer
        };

    }
