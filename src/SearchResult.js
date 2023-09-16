import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieBanner from "./components/MovieBanner";
import Navbar from "./components/Nav";
import "./styles/searchResult.css";

const Searchresult = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchValue = queryParams.get("search");

  const apiKey = "57d35afcccabfa0bc77adb34ea5a2b18";
  const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=${apiKey}`;

  let movies;
  const [loading, setLoading] = useState(false);
  const [erroMsg, setErrMsg] = useState();
  const [movieData, setMovieData] = useState();

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Request failed");
        }
        return res.json();
      })
      .then((data) => {
        setMovieData(data);
        console.log(data.results);
        setLoading(true);
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
          <div className="loading-message">"loading"</div>
        ) : (
          <div className="result-grid">
            {movieData.results.map((data) => {
              return (
                <div className="result-grid">
                  <h2>{data.title}</h2>
                  <MovieBanner movies={data} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Searchresult;
