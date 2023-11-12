const API_URL = "https://api.themoviedb.org";

const fetchTrending = async () => {
  const params = new URLSearchParams({
    language: "en-US",
    api_key: "bc8bedeb0e6d632b70f1bff9aa069a85",
  });

  const response = await fetch(`${API_URL}/3/trending/all/day?${params}`);
  const data = await response.json();
  console.log(data.results);
  return data.results;
};

const renderRecs = async () => {
  const movies = await fetchTrending();

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

renderRecs();
