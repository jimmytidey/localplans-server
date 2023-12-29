import axios from "axios";

interface Props {
  fetchQuery: string;
  setQuery: Function;
  setComparisonResult: Function;
  fetchLPA1: string;
  setLPA1: Function;
  fetchLPA2: string;
  setLPA2: Function;
}

const QueryBox = ({ fetchQuery, setQuery, setComparisonResult }: Props) => {
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const submit = async () => {
      try {
        setComparisonResult("Loading...");

        axios({
          method: "get",
          url: import.meta.env.VITE_API_PATH + "/compare/?topic=" + fetchQuery,
        }).then(function (response) {
          setComparisonResult(response.data.replace(/(?:\r\n|\r|\n)/g, "<br>"));
        });
      } catch (err) {
        setComparisonResult("Error");
      }
    };

    submit();
  };

  const options = [
    { label: "Soutwark", value: "fruit" },

    { label: "", value: "vegetable" },

    { label: "Meat", value: "meat" },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={fetchQuery}
      ></input>
      <div onChange={onChangeValue}>
        <input
          type="radio"
          value="Male"
          name="gender"
          checked={gender === "Male"}
        />{" "}
        Male
        <input
          type="radio"
          value="Female"
          name="gender"
          checked={gender === "Female"}
        />{" "}
        Female
        <input
          type="radio"
          value="Other"
          name="gender"
          checked={gender === "Other"}
        />{" "}
        Other
      </div>

      <button type="submit">Click to submit</button>
    </form>
  );
};

export default QueryBox;
