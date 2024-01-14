import React, { useState } from "react";

const CurrencyInput = () => {
  const [value, setValue] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const regex = /^\d*\,?\d{0,2}$/;

    if (regex.test(inputValue) || inputValue === "") {
      setValue(inputValue);
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleInputChange}
      placeholder="€"
    />
  );
};

export default CurrencyInput;
