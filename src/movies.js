// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director);
  }
  
const allDirectors = getAllDirectors(movies);
console.log(allDirectors);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDramas = moviesArray.filter(movie => 
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
    return spielbergDramas.length;
  }
  

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
      return 0;
    }
  
    const totalScore = moviesArray.reduce((sum, movie) => {
      if (movie.score) {
        return sum + movie.score;
      } else {
        return sum;
      }
    }, 0);
  
    const averageScore = totalScore / moviesArray.length;
    return Number(averageScore.toFixed(2));
  }
  

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
  
    if (dramaMovies.length === 0) {
      return 0;
    }
  
    const totalDramaScore = dramaMovies.reduce((sum, movie) => {
      return movie.score ? sum + movie.score : sum;
    }, 0);
  
    const averageDramaScore = totalDramaScore / dramaMovies.length;
    return Number(averageDramaScore.toFixed(2));
  }
  

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = [...moviesArray].sort((a, b) => {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title);
      }
      return a.year - b.year; 
    });
    return sortedMovies;
  }
  

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titles = moviesArray.map(movie => movie.title);
    titles.sort((a, b) => a.localeCompare(b));
    return titles.slice(0, 20);
  }
  

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
