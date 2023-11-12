const API_URL = "https://api.themoviedb.org";

const moviesForm = document.querySelector(".movies-search-form");
moviesForm.addEventListener("submit", onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  renderRecs(e.target.elements.movie.value);

  e.target.reset();
}

const fetchMovie = async (movie) => {
  const params = new URLSearchParams({
    language: "en-US",
    api_key: "bc8bedeb0e6d632b70f1bff9aa069a85",
    include_adult: false,
    query: movie,
    page: 1,
  });

  const response = await fetch(`${API_URL}/3/search/movie?${params}`);
  const data = await response.json();
  return data.results;
};

const renderRecs = async (movie) => {
  const movies = await fetchMovie(movie);

  const recs = movies
    .map(
      (movie) => `
        <li class="movie">
            <a href="" class="link">
                <img src="${`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}" 
                    alt="${movie.original_title ?? movie.original_name}"/>
                <p>${movie.original_title ?? movie.original_name}</p>
            </a>
        </li>
    `
    )
    .join("");

  document.querySelector(".movies-list").innerHTML = recs;
};
