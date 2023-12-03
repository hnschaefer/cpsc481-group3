const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      const newItem = action.payload;
      console.log(newItem);
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.name === newItem.name
      );

      if (existingItemIndex !== -1) {
        state.cartItems[existingItemIndex].quantity += newItem.quantity;
      } else {
        state.cartItems.push({
          name: newItem.name,
          quantity: newItem.quantity,
          price: newItem.itemPrice,
          note: newItem.note,
          image: newItem.image,
        });
      }

      return {
        ...state,
      };

    case "remove":

    default:
      return state;
  }
};

export default cartReducer;
