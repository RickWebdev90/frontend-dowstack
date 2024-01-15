const TypeInput = ({ type, setType }) => {
  return (
    <div className="input-wrapper">
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Expense">Ausgabe</option>
        <option value="Income">Einnahme</option>
      </select>
    </div>
  );
};

export default TypeInput;
