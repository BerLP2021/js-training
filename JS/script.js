let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''),
    personalMovieDB = {
        count: numberOfFilms,
        movies: {}, 
        actors: {}, 
        genres: [], 
        privat: false
    },
    fName,
    rate;

personalMovieDB.count = numberOfFilms;
if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка, смотри куда тыкаешь пальцами!');
}

// for (let i = 0; i < 2; i++) {
//     do {
//         fName = prompt('Один из последних просмотренных фильмов?', '');
//         if (fName == null || fName == '') {
//             alert('Поле не может быть пустым');
//         } else if (fName.length > 50) {
//             alert(`Стопэ! ${fName.length} - слишком много символов.\nМожно только до 50!. Делай заново, чувак`);
//             fName = "";
//         }
//     } while (!fName);

//     do {
//         rate = prompt('На сколько оцените его?', '');
//         if (rate == null || rate == '') {
//             alert('Поле не может быть пустым');
//         } else if (rate.length > 50) {
//             alert(`Стопэ! ${fName.length} - слишком много символов.\nМожно только до 50!. Делай заново, чувак`);
//             rate = "";
//         }
//     } while (!rate);

//     personalMovieDB.movies[fName] = rate;
// }


let i = 0;    
while (i < 2) {
    fName = prompt('Один из последних просмотренных фильмов?', '');
    if (fName == '' || fName == null || fName.length > 50) {
        alert('Поле не может быть пустым или содержать более 50 символов!');
        continue;
    }   else { 
            do {
                rate = prompt('На сколько оцените его?', '');
                if (rate == '' || rate == null || rate.length > 50) {
                    alert('Поле не может быть пустым или содержать более 50 символов!');
                    continue;
                } else {
                    personalMovieDB.movies[fName] = rate; 
                    i++;
                } 
            } while (!rate);
        }
}

console.log(personalMovieDB);

