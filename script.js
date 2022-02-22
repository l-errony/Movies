
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privet: false,
    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели?', "");
   
       while( personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели?', "");
       }
   },
   rememberMyFilms: function(){
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
    },
    detectPersonalLevel: function(){
        if (personalMovieDB.count<10){
            console.log("Просмотрено довольно мало фильмов!");
        } else if (personalMovieDB.count>=10 && personalMovieDB.count<30){
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count>=30){
            console.log("Вы киноман");
        }else{
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function (hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privet){
            personalMovieDB.privet=false;
        }else{
            personalMovieDB.privet = true;
        }
    },
    writeYourGenres: function(){
        /* for (let i = 1; i<=3; i++){
            const genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if(genre == "" || genre == null){
                console.log('Вы ввели неккоректные данные или не ввели их вовсе');
                i--;
            }else{
                 personalMovieDB.genres[i-1] = genre; 
             } //так как и началось с  нуля */
             //ИЛИ ТАК
             for(let i = 1; i<2; i++){
                const genre = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase;

                if(genre == "" || genre == null){
                    console.log('Вы ввели неккоректные данные или не ввели их вовсе');
                    i--;
                }else{
                     personalMovieDB.genres = genre.split(', ');  //метод строк, который разделяет на элементы массивов через заданый разделитель
                     personalMovieDB.genres.sort();
             }
        }

        personalMovieDB.genres.forEach((item, i)=>{
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    }
    
};




















/* const a = prompt('Один из последних просмотренных фильмов?', ""),
    b = prompt('На сколько вы оцените его?', ""),
    с = prompt('Один из последних просмотренных фильмов?', ""),
    d = prompt('На сколько вы оцените его?', "");


personalMovieDB.movies[a] = b; //лучше через квадратные скобки чтоб без багов и всё работало
personalMovieDB.movies[с] = d; */

