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
        if (newItem.extraProtein !== "") {
          state.cartItems.push({
            name: newItem.name,
            quantity: newItem.quantity,
            price: newItem.itemPrice + 4,
            note: newItem.note,
            image: newItem.image,
            extraProtein: newItem.extraProtein,
            status: newItem.status,
          });
        } else {
          state.cartItems.push({
            name: newItem.name,
            quantity: newItem.quantity,
            price: newItem.itemPrice,
            note: newItem.note,
            image: newItem.image,
            extraProtein: newItem.extraProtein,
            status: newItem.status,
          });
        }
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
      console.log({ ...state });
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
      console.log({ ...state });
      return {
        ...state,
      };
    case "overwritenote":
      const newNote = action.payload;
      const noteIndex = state.cartItems.findIndex(
        (item) => item.name === newNote.name
      );
      state.cartItems[noteIndex].note = newNote.note;
      return {
        ...state,
      };
    case "remove":
      const removalItem = action.payload;
      const removalIndex = state.cartItems.findIndex(
        (item) => item.name === removalItem
      );
      if (removalIndex !== -1) {
        const updatedCartItems = [
          ...state.cartItems.slice(0, removalIndex),
          ...state.cartItems.slice(removalIndex + 1),
        ];
        console.log(updatedCartItems);
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      }
      return {
        ...state,
      };

    case "statupdate":
      const statup = state.cartItems.map((item) => ({
        ...item,
        status: "Ordered",
      }));
      return {
        ...state,
        cartItems: statup,
      };

    default:
      return state;
  }
};

export default cartReducer;
