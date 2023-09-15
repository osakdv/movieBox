import TrailerVid from "./components/TrailerVid";
import './styles/dashboard.css'

const Movies = () => {
    return(
        <div className="movie">
            {/* side bar */}
            <h2 style={{
                color: "black"
            }}>Movie page</h2>
            {/* Movie player and details */}
            <TrailerVid getMovieName={"d"} />
        </div>
    )
}

export default Movies;