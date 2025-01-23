import React from "react";

function DropdownSingleSelect({ value, options, selectedValues, onChange }) {
  const filteredOptions = options.filter((option) => !selectedValues.includes(option) || option === value);

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-3 border rounded-lg bg-white"
    >
      <option value="" disabled>Select Task Leader</option>
      {filteredOptions.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default DropdownSingleSelect;
