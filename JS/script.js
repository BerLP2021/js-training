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
//           rate = ate == '' || rate == null || rate.length > 50) {
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



let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
  while (isNaN(numberOfFilms) || numberOfFilms < 0 || !numberOfFilms) {
    alert('Вводимые данные должны быть целым неотрицательным числом');
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
  }
}
start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilm() {
  for (let i = 0; i < 2; i++) {

    let a = prompt("Один из последних просмотренных фильмов?");

    if (!a || a.length > 50) {
      alert("Название не должно превышать 50 символов!");
      i--;
      continue;

    } else {
      let b = +prompt('На сколько оцените его?');
      while (isNaN(b) || b < 0 || !b) {
        alert('Вводимые данны-1е должны быть целым неотрицательным числом');
        b = +prompt('На сколько оцените его?');
      }
      personalMovieDB.movies[a] = b;
    }
  }
}
rememberMyFilm();



function detectPersonalLevel() {
  if (personalMovieDB.count <= 30) {
    if (personalMovieDB.count > 10) {
      alert('Вы классический зритель');
    } else if (personalMovieDB.count > 0) {
      alert('Просмотрено довольно мало фильмов');
    }
  } else {
    alert('Вы киноман');
  }
}
detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) console.log(personalMovieDB);
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    let genre = prompt(`Ваш любимый жанр под номером ${i+1}`);
    personalMovieDB.genres[i] = genre;
  }
}
writeYourGenres();






// let aa = '*';
// for (let i = 1; i < 20; i++) {
//   console.log(aa);
//   aa += '-*';
// // }

// let res = '',
//   lng = 7;
// for (let i = 1; i < lng; i++) {
//   for (let j = 1; j <= i; j++) {
//     res += '*';
//   };
//   res += '\n';
// };
// console.log(res);

// asc: for (let i = 0; i < 3; i++) {
//   console.log(`First level ${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`    Second level ${j}`);
//     for (let k = 0; k < 6; k++) {
//       if (k === 4) continue asc;
//       console.log(`      Third level ${k}`);
//     }
//   }
// }

// function firstTask() {
//   // Пишем решение вот тут
//   let i = 5;
//   while (i < 11) {
//     console.log(i++);
//   }
// }
// firstTask();

// function secondTask() {
//   // Пишем решение вот тут
//   for (let i = 20; i > 9; i--) {
//     if (i === 13) break;
//     console.log(i);
//   }
// }
// secondTask();

// function thirdTask() {
//   // Пишем решение вот тут
//   for (let i = 2; i < 11; i++) {
//     if (i % 2 > 0) continue;
//     console.log(i);
//   };
// }
// thirdTask();

// let i = 2;
// while (i <= 16) {
//   if (i % 2 > 0) {
//     console.log(i++);
//   } else i++;
// }

// let i = 2;
// while (i <= 16) {
//   if (i % 2 > 0) {
//     console.log(i);
//   };
//   i++;
//   continue;
// }

// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// function fourthTask() {
//   // Пишем решение вот тут
//   let i = 2;
//   while (i <= 16) {
//     if (i % 2 > 0) {
//       console.log(i++);
//     } else i++;
//   }
// }
// fourthTask();

// function fifthTask() {
//   const arrayOfNumbers = [];
//   let j = 0;
//   for (let i = 5; i < 11; i++) {
//     arrayOfNumbers[j] = i;
//     j++;
//   };
//   console.log(arrayOfNumbers);
// }
// fifthTask();

// function fifthTask() {
//   const arrayOfNumbers = [];
//   for (let i = 5; i < 11; i++) {
//     arrayOfNumbers[i - 5] = i;
//   }
//   console.log(arrayOfNumbers);
// }
// fifthTask();


// Место для первой задачи
// function firstTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const arr = [3, 5, 8, 16, 20, 23, 50];
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
//   }
//   // Пишем решение вот тут

//   console.log(result);
//   // Не трогаем
//   return result;
// }
// firstTask();

// Место для второй задачи
// function secondTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const data = [5, 10, 'Shopping', 20, 'Homework'];
//   for (let i = 0; i < data.length; i++) {
//     // console.log(typeof (data[i]));
//     if (typeof (data[i]) == 'string') {
//       data[i] += '-done';
//     } else if (typeof (data[i]) == 'number') {
//       data[i] *= 2;
//     }
//   }
//   console.log(data);
// }
// secondTask()

// let bb = ['dere'];
// bb[0] = bb[0] + ' erer';
// console.log(bb[0]);

// Место для третьей задачи
// function thirdTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const data = [5, 10, 'Shopping', 20, 'Homework'];
//   const result = [];
//   for (let i = 0; i < data.length; i++) {
//     result[data.length - i - 1] = data[i];
//   }
//   // Пишем решение вот тут

//   console.log(result);
//   // Не трогаем
//   return result;
// }


// const lines = 5;
// let result = '';
// // Проверяется именно переменная result, формируйте строку в ней
// for (let i = 1; i < 7; i++) {
//   for (let j = 1; j < 7 - i; j++) {
//     result = result + ' ';
//   }
//   for (let k = 1; k < 2 * i; k++) {
//     result = result + '*';
//   }
//   result = result + '\n';
// }
// console.log(result);


// const lines = 5;
// let result = '';
// // Проверяется именно переменная result, формируйте строку в ней
// for (let i = 1; i <= lines + 1; i++) {
//   for (let j = 1; j <= lines - i + 1; j++) {
//     result = result + ' ';
//   }
//   for (let k = 1; k < 2 * i; k++) {
//     result = result + '*';
//   }
//   result = result + '\n';
// }


// function returnNeighboringNumbers(a, b) {
//   let arr = [];
//   for (let i = 0; i <= b * 2; i++) {
//     arr[i] = a + i - b;
//   }
//   console.log(arr);
// }
// returnNeighboringNumbers(-0, 100);



// function getMathResult(x, n) {
//   let res = x;
//   if (typeof (n) == "number" && n > 0) {
//     for (let i = 2; i <= n; i++) {
//       res = res + '-' + x * i;
//     }
//   } else {
//     res = x;
//   }
//   return res
// }
// console.log(getMathResult(5, 'mk'));
// a = rgb(0, 0, 0);

// let coun = 5;

// function createCounter() {
//   let counter = 5;

//   function myFunction() {
//     counter = counter + 1;
//     return counter;
//   }
//   return myFunction;
// }

// const increment = createCounter();
// console.log(increment() + increment());
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();
// console.log('example increment', c1, c2, c3);


// function isAN(value) {
//   if (value instanceof Number)
//     value = value.valueOf(); // Если это объект числа, то берём значение, которое и будет числом

//   return isFinite(value) && value === parseInt(value, 10);
// }
// let xx = 0;
// console.info(typeof (isFinite(xx) && xx) == 'number');
// console.info(isAN(null));
// console.info(isAN(new Number(1)));

// function typeOfNaN(x) {
//   if (Number.isNaN(x)) {
//     return 'Number is NaN';
//   }
//   if (isNaN(x)) {
//     return 'is NaN';
//   }
// }

// console.log(typeOfNaN('100F'));
// // expected output: "NaN"

// console.log(typeOfNaN(NaN));
// // expected output: "Number NaN"


// Lesson 29. Additional tasks
//           #1
// function calculateVolumeAndArea(a) {
//   if (typeof (a) == 'number' && a > 0 && Number.isInteger(a)) {
//     let volume = Math.pow(a, 3);
//     let area = Math.pow(a, 2) * 6;
//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
//   } else {
//     return 'При вычислении произошла ошибка';
//   }
// }
// console.log(calculateVolumeAndArea(2));


//           #2
// function getCoupeNumber(place) {

//   if (place > 0 && place <= 36 && typeof (place) == 'number' && Number.isInteger(place)) {
//     return Math.ceil(place / 4);
//   } else if (place == 0 || place > 36) {
//     return 'Таких мест в вагоне не существует';
//   } else {
//     return "Ошибка. Проверьте правильность введенного номера места";
//   }
// }

// exersice 8
// #2
// function findMaxNumber(a, b, c, d) {
//   if (typeof (a) == 'number' && typeof (b) == 'number' && typeof (c) == 'number' && typeof (d) == 'number') {
//     return Math.max(a, b, c, d)
//   } else {
//     return 0
//   }
// }
// console.log(findMaxNumber(0, 10, 2, -500));

// #1
// function getTimeFromMinutes(a) {
//   if (typeof (a) == 'number' && Number.isInteger(a)) {
//     let hour = parseInt(a / 60),
//       min = a - hour * 60;
//     if (hour == 1 || hour == 21) {
//       return `Это ${hour} час и ${min} минут`;
//     } else if (hour >= 2 && hour <= 4 || hour >= 22 && hour <= 24) {
//       return `Это ${hour} часа и ${min} минут`;
//     } else if (hour === 0 || hour >= 5) {
//       return `Это ${hour} часов и ${min} минут`;
//     }
//   } else {
//     return 'Ошибка, проверьте данные'
//   }
// }
// console.log(getTimeFromMinutes(-50));

// console.log(typeof (getTimeFromMinutes(245)));

// Фибоначчи
// function fib(e) {
//   let arr = [0, 1],
//     res = '0 1';
//   if (e == 1) {
//     return '0'
//   } else if (typeof (e) != 'number' || e === 0 || e < 0) {
//     return ''
//   } else if (Number.isInteger(e)) {
//     for (let i = 2; i < e; i++) {
//       arr[i] = arr[i - 1] + arr[i - 2];
//       res += ` ${arr[i]}`;
//     }
//     return res;
//   }
// }

// console.log(fib(0));
// console.log(fib(1));
// console.log(fib(2));
// console.log(fib('0'));
// console.log(fib(8));
// console.log(fib(-14));
// console.log(fib(20));