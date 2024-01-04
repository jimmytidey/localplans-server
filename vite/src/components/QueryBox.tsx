import axios from "axios";
import Options from "./Options";

interface Props {
  fetchQuery: string;
  setQuery: Function;
  setComparisonResult: Function;
  fetchLPA1: string;
  setLPA1: Function;
  fetchLPA2: string;
  setLPA2: Function;
}

const QueryBox = ({
  fetchQuery,
  setQuery,
  setComparisonResult,
  fetchLPA1,
  setLPA1,
  fetchLPA2,
  setLPA2,
}: Props) => {
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const submit = async () => {
      try {
        console.log(fetchLPA1);
        console.log(fetchLPA2);
        if (fetchLPA1 == fetchLPA2)
          setComparisonResult("Please compare two different local authorities");
        else if (fetchQuery == "")
          setComparisonResult(
            "Please provide a topic for comparison between the local authorities"
          );
        else setComparisonResult("Loading... (can take up to 30 seconds)");

        axios({
          method: "get",
          url:
            import.meta.env.VITE_API_PATH +
            "/compare/?topic=" +
            fetchQuery +
            "&lpa1=" +
            fetchLPA1 +
            "&lpa2=" +
            fetchLPA2,
        }).then(function (response) {
          setComparisonResult(response.data.replace(/(?:\r\n|\r|\n)/g, "<br>"));
        });
      } catch (err) {
        setComparisonResult("Error");
      }
    };

    submit();
  };

  const handleChangeLPA1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLPA1(event.target.value);
  };

  const handleChangeLPA2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLPA2(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        Choose a topic for comparison. Local plans address topics such as
        'building new houses', 'biodiversity', 'climate change', 'local
        economy', 'sustainable transport' etc.{" "}
      </p>

      <div className="form_section">
        <label htmlFor="lpa1">Compare</label>
        <select id="lpa1" value={fetchLPA1} onChange={handleChangeLPA1}>
          {Options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>

      <div className="form_section">
        <label htmlFor="lpa2">With</label>
        <select id="lpa3" value={fetchLPA2} onChange={handleChangeLPA2}>
          {Options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      <div className="form_section">
        <label htmlFor="query">Comparison topic</label>
        <input
          id="query"
          onChange={(e) => setQuery(e.target.value)}
          value={fetchQuery}
        ></input>
      </div>

      <button type="submit">Generate comparison</button>
    </form>
  );
};

export default QueryBox;
