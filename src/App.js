import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Movies from "./Movies";

function App() {
  // TODO: Excute api call here and store

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/${title}/${year}" element={<Dashboard />} Component={Dashboard} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
