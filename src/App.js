import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Searchresult from "./SearchResult";

function App() {
  // TODO: Excute api call here and store

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/movies" element={<Dashboard />} />
          <Route path="/movies/${id}" element={<Dashboard />} Component={Dashboard} />
          <Route path="/results" element={<Searchresult />} />
          <Route path="/results/${search}" element={<Searchresult />} Component={Searchresult}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
