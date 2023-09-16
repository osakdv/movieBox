import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./../styles/featureMovies.css";
import imdbLogo from "./../images/imdb.png";
import tomato from "./../images/tomato.png";

const MovieBanner = (props) => {
    const tmdbBaseUrl = "https://image.tmdb.org/t/p/w500"; 
  
    const navigator = useNavigate()
    const movieClickedHandler = (t) => {
      navigator(`/dashboard?title=${t}`)
    }

    console.log(props)
    
  return (
    <div data-testId="movie-card" className="banner-details" onClick={() => movieClickedHandler(props.title)}>
      <div className="type-fav" data-testId="movie-poster"
      style={{
        backgroundImage: `url(${tmdbBaseUrl}${props.poster})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      >
        <small className="movie-type">TV SERIES</small>

        <span className="fav-icon">
          <FontAwesomeIcon icon={faHeart} />
        </span>
      </div>
      <small className="country-year" data-testId="movie-release-date">{
        new Date(props.year).getFullYear()
      }</small>
      <h3 className="movie-name" data-testId="movie-title">{props.title}</h3>
      <div className="imdb-rating">
        <div className="logo-rate">
          <img src={imdbLogo} alt="Imdb" />
          <span>{props.voteRate}/10</span>
        </div>
        <div className="percentage-tomato">
          <img src={tomato} alt="tomato" />
          <span>{Math.floor(props.voteRate * 10)}%</span>
        </div>
      </div>
      <small className="movie-genre">Action, Adventure, Horror</small>
    </div>
  );
};

export default MovieBanner;
