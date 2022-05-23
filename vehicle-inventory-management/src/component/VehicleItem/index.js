import React, { useState } from "react";
import { connect } from "react-redux";
import { vehicleManangeActions } from "../../store/vehicleManagement/actions";

const mapDispatchToProps = {
  deleteItem: vehicleManangeActions.deleteItem,
  updateItem: vehicleManangeActions.updateItem,
};

const VehicleItem = ({
  order,
  id,
  manufacturer,
  type,
  fuel,
  color,
  deleteItem,
  updateItem,
}) => {
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [mode, setMode] = useState("Edit");
  const [vehicleItem, setVehicleItem] = useState({
    id,
    manufacturer,
    type,
    fuel,
    color,
  });

  const handleDelete = () => {
    deleteItem(id);
  };

  const handleEditSaveMode = () => {
    //enum
    if (mode === "Edit") {
      setMode("Save");
      setIsReadOnly(false);
    } else {
      setMode("Edit");
      setIsReadOnly(true);
      handleSaveClicked();
    }
  };

  const handleSaveClicked = () => {
    updateItem(vehicleItem);
  };
  return (
    <tr>
      <td>{order}</td>
      <td>
        <input
          type="text"
          defaultValue={manufacturer}
          onChange={(e) =>
            setVehicleItem((prev) => ({
              ...prev,
              manufacturer: e.target.value,
            }))
          }
          readOnly={isReadOnly}
        />
      </td>
      <td>
        <input
          type="text"
          defaultValue={type}
          onChange={(e) =>
            setVehicleItem((prev) => ({
              ...prev,
              type: e.target.value,
            }))
          }
          readOnly={isReadOnly}
        />
      </td>
      <td>
        <input
          type="text"
          defaultValue={fuel}
          onChange={(e) =>
            setVehicleItem((prev) => ({
              ...prev,
              fuel: e.target.value,
            }))
          }
          readOnly={isReadOnly}
        />
      </td>
      <td>
        <input
          type="text"
          defaultValue={color}
          onChange={(e) =>
            setVehicleItem((prev) => ({
              ...prev,
              color: e.target.value,
            }))
          }
          readOnly={isReadOnly}
        />
      </td>
      <td>
        <button onClick={handleEditSaveMode}>
          {isReadOnly ? "Edit" : "Save"}
        </button>
      </td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default connect(null, mapDispatchToProps)(VehicleItem);
