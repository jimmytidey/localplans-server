import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import QueryBox from "./components/QueryBox";
import Results from "./components/Results";
import "./App.css";

function App() {
  const [fetchQuery, setQuery] = useState("");
  const [fetchComparisonResult, setComparisonResult] = useState("");
  const [fetchLPA1, setLPA1] = useState("");
  const [fetchLPA2, setLPA2] = useState("");

  return (
    <>
      <div className="container">
        <p>
          Type a topic into the below box to get a comparison of Southwark,
          Tower Hamlets and Islington's planning approaches.
        </p>

        <p>Examples: 'Increasing housing supply', 'net biodiversity gain'</p>
        <QueryBox
          fetchQuery={fetchQuery}
          setQuery={setQuery}
          setComparisonResult={setComparisonResult}
          fetchLPA1={fetchLPA1}
          setLPA1={setLPA1}
          fetchLPA2={fetchLPA2}
          setLPA2={setLPA2}
        ></QueryBox>
        <Results fetchComparisonResult={fetchComparisonResult}></Results>
      </div>
    </>
  );
}

export default App;
