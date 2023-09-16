import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import "./../styles/heading.css";
import Navbar from "./Nav";

const Header = () => {
  const tmdbBaseUrl = "https://image.tmdb.org/t/p/original";

  const [popularMov, setPopularMov] = useState();
  const [isDoneLoading, setIsDoneLoading] = useState(false);

  const apiUrl =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  const apiKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2NjMWFmMDA1NGY3YzU4NWRjYmVhNjkzNjMyY2MzMSIsInN1YiI6IjY1MDBmYTIxNTU0NWNhMDBjNGRhZTdkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5VnhnVYC1DICaDCpVGEr3apASQMDaGe0iLmWnKv8myM";
  const headers = new Headers({
    accept: "application/json",
    Authorization: `Bearer ${apiKey}`,
  });

  const requesOption = {
    method: "GET",
    headers: headers,
  };

  useEffect(() => {
    fetch(apiUrl, requesOption)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPopularMov(data.results);
        setIsDoneLoading(true);
      });
  }, []);

  const [movieName, setMovieName] = useState(
    "Indiana Jones and the Dial of Destiny"
  );
  const [movieRating, setMovieRating] = useState("");
  const [moviePercent, setMoviePercent] = useState("");
  const [movieSummary, setMovieSummary] = useState(
    "Finding himself in a new era, and approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn't fall into the wrong hands."
  );
  const [movieBanner, setMovieBanner] = useState(
    "/9m161GawbY3cWxe6txd1NOHTjd0.jpg"
  );
  const [movieId, setMovieId] = useState("");

  //   this function switches between the movies available
  const ctrl1 = useRef();
  const ctrl2 = useRef();
  const ctrl3 = useRef();
  const ctrl4 = useRef();
  const ctrl5 = useRef();

  const m1 = 4;
  const m2 = 18;
  const m3 = 16;
  const m4 = 7;
  const m5 = 13;

  const displayPopularMovies = (index) => {
    setMovieName(popularMov[index].title);
    setMovieRating(popularMov[index].vote_average);
    setMoviePercent(popularMov[index].vote_average);
    setMovieSummary(popularMov[index].overview);
    setMovieBanner(popularMov[index].backdrop_path);
    setMovieId(popularMov[index].id);
  };

  const popularMovieHandler = (index) => {
    if (!popularMov) {
      return;
    }

    const ctrlSwitch = (ct1, ct2, ct3, ct4, ct5, mIndex) => {
      ct1.current.style.fontSize = "1.1rem";
      ct1.current.classList.add(".ctrl-indicator");

      ct2.current.style.fontSize = ".8rem";
      ct2.current.classList.remove(".ctrl-indicator");

      ct3.current.style.fontSize = ".8rem";
      ct3.current.classList.remove(".ctrl-indicator");

      ct4.current.style.fontSize = ".8rem";
      ct4.current.classList.remove(".ctrl-indicator");

      ct5.current.style.fontSize = ".8rem";
      ct5.current.classList.remove(".ctrl-indicator");

      displayPopularMovies(mIndex);
    };

    switch (index) {
      case m1:
        ctrlSwitch(ctrl1, ctrl2, ctrl3, ctrl4, ctrl5, m1);
        break;
      case m2:
        ctrlSwitch(ctrl2, ctrl1, ctrl3, ctrl4, ctrl5, m2);
        break;
      case m3:
        ctrlSwitch(ctrl3, ctrl2, ctrl1, ctrl4, ctrl5, m3);
        break;
      case m4:
        ctrlSwitch(ctrl4, ctrl2, ctrl3, ctrl1, ctrl5, m4);
        break;
      case m5:
        ctrlSwitch(ctrl5, ctrl2, ctrl3, ctrl4, ctrl1, m5);
        break;
    }
  };

  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${tmdbBaseUrl}${movieBanner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "auto"
      }}
    >
      {/* nav bar */}
      <Navbar />

      <div className="banner-content">
        <div className="about-popular-movie">
          <h2 className="p-movie-title">{movieName}</h2>
          <div className="tag-ratings">
            <div className="imdb-logo">Imdb</div>
            <div className="vote-rating">{movieRating}/10</div>
            <div className="percentage-rate">
              <span className="tomato"></span>
              <span className="percent">
                {(parseInt(movieRating) / 100) * 2302}%
              </span>
            </div>
          </div>
          <p className="about-movie-brief">{movieSummary}</p>
          <button className="watch-trailer" key="TODO:">
            <span className="icon">
              <FontAwesomeIcon icon={faCirclePlay} />
            </span>
            <span>WATCH TRAILER</span>
          </button>
        </div>

        <div className="banner-controls">
          <div
            className="ctl-1"
            ref={ctrl1}
            onClick={() => popularMovieHandler(m1)}
          >
            1
          </div>
          <div
            className="ctl-1"
            ref={ctrl2}
            onClick={() => popularMovieHandler(m2)}
          >
            2
          </div>
          <div
            className="ctl-1"
            ref={ctrl3}
            onClick={() => popularMovieHandler(m3)}
          >
            3
          </div>
          <div
            className="ctl-1"
            ref={ctrl4}
            onClick={() => popularMovieHandler(m4)}
          >
            4
          </div>
          <div
            className="ctl-1"
            ref={ctrl5}
            onClick={() => popularMovieHandler(m5)}
          >
            5
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
