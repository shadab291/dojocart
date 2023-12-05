import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    count:0,
    notifications: [],
  },
  reducers: {
    add(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
        state.notifications.push(`${newItem.title} added successfully to the cart.`);
        state.count=+1
      }
    },
    remove(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    increaseQuantity(state, action) {
      const { id } = action.payload;
      const itemToIncrease = state.items.find(item => item.id === id);
      if (itemToIncrease) {
        itemToIncrease.quantity += 1;
      }
    },
    decreaseQuantity(state, action) {
      const { id } = action.payload;
      const itemToDecrease = state.items.find(item => item.id === id);
      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;
      }
    },
  },
});

export const {
  add,
  remove,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

export const selectItemCount = state => state.cart.items.reduce((count, item) => count + item.quantity, 0);

export const selectNotificationCount = state => state.cart.notifications.length;
export const selectTotalValue = state => state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

