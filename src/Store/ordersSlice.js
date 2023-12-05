import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setOrders(state, action) {
      state.orders = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setOrders, setStatus } = ordersSlice.actions;
export default ordersSlice.reducer;

export function fetchOrders() {
  return async function fetchOrdersThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));

    try {
      // Fetch orders from an API or another source
      // const orders = await fetch('...'); // Example API call
      const orders = []; // Placeholder for fetched orders
      dispatch(setOrders(orders));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
      console.error('Error fetching orders:', error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
