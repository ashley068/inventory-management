import { SEARCH_VEHICLE, DELETE_VEHICLE, UPDATE_VEHICLE } from "./constants";
const createAction = (type, payload) => {
  return {
    type,
    payload,
  };
};

export const vehicleManangeActions = {
  searchVehicle: (text) => {
    return createAction(SEARCH_VEHICLE, text);
  },

  deleteItem: (id) => {
    return createAction(DELETE_VEHICLE, { id });
  },

  updateItem: ({ id, name, type, fuel, color }) => {
    return createAction(UPDATE_VEHICLE, {
      id,
      name,
      type,
      fuel,
      color,
    });
  },
};
