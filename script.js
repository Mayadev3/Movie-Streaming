const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.querySelector(".search");

/*const apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=64b65930978cceae7b4c679e1f043d6f&page=1`;
console.log(apiUrl);
const imagePath = `https://image.tmdb.org/t/p/w1280`;
const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=64b65930978cceae7b4c679e1f043d6f&query="`;

async function getMovies(url) {
  const get = await fetch(url);
  const response = await get.json();
  console.log(response.results);
}
getMovies(apiUrl);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
});*/

async function fetchMovie(searchTerm) {
  let apiKey = `64b65930978cceae7b4c679e1f043d6f`;

  const get = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`
  );
  const res = get.json();
  console.log(res);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchTerm = search.value;
  fetchMovie();
});
