const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.querySelector(".search");

const apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=64b65930978cceae7b4c679e1f043d6f&page=1`;
const imagePath = `https://image.tmdb.org/t/p/w1280`;
const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=64b65930978cceae7b4c679e1f043d6f&query="`;

async function getMovies(url) {
  const get = await fetch(url);
  const response = await get.json();
  console.log(response.results);
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
