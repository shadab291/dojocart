import React from 'react';
import { useSelector } from 'react-redux';
import { selectTotalValue } from '../Store/cartSlice'; // Import the selector

const Checkout = () => {
  const totalValue = useSelector(selectTotalValue); // Use the selector to get the total value

  return (
    <div className="font-sans antialiased bg-blue-100 p-5">
      <h3 className="py-5 text-3xl font-semibold text-center">Payment Page</h3>
      <div className="flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h4 className="text-xl mb-4">Total Amount to Pay: ${totalValue}</h4>
          <p className="text-gray-600">
            Please proceed with the payment process using your preferred method.
          </p>
          {/* Your payment form or payment gateway integration goes here */}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
    