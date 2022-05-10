import { combineReducers } from "redux";
import vehicleReducer from "./vehicleManagement/reducer";
const reducers = {
  vehicleManagement: vehicleReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
