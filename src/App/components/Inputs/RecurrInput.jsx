const RecurrInput = ({ recurr, setRecurr }) => {
  return (
    <>
      <label>Wiederkehrend?</label>
      <input
        type="checkbox"
        checked={recurr}
        onChange={() => setRecurr(!recurr)}
      />
    </>
  );
};

export default RecurrInput;
