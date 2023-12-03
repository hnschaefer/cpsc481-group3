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

export const updateNote = (item) => {
  return {
    type: "overwritenote",
    payload: item,
  };
};