import React, { useState } from "react";
import TableRow from "./components/TableRow";

function App() {
  const [options, setOptions] = useState(["Electronics", "Furniture", "Clothing", "Toys", "Books"]);
  const [rows, setRows] = useState([{ id: 1, singleSelect: "", multiSelect: [] }]);
  const [newOption, setNewOption] = useState("");

  const addNewRow = () => {
    setRows([...rows, { id: rows.length + 1, singleSelect: "", multiSelect: [] }]);
  };

  const addNewOption = () => {
    if (newOption.trim() && !options.includes(newOption)) {
      setOptions([...options, newOption]);
      setNewOption("");
    }
  };

  const handleRowUpdate = (rowId, field, value) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === rowId ? { ...row, [field]: value } : row
      )
    );
  };

  const selectedSingleValues = rows.map((row) => row.singleSelect).filter(Boolean);

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-100 via-white to-indigo-100 py-10 px-5 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg p-6 relative">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Task Management Table
        </h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-4 text-left font-medium text-gray-600">Assign Leader</th>
              <th className="border p-4 text-left font-medium text-gray-600">Assign Members</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                row={row}
                options={options}
                selectedSingleValues={selectedSingleValues}
                onRowUpdate={handleRowUpdate}
                setOptions={setOptions}
              />
            ))}
          </tbody>
        </table>

        {/* Action Bar */}
        <div className="flex items-center justify-between mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Add new option"
              value={newOption}
              onChange={(e) => setNewOption(e.target.value)}
              className="w-64 p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <button
              onClick={addNewOption}
              className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
            >
              Add Option
            </button>
          </div>
          <button
            onClick={addNewRow}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Add New Row
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
