const apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1`;
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="`;

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

//First call of popular movies so they are always visible on the page when user starts
getMovies(apiUrl);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  getMovies(SEARCH_API + searchTerm);
});

async function getMovies(url) {
  const get = await fetch(url);
  const response = await get.json();
  showMovies(response.results);
}

function showMovies(movies) {
  main.innerHTML = "";
  /*we need to put the empty main otherwise with each search the movie cards will accumilate on one
  page*/

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieHTML = ` <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
          <h3>${title}</h3>
          <span class=${getClassByRate(vote_average)}>${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>`;

    movieEl.innerHTML = movieHTML;
    main.appendChild(movieEl);
  });
}
function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}
