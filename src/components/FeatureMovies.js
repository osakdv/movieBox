import "./../styles/featureMovies.css";
import MovieBanner from "./MovieBanner";

const FeaturedMovies = (props) => {
  const movieData = props.movieData.results;

  return (
    <div className="featured-movies side-margin">
      <div className="more-featured-movies">
        <h2>Featured Movie</h2>
      </div>

      <div className="movies-section-grid">
        {
            movieData.map(movie => {
                return <div className="movie-card" key={movie.id}>
                    <MovieBanner title={movie.title} poster={movie.poster_path} year={movie.release_date} voteRate={movie.vote_average} percentTomato={movie.vote_average} genreId={movie.genre_ids}/>
                </div>
            })
        }
      </div>
    </div>
  );
};

export default FeaturedMovies;
