const initialState = {
  cartItems: [],
  totalCost: 0,
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
        if (state.cartItems[existingItemIndex].status === "Ordered") {
          console.log(state.cartItems);
          state.cartItems.push({
            name: newItem.name,
            quantity: newItem.quantity,
            price: newItem.itemPrice,
            note: newItem.note,
            image: newItem.image,
            extraProtein: newItem.extraProtein,
            status: "Incomplete",
          });
        } else {
          console.log(state.cartItems);
          state.cartItems.push({
            name: newItem.name,
            quantity: newItem.quantity,
            price: newItem.itemPrice,
            note: newItem.note,
            image: newItem.image,
            extraProtein: newItem.extraProtein,
            status: "Incomplete",
          });
        }
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
        (item) =>
          item.name === updateItem.name &&
          item.status === "Incomplete" &&
          item.image === updateItem.image &&
          item.extraProtein === updateItem.extraProtein &&
          item.note === updateItem.note &&
          item.price === updateItem.price &&
          item.quantity === updateItem.quantity
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
      console.log(higherItem);
      const itemIndexToUpdateHigher = state.cartItems.findIndex(
        (item) =>
          item.name === higherItem.name &&
          item.status === "Incomplete" &&
          item.image === higherItem.image &&
          item.extraProtein === higherItem.extraProtein &&
          item.note === higherItem.note &&
          item.price === higherItem.price &&
          item.quantity === higherItem.quantity
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
        (item) => item.name === newNote.name && item.status === "Incomplete"
      );
      state.cartItems[noteIndex].note = newNote.note;
      return {
        ...state,
      };
    case "remove":
      const removalItem = action.payload;
      const removalIndex = state.cartItems.findIndex(
        (item) => item.name === removalItem && item.status === "Incomplete"
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
      let total = 0;
      state.cartItems.forEach((item) => {
        const itemPrice = parseFloat(item.price);
        const itemQuantity = parseFloat(item.quantity);
        total += itemPrice * itemQuantity;
      });
      let temp = total.toFixed(2);
      return {
        ...state,
        cartItems: statup,
        totalCost: temp,
      };

    default:
      return state;
  }
};

export default cartReducer;
