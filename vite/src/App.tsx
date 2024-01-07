import "bootstrap/dist/css/bootstrap.min.css";
import Intro from "./pages/Intro";
import Comparison from "./pages/Comparison";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <Link to="/">Home</Link>
        <Link to="/comparison">Local Plans Comparisons</Link>
      </div>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/comparison" element={<Comparison />} />
      </Routes>
      ;
    </>
  );
}

export default App;
