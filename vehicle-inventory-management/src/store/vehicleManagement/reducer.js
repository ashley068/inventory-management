import { faker } from "@faker-js/faker";
//faker data generate
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

const initialState = {
  items: vehicleData,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_VEHICLE":
      const foundVehicles = vehicleData.filter(
        (item) => item.manufacturer === action.payload
      );
      return {
        ...state,
        items: foundVehicles,
      };

    case "DELETE_VEHICLE":
      const updateVehicleItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        items: [...updateVehicleItems],
      };

    case "UPDATE_VEHICLE":
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(itemIndex);
      const copyItems = [...state.items];
      copyItems[itemIndex] = action.payload;
      return {
        ...state,
        items: copyItems,
      };

    default:
      return state;
  }
};

export default reducer;
