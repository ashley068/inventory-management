import { connect } from "react-redux";
import { vehicleManangeActions } from "./store/vehicleManagement/actions";
import SearchBar from "./component/SearchBar";
import VehicleItem from "./component/VehicleItem";
import "./App.css";

const mapStateToProps = (state) => ({ vehicleItems: state.vehicle.items });
const mapDispatchToProps = { deleteItem: vehicleManangeActions.deleteItem };
const App = ({ vehicleItems, deleteItem }) => {
  // console.log(vehicleItems);
  return (
    <div className="App">
      <div>
        <h2>Inventory</h2>
        <h4>Found Vehicles</h4>
        <SearchBar />
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Vehicle</th>
            <th>Type</th>
            <th>Fuel</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {vehicleItems.map((item, index) => {
            return (
              <VehicleItem
                key={item.id}
                order={index}
                id={item.id}
                name={item.name}
                type={item.type}
                fuel={item.fuel}
                color={item.color}
                deleteItem={deleteItem}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
