import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieBanner from "./components/MovieBanner";
import Navbar from "./components/Nav";
import "./styles/searchResult.css";

const Searchresult = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchValue = queryParams.get("search");

  const apiKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2NjMWFmMDA1NGY3YzU4NWRjYmVhNjkzNjMyY2MzMSIsInN1YiI6IjY1MDBmYTIxNTU0NWNhMDBjNGRhZTdkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5VnhnVYC1DICaDCpVGEr3apASQMDaGe0iLmWnKv8myM";
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchValue}`;

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Request failed");
        }
        return res.json();
      })
      .then((data) => {
        setMovies(data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [apiUrl]);
  return (
    <div className="search-result">
      <Navbar />

      <div className="result-content">
        <h2>Result</h2>

        {!loading ? (
          <div className="loading-message">
            "loading"
          </div>
        ) : (
          <div className="result-grid">
            <MovieBanner />
            <MovieBanner />
            <MovieBanner />
            <MovieBanner />
            <MovieBanner />
          </div>
        )}
      </div>
    </div>
  );
};

export default Searchresult;
