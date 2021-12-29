let numberOfFilms = +prompt('Сколько фильов вы уже посмотрели?', ''),
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
fName = prompt('Один из последних просмотренных фильмов?', '');
rate = prompt('На сколько оцените его?', '');
personalMovieDB.movies[fName] = rate;
fName = prompt('Один из последних просмотренных фильмов?', '');
rate = prompt('На сколько оцените его?', '');
personalMovieDB.movies[fName] = rate;
console.log(personalMovieDB);

