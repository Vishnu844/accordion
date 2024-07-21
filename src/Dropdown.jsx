import React, { useState } from "react";

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["option-1", "option-2", "option-3", "option-4"];
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <>
      <label htmlFor="dropdown">Select</label>
      <select id="dropdown" onChange={handleChange} value={selectedOption}>
        <option>Please Select</option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>

      {
        selectedOption && (
          <p>{selectedOption}</p>
        )
      }
    </>
  );
};

export default Dropdown;
