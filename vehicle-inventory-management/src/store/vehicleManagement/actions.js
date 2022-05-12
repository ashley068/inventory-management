import { faker } from "@faker-js/faker";
const vehicle = faker.vehicle;

const createAction = (type, payload) => {
  return {
    type,
    payload,
  };
};

export const vehicleManangeActions = {
  searchVehicle: (text) => {
    console.log(vehicle.manufacturer());
    return createAction("SEARCH_VEHICLE", {
      id: new Date().getTime(),
      name: text,
      type: vehicle.type(),
      fuel: vehicle.fuel(),
      color: vehicle.color(),
    });
  },

  deleteItem: (id) => {
    return createAction("DELETE_VEHICLE", { id });
  },
};
