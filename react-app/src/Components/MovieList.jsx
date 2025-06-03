

function MovieList(){
        const movies = [
    {id: 1, title: "Inception", year: 2010},
    {id: 2, title: "Interstellar", year: 2014},
    {id: 3, title: "The Dark Knight", year: 2008},
    {id: 4, title: "Pulp Fiction", year: 1994},
    {id: 5, title: "The Shawshank Redemption", year: 1994},
    {id: 6, title: "The Godfather", year: 1972},
    {id: 7, title: "The Matrix", year: 1999},
    {id: 8, title: "Fight Club", year: 1999},
        ]
        return (
     <>
         <h1>Movies</h1>
      <ul>
        {movies.map(movie => (
          <h4 key={movie.id}>
            {movie.title} ({movie.year})
          </h4>
        ))}
      </ul>
      </>)
}
export default MovieList;