const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};

const a = prompt('Один из последних просмотренных фильмов?', ""),
    b = prompt('На сколько вы оцените его?', ""),
    с = prompt('Один из последних просмотренных фильмов?', ""),
    d = prompt('На сколько вы оцените его?', "");


personalMovieDB.movies[a] = b; //лучше через квадратные скобки чтоб без багов и всё работало
personalMovieDB.movies[с] = d;


for (let i=0; i<2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', "");
    const b = prompt('На сколько вы оцените его?', "");
};

console.log(personalMovieDB);

