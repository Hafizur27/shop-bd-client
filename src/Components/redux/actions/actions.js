export const addTOCart = (data) => {
  return {
    type: "ADD_TO_CART",
    payload: data,
  };
};

export const addUser = (user) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};
