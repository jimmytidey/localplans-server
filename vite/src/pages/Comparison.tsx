import QueryBox from "./../components/QueryBox";
import Results from "./../components/Results";
import { useState } from "react";
const Comparison = () => {
  const [fetchQuery, setQuery] = useState("");
  const [fetchComparisonResult, setComparisonResult] = useState("");
  const [fetchLPA1, setLPA1] = useState("Birmingham_City_Council");
  const [fetchLPA2, setLPA2] = useState("London_Borough_of_Tower_Hamlets");

  return (
    <>
      <div className="container">
        <h1>Using generative AI to compare Local Authority's Local Plans</h1>
        <p>
          Every Local Authority in England has to produce a Local Plan. The
          Local Plan sets out how the area will meet targets for building new
          houses, addressing environmental issues and other goals such as
          growing the local economy. Local Plans are hundereds of pages long and
          take years to agree.
        </p>

        <p>
          This experiment uses generative AI to draw comparisons between
          different areas' local plans.
        </p>

        <p className="description-final-para">
          This is a work-in-progress experiment - the quality of the results
          varies widely.
        </p>

        <QueryBox
          fetchQuery={fetchQuery}
          setQuery={setQuery}
          setComparisonResult={setComparisonResult}
          fetchLPA1={fetchLPA1}
          setLPA1={setLPA1}
          fetchLPA2={fetchLPA2}
          setLPA2={setLPA2}
        ></QueryBox>
        <br />
        <Results fetchComparisonResult={fetchComparisonResult}></Results>
      </div>
    </>
  );
};

export default Comparison;
