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

    case "lower":
      const updateItem = action.payload;
      const itemIndexToUpdate = state.cartItems.findIndex(
        (item) => item.name === updateItem
      );

      if (itemIndexToUpdate !== -1) {
        state.cartItems[itemIndexToUpdate].quantity =
          state.cartItems[itemIndexToUpdate].quantity > 1
            ? state.cartItems[itemIndexToUpdate].quantity - 1
            : 1;
      }
      console.log(state.cartItems[itemIndexToUpdate].quantity);
      return {
        ...state,
      };

    case "higher":
      const higherItem = action.payload;
      const itemIndexToUpdateHigher = state.cartItems.findIndex(
        (item) => item.name === higherItem
      );

      if (itemIndexToUpdateHigher !== -1) {
        state.cartItems[itemIndexToUpdateHigher].quantity =
          state.cartItems[itemIndexToUpdateHigher].quantity < 9
            ? state.cartItems[itemIndexToUpdateHigher].quantity + 1
            : 9;
      }
      console.log(state.cartItems[itemIndexToUpdateHigher].quantity);
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default cartReducer;
