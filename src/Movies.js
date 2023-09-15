import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import TrailerVid from "./components/TrailerVid";
import "./styles/dashboard.css";

const Movies = () => {
  return (
    <div className="movie">
      {/* Movie player and details */}
      <TrailerVid getMovieName={"d"} />

      <div className="movieDetails">
        <div className="top-details">
          <div className="movie-title-year">
            <ul>
              <li>Top Guns:Mervrick</li>
              <li>2022</li>
              <li>PG-13</li>
              <li>2h 10min</li>
            </ul>

            <div className="genre-container">
              <small>Action</small>
              <small>Drama</small>
            </div>

            <div className="rating">
                <span className="icon">
                    <FontAwesomeIcon icon={faStar} />
                </span>

                <div className="r-num">8.7/10</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
