let numberOfFilms

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?')
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?')
    }
}

start()

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

// function rememberMyfilms() {
//     for(i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?')
//               b = prompt('На сколько его оцените?')
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b
//         } else {
//             i--
//         }
//     }
// }

// rememberMyfilms()

// function detectPersonalLevel() {
//     if (personalMovieDB.count <= 10) {
//         alert(`Просмотрено довольно мало фильмов`)
//     } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//         alert(`Вы классический зритель`)
//     } else {
//         alert(`Произошла ошибка`)
//     }
// }

// detectPersonalLevel()

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    }
}

showMyDB(personalMovieDB.privat)

function writeYourGenres() {
    for(i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`)
        personalMovieDB.genres[i - 1] = genre
    }
}

writeYourGenres()