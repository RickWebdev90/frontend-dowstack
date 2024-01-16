const TypeInput = ({ type, setType }) => {
  return (
    <div className="input-wrapper">
      <label>Art der Buchung</label>
      <select
        value={type}
        onChange={(e) => {
          setType(e.target.value);
          console.log("TYPEINPUT:", e.target.value, typeof e.target.value);
        }}
      >
        <option value={"out"}>Ausgabe</option>
        <option value={"in"}>Einnahme</option>
      </select>
    </div>
  );
};

export default TypeInput;
