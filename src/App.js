import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Movies from "./Movies";

function App() {
  // TODO: Excute api call here and store

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
