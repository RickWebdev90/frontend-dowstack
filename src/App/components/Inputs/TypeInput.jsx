const TypeInput = ({ type, setType }) => {
  return (
    <>
      <label>Art der Buchung</label>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Expense">Ausgabe</option>
        <option value="Income">Einnahme</option>
      </select>
    </>
  );
};

export default TypeInput;
