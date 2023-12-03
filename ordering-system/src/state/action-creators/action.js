export const addToCart = (item) => {
  return {
    type: "add",
    payload: item,
  };
};

export const lowerCart = (item) => {
  return {
    type: "lower",
    payload: item,
  };
};


export const higherCart = (item) => {
  return {
    type: "higher",
    payload: item,
  };
};