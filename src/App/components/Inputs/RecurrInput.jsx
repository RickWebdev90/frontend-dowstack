const RecurrInput = ({ recurr, setRecurr }) => {
  return (
    <>
      <label>Wiederkehrend?</label>
      <input
        type="radio"
        value={recurr}
        onChange={(e) => {
          setRecurr(e.target.value);
        }}
      />
      {/* <select value={recurr} onChange={(e) => setre(e.target.value)}>
        <option value="Expense">Ausgabe</option>
        <option value="Income">Einnahme</option>
      </select> */}
    </>
  );
};

export default RecurrInput;
