const CurrencyInput = ({ amount, setAmount }) => {
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const regex = /^\d*\,?\d{0,2}$/;
    if (regex.test(inputValue) || inputValue === "") {
      setAmount(inputValue);
    }
  };

  return (
    <>
      <label>Betrag</label>
      <input
        type="text"
        value={amount}
        onChange={handleInputChange}
        placeholder="€"
      />
    </>
  );
};

export default CurrencyInput;
