import React from "react";
import DropdownSingleSelect from "./DropdownSingleSelect";
import DropdownMultiSelect from "./DropdownMultiSelect";

function TableRow({ row, options, selectedSingleValues, onRowUpdate }) {
  const handleSingleSelectChange = (value) => {
    onRowUpdate(row.id, "singleSelect", value);
  };

  const handleMultiSelectChange = (value) => {
    onRowUpdate(row.id, "multiSelect", value);
  };

  return (
    <tr className="border-b">
      <td className="p-4">
        <DropdownSingleSelect
          value={row.singleSelect}
          options={options}
          selectedValues={selectedSingleValues}
          onChange={handleSingleSelectChange}
        />
      </td>
      <td className="p-4">
        <DropdownMultiSelect
          value={row.multiSelect}
          options={options.filter((opt) => !row.multiSelect.includes(opt))}
          onChange={handleMultiSelectChange}
        />
      </td>
    </tr>
  );
}

export default TableRow;
