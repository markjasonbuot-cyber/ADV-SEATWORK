const movies = [
    { title: "John Wick", rating: 8.8 },
    { title: "Interstellar", rating: 8.6 },
    { title: "The Dark Knight", rating: 9.0 },
    { title: "Avengers: Endgame", rating: 8.4 },
    { title: "Joker", rating: 8.3 },
    { title: "Fast & Furious", rating: 7.2 }
];

const button = document.getElementById("filterBtn");
const movieList = document.getElementById("movieList");

button.addEventListener("click", () => {
    movieList.innerHTML = "";

    const filteredMovies = movies.filter(movie => movie.rating > 8);

    filteredMovies.forEach(movie => {
        const li = document.createElement("li");
        li.textContent = `${movie.title} ⭐ ${movie.rating}`;
        movieList.appendChild(li);
    });
});