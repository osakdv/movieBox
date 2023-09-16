import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import TrailerVid from "./components/TrailerVid";
import "./styles/dashboard.css";

const Movies = ({movieId}) => {
  const [featuredMovies, setFeaturedMovies] = useState();
  const [movieLoaded, setMovieLoaded] = useState(false);
  let movieOn;
  const [mName,setMName] = useState("Top Guns: Mervrick")
  const [descrip,setDescrip] = useState("After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to")

  const apiUrl =
    `https://api.themoviedb.org/3/movie/${movieId}`;
  const apiKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2NjMWFmMDA1NGY3YzU4NWRjYmVhNjkzNjMyY2MzMSIsInN1YiI6IjY1MDBmYTIxNTU0NWNhMDBjNGRhZTdkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5VnhnVYC1DICaDCpVGEr3apASQMDaGe0iLmWnKv8myM";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  useEffect(() => {
    fetch(apiUrl, options)
      .then((res) => {
        if (!res.ok) {
          throw Error("Request failed");
        }

        return res.json();
      })
      .then((data) => {
        setFeaturedMovies(data);
        console.log(data)
        setMovieLoaded(true);
        // data.results.filter(data => {
        //   if(data.id === movieId) {
        //     movieOn = data
        //     setMName(data.title)
        //     setDescrip(data.overview)
        //   }
        // })
      });
  }, []);
  
  return (
    <div className="movie">
      {/* Movie player and details */}
      {movieLoaded && <TrailerVid getMovieName={`${featuredMovies.title} trailer`} />}

      <div className="movieDetails">
        <div className="top-details">
          <div className="movie-title-year">
            <ul>
              <li data-testid = "movie-title">{movieLoaded && featuredMovies.title}</li>
              <li data-testid = "movie-release-date">
                <span>·</span> {
                  movieLoaded  && new Date(featuredMovies.release_date).toLocaleString('en-US', { timeZone: 'UTC' })
                }
              </li>
              <li>
                <span>·</span> PG-13
              </li>
              <li data-testId="movie-runtime">
                <span>·</span> {movieLoaded  && featuredMovies.runtime}min
              </li>
            </ul>

            <div className="genre-container">
              <small test-id="movie-genre">{
                movieLoaded && featuredMovies.genres[0].name
              }</small>
              <small>
              {
                movieLoaded && featuredMovies.genres[1].name
              }
              </small>
            </div>
          </div>

          <div className="rating">
            <span className="icon">
              <FontAwesomeIcon icon={faStar} />
            </span>

            <div className="r-num">{movieLoaded && featuredMovies.vote_average}/10</div>
          </div>
        </div>

        <div className="bottom-details">
          <div className="left-side">
            <p className="m-summary" data-testId="movie-overview">
              {movieLoaded && featuredMovies.overview}
            </p>

            <div className="director-write-star">
              <p>
                Director :
                <span>Joseph Kosinski</span>
              </p>
              <p>
                Writters :
                <span>
                  Jim Cash, Jack Epps Jr, Peter Craig
                </span>
              </p>
              <p>
                Star :
                <span>
                  Tom Cruise, Jennifer Connelly, Miles Teller
                </span>
              </p>
            </div>

            <div className="top-rated-movie">
              <div className="text-side">
                <div className="movie-position">
                  Top rated movie <span data-testId="movie-position">#65</span>
                </div>

                <div className="awards">Awards: 9 nominations</div>
              </div>

              <div className="drop-down-btn">
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="bottons">
              <button className="see-showtime">
                <span>
                  <FontAwesomeIcon icon={faCaretDown} />
                </span>
                See Showtimes
              </button>
              <button className="more-watch">
                <span>
                  <FontAwesomeIcon icon={faCaretDown} />
                </span>
                More watch options
              </button>
            </div>
            <div className="best-movies">
              <div className="mv-container">
                <div className="movie-banner" data-testId="month-best-movie"></div>
                <div className="movie-banner" data-testId="month-best-movie"></div>
                <div className="movie-banner" data-testId="month-best-movie"></div>
              </div>

              <div className="brief-banner">
              <FontAwesomeIcon className="icon" icon={faCaretDown} />
              <p>The Best Movies and shows in September</p>
              </div>
            </div>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
