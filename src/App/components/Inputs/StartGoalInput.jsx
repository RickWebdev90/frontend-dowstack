const StartInput = ({ balance, setBalance }) => {
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const regex = /^\d*\,?\d{0,2}$/;
    if (regex.test(inputValue) || inputValue === "") {
      setBalance(inputValue);
      console.log("GOAL START BALANCE 🚀", inputValue, balance);
    }
  };

  return (
    <>
      <label>Bereits gespart</label>
      <input
        type="text"
        value={balance}
        onChange={handleInputChange}
        placeholder="€"
      />
    </>
  );
};

export default StartInput;
