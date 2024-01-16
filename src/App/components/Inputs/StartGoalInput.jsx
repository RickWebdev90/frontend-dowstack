const StartInput = ({ start, setStart }) => {
    const handleInputChange = (event) => {
      const inputValue = event.target.value;
      const regex = /^\d*\,?\d{0,2}$/;
      if (regex.test(inputValue) || inputValue === "") {
        setStart(inputValue);
      }
    };
  
    return (
      <>
        <label>Bereits gespart</label>
        <input
          type="text"
          value={start}
          onChange={handleInputChange}
          placeholder="€"
        />
      </>
    );
  };
  
  export default StartInput;