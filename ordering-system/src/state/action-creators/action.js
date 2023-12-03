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

export const removeCart = (item) => {
  return {
    type: "remove",
    payload: item,
  };
};

export const addProtein = (item) => {
  return {
    type: "proteinAdd",
    payload: item,
  };
};

export const upstat = (item) => {
  return {
    type: "statupdate",
    payload: item,
  };
};
