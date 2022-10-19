const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.querySelector(".search");

const apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=64b65930978cceae7b4c679e1f043d6f&page=1`;
const imagePath = `https://image.tmdb.org/t/p/w1280`;
const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=64b65930978cceae7b4c679e1f043d6f&query="`;

async function getMovies(url) {
  const get = await fetch(url);
  const response = await get.json();
  showMovies(response.results);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    getMovies(searchUrl + searchTerm);
    search.value = "";
    /* after getting the search results, clear the input, dont leave the movie searched written in the input*/
  } else {
    window.location.reload();
  }
  /*this says that if there is a term written in the input and it isn't emptry, do the following*/
});

function showMovies(movies) {
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    let movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieHTML = `<img
          src="${imagePath + poster_path}"
          alt="${title}"
        />
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
  if (vote >= 1 && vote <= 5) {
    return "red";
  } else if (vote >= 6 && vote <= 8) {
    return "orange";
  } else {
    return "green";
  }
}
