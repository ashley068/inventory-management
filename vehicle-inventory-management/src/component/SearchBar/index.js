import React, { useState } from "react";
import { connect } from "react-redux";
import { vehicleManangeActions } from "../../store/vehicleManagement/actions";
// import { faker } from "@faker-js/faker";

const mapDispatchToProps = {
  searchVehicle: vehicleManangeActions.searchVehicle,
};
const SearchBar = ({ searchVehicle }) => {
  const [text, setText] = useState("");

  const handleSearch = () => {
    const textTrimmed = text.trim();
    if (textTrimmed.length === 0) return;
    searchVehicle(textTrimmed);
    setText("");
  };
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)}></input>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(SearchBar);
