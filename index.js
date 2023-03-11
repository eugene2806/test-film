let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?')

const personalMovieDB = {
    count: Number(numberOfFilms),
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let b = 0
while (b < 2) {
const lastFilm = prompt('Один из последних просмотренных фильмов?') 
if (lastFilm.length > 0 && lastFilm.length < 50) {
    const filmScore = prompt('На сколько его оцените?')
    personalMovieDB.movies[lastFilm] = filmScore
    b += 1
 } else {
   continue
 }
}

if (personalMovieDB.count <= 10) {
    alert(`Просмотрено довольно мало фильмов`)
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
    alert(`Вы классический зритель`)
} else {
    alert(`Произошла ошибка`)
}


console.log(personalMovieDB.movies) 