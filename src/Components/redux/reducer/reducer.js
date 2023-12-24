const cartState = [];

const userState = {
  email: "",
  token: "",
};
export const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];

    default:
      return state;
  }
};

export const userReducer = (state = userState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return action.payload;

    default:
      return state;
  }
};
