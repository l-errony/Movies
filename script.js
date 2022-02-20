 let numberOfFilms;

function start(){
     numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', "");

    while( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', "");
    }
}
//start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};

/* const a = prompt('Один из последних просмотренных фильмов?', ""),
    b = prompt('На сколько вы оцените его?', ""),
    с = prompt('Один из последних просмотренных фильмов?', ""),
    d = prompt('На сколько вы оцените его?', "");


personalMovieDB.movies[a] = b; //лучше через квадратные скобки чтоб без багов и всё работало
personalMovieDB.movies[с] = d; */


function rememberMyFilms(){
    for (let i=0; i<2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', "");
        const b = prompt('На сколько вы оцените его?', "");
    
        if(a != null  && b != null && a != '' && b != '' && a.length<50){
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else{
            console.log('error');
            i--;
            }
         }
}
//rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count<10){
        console.log("Просмотрено довольно мало фильмов!");
    } else if (personalMovieDB.count>=10 && personalMovieDB.count<30){
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count>=30){
        console.log("Вы киноман");
    }else{
        console.log("Произошла ошибка");
    }
}
//detectPersonalLevel();

function showMyDB (hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB (personalMovieDB.privet);

function writeYourGenres(){
    for (let i = 1; i<=3; i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i-1] = genre;  //так как и началось с  нуля
    }
}

writeYourGenres();