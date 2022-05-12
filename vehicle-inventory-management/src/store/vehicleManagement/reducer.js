const initialState = {
  items: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_VEHICLE":
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case "DELETE_VEHICLE":
      const updateVehicleItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        items: [...updateVehicleItems],
      };

    default:
      return state;
  }
};

export default reducer;
