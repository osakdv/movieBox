import { useEffect, useState } from "react";
import FeaturedMovies from "./components/FeatureMovies";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Home = () => {
  const [featuredMovies, setFeaturedMovies] = useState();
  const [movieLoaded, setMovieLoaded] = useState(false);

  const apiUrl =
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
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
        setMovieLoaded(true);
      });
  }, []);

  return (
    <div className="home-page">
      <Header />
      {/* Featured movies */}
      {featuredMovies && <FeaturedMovies movieData={featuredMovies} />}
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
