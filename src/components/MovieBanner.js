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
    
  return (
    <div className="banner-details" onClick={() => movieClickedHandler(props.title)}>
      <div className="type-fav"
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
      <small className="country-year">USA, 2006</small>
      <h3 className="movie-name">{props.title}</h3>
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
