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

// let personalMovieDB = {
//   count: 0,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
//   start: function () {
//     personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     while (personalMovieDB.count == '' || personalMovieDB.count == 'null' || isNaN(personalMovieDB.count)) {
//       personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
//   },
//   rememberMyFilms: function () {
//     let {
//       fName,
//       rate
//     } = personalMovieDB.movies;
//     let i = 0;
//     while (i < 2) {
//       fName = prompt('Один из последних просмотренных фильмов?', '');
//       if (fName == '' || fName == null || fName.length > 50) {
//         alert('Поле не может быть пустым или содержать более 50 символов!');
//         continue;
//       } else {
//         do {
//           rate = prompt('На сколько оцените его?', '');
//           if (rate == '' || rate == null || rate.length > 50) {
//             alert('Поле не может быть пустым или содержать более 50 символов!');
//             continue;
//           } else {
//             personalMovieDB.movies[fName] = rate;
//             i++;
//           }
//         } while (!rate);
//       }
//     }
//   },
//   detectPersonalLevel: function () {
//     if (personalMovieDB.count < 10) {
//       alert('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count <= 30) {
//       alert('Вы классический зритель');
//     } else if (personalMovieDB.count > 30) {
//       alert('Вы киноман');
//     } else {
//       alert('Произошла ошибка, смотри куда тыкаешь пальцами!');
//     }
//   },
//   showMyDB: function (hidden) {
//     hidden = personalMovieDB.privat;
//     if (!hidden) {
//       console.log(personalMovieDB);
//     }
//   },
//   writeYourGenres: function () {

//     let a = prompt('Введите ваши любимые жанры через запятую:', '');
//     while (a == '' || a == null) {
//       alert('Поле не может быть пустым!');
//       a = prompt('Введите ваши любимые жанры через запятую:', '');
//     }
//     personalMovieDB.genres = a.split(',');

//     // for (let i = 0; i < 3; i++) {
//     //     personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}:`, '');

//     //     while (personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null) {
//     //         alert('Поле не может быть пустым!');
//     //         personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}:`, '');
//     //     }
//     // }
//     personalMovieDB.genres.forEach((item, i) => {
//       console.log(`Любимый жанр #${i+1} - это ${item}`);
//     });
//   },
//   toggleVisibleMyDB: function () {
//     personalMovieDB.privat ? personalMovieDB.privat = false : personalMovieDB.privat = true;
//   },
// };


// personalMovieDB.start();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB();

// Какое будет выведено значение: let x = 5; alert( x++ ); ?
//  Чему равно такое выражение: [ ] + false - null + true ?
//  Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
//  Чему равна сумма [ ] + 1 + 2?
//  Что выведет этот код: alert( &quot;1&quot;[0] )?
//  Чему равно 2 &amp;&amp; 1 &amp;&amp; null &amp;&amp; 0 &amp;&amp; undefined ?
//  Есть ли разница между выражениями? !!( a &amp;&amp; b ) и (a &amp;&amp; b)?
//  Что выведет этот код: alert( null || 2 &amp;&amp; 3 || 4 ); ?
//  a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
//  Что выведет этот код: alert( +&quot;Infinity&quot; ); ?
//  Верно ли сравнение: &quot;Ёжик&quot; &gt; &quot;яблоко&quot;?
//  Чему равно 0 || &quot;&quot; || 2 || undefined || true || falsе ?

/* Задание   на урок:
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false
3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }
Проверить, чтобы все работало без ошибок в консоли */

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
let a = prompt("Один из последних просмотренных фильмов?");

personalMovieDB.movies[a] = prompt('На сколько оцените его?');
let b = prompt("Один из последних просмотренных фильмов?");
personalMovieDB.movies[b] = prompt('На сколько оцените его?');

console.log(personalMovieDB);