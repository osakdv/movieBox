import MovieBanner from "./components/MovieBanner";
import Navbar from "./components/Nav";
import "./styles/searchResult.css"


const Searchresult = () => {
    return(
        <div className="search-result">
            <Navbar />

            <div className="result-content">
                <h2>Result</h2>

                <div className="result-grid">
                    <MovieBanner />
                    <MovieBanner />
                    <MovieBanner />
                    <MovieBanner />
                    <MovieBanner />
                </div>
            </div>
        </div>
    )
}

export default Searchresult;