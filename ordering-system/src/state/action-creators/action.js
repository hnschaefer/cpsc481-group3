export const addToCart = (item) => {
  return {
    type: "add",
    payload: item,
  };
};
