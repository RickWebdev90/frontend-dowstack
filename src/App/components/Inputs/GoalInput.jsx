const GoalInput = ({ goal, setGoal }) => {
    const handleInputChange = (event) => {
      const inputValue = event.target.value;
      const regex = /^\d*\,?\d{0,2}$/;
      if (regex.test(inputValue) || inputValue === "") {
        setGoal(inputValue);
      }
    };
  
    return (
      <>
        <label>Kosten</label>
        <input
          type="text"
          value={goal}
          onChange={handleInputChange}
          placeholder="€"
        />
      </>
    );
  };
  
  export default GoalInput;