import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders, STATUSES } from '../Store/ordersSlice'; // Import fetchOrders and STATUSES from ordersSlice

const Orders = () => {
  const dispatch = useDispatch();
  const { orders, status } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  if (status === STATUSES.LOADING) {
    return <h3>Loading orders...</h3>;
  }

  if (status === STATUSES.ERROR) {
    return <h3>Error fetching orders.</h3>;
  }

  return (
    <div>
      <h1>Orders</h1>
      {/* Display orders here */}
      <ul>
        {orders.map((order, index) => (
          <li key={index}>{/* Render order details */}</li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
