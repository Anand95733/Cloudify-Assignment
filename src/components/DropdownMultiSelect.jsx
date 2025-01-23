import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

function DropdownMultiSelect({ value, options, onChange }) {
  const handleSelect = (selectedOption) => {
    if (!value.includes(selectedOption)) {
      onChange([...value, selectedOption]);
    }
  };

  const deleteOption = (optionToDelete) => {
    onChange(value.filter((item) => item !== optionToDelete));
  };

  return (
    <div className="relative">
      <div className="bg-white border rounded-lg shadow-lg p-3 max-h-52 overflow-y-auto">
        {value.map((option, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow-sm mb-2"
          >
            <span>{option}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteOption(option);
              }}
              className="text-red-600 hover:text-red-800"
            >
              <AiOutlineDelete size={20} />
            </button>
          </div>
        ))}

        {options.map((option, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-100 rounded-lg shadow-sm cursor-pointer mb-2 hover:bg-gray-200"
            onClick={() => handleSelect(option)}
          >
            <span>{option}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropdownMultiSelect;
