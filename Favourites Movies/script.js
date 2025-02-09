const fetchMovieBtn = document.getElementById("fetchMovie");
const movieInput = document.getElementById("movieInput");
const movieDisplay = document.getElementById("movieDisplay");
const addFavoriteBtn = document.getElementById("addFavorite");
const favoritesList = document.getElementById("favoritesList");

const API_KEY = "b3f0cf09";

fetchMovieBtn.addEventListener("click", fetchMovie);
addFavoriteBtn.addEventListener("click", handleAddFav);

let currentMovie = null;
let favList = [];

function fetchMovie() {
  try {
    const movieTitle = movieInput.value.trim();
    fetch(`https://www.omdbapi.com/?t=${movieTitle}&apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.Response === "True") {
          currentMovie = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
          };
          movieDisplay.innerHTML = `
                      <h3>${data.Title} (${data.Year})</h3>
                      <p>${data.Plot}</p>
                  `;
        } else {
          movieDisplay.innerText = data.Error;
        }
      })
      .catch((err) => {
        movieDisplay.innerHTML = `<h3>Server Error</h3>`;
      });
  } catch (err) {}
}

function handleAddFav() {
  if (currentMovie !== undefined) {
    favList.push(currentMovie);
    handleFetchFavMovies(favList);
  }
}

function handleFetchFavMovies(favMovieList) {
  favoritesList.innerHTML = "";
  favMovieList.map((item, index) => {
    favoritesList.innerHTML += `<h3>${item.title}</h3>
    <p>${item.plot}</p>
    <button class='remove-from-list' item-index=${index}>remove from list</button>`;
  });
  let allList = document.querySelectorAll(".remove-from-list");
  allList.forEach((item, index) => {
    item.addEventListener("click", () => {
      let delet_index = parseInt(item.getAttribute("item-index"));
      if (delet_index === index) {
        favList.splice(delet_index, 1);
        handleFetchFavMovies(favList);
      }
    });
  });
}
