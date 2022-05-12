import { combineReducers } from "redux";
import vehicleReducer from "./vehicleManagement/reducer";
const reducers = {
  vehicle: vehicleReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
