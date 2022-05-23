import { faker } from "@faker-js/faker";

const vehicle = faker.vehicle;
const vehicleData = [];
const creatVehicle = (id, manufacturer, type, fuel, color) => {
  return {
    id,
    manufacturer,
    type,
    fuel,
    color,
  };
};
for (let i = 0; i < 100; i++) {
  let vehicleObj = creatVehicle(
    new Date().getTime() + i,
    vehicle.manufacturer(),
    vehicle.type(),
    vehicle.fuel(),
    vehicle.color()
  );
  vehicleData.push(vehicleObj);
}

const createAction = (type, payload) => {
  return {
    type,
    payload,
  };
};

export const vehicleManangeActions = {
  searchVehicle: (text) => {
    return createAction("SEARCH_VEHICLE", text);
  },

  deleteItem: (id) => {
    return createAction("DELETE_VEHICLE", { id });
  },

  updateItem: ({ id, name, type, fuel, color }) => {
    return createAction("UPDATE_VEHICLE", {
      id,
      name,
      type,
      fuel,
      color,
    });
  },
};
