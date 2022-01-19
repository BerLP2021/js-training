/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == 'null' || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        let {
            fName,
            rate
        } = personalMovieDB.movies;
        let i = 0;
        while (i < 2) {
            fName = prompt('Один из последних просмотренных фильмов?', '');
            if (fName == '' || fName == null || fName.length > 50) {
                alert('Поле не может быть пустым или содержать более 50 символов!');
                continue;
            } else {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count <= 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка, смотри куда тыкаешь пальцами!');
        }
    },
    showMyDB: function (hidden) {
        hidden = personalMovieDB.privat;
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {

        let a = prompt('Введите ваши любимые жанры через запятую:', '');
        while (a == '' || a == null) {
            alert('Поле не может быть пустым!');
            a = prompt('Введите ваши любимые жанры через запятую:', '');
        }
        personalMovieDB.genres = a.split(',');

        // for (let i = 0; i < 3; i++) {
        //     personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}:`, '');

        //     while (personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null) {
        //         alert('Поле не может быть пустым!');
        //         personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}:`, '');
        //     }
        // }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        personalMovieDB.privat ? personalMovieDB.privat = false : personalMovieDB.privat = true;
    },
};

// personalMovieDB.start();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB();





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