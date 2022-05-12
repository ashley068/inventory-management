import React, { useState } from "react";

const VehicleItem = ({ order, id, name, type, fuel, color, deleteItem }) => {
  const [isReadOnly, setIsReadOnly] = useState("true");
  const handleDelete = () => {
    deleteItem(id);
  };

  const handleEditMode = () => {};

  const handleInputChange = (id, e) => {
    e.preventDefault();
  };
  return (
    <tr>
      <td>{order}</td>
      <td>
        <input
          type="text"
          value={name}
          onChange={(e) => handleInputChange(id, e)}
        />
      </td>
      <td>
        <input type="text" value={type} readOnly />
      </td>
      <td>
        <input type="text" value={fuel} readOnly />
      </td>
      <td>
        <input type="text" value={color} readOnly />
      </td>
      <td>
        <button onClick={handleEditMode}>Edit</button>
      </td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default VehicleItem;
