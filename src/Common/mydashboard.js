import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const MyDashboard = () => {
  const customerChartRef = useRef(null);
  const salesChartRef = useRef(null);

  useEffect(() => {
    // Updated Customer Count data
    const updatedCustomerData = {
      labels: ['New', 'Returning', 'Guest'],
      datasets: [
        {
          label: 'Customer Count',
          data: [50, 40, 30], // Updated values for customers
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          borderWidth: 1,
        },
      ],
    };

    // Updated Sales data
    const updatedSalesData = {
      labels: ['Shirt', 'Hoodies', 'Pants'], // Corrected label for Hoodies
      datasets: [
        {
          label: 'Sales',
          data: [50, 25, 40], // Updated values for sales
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          borderWidth: 1,
        },
      ],
    };

    // Customer Count chart configuration
    const customerConfig = {
      type: 'pie',
      data: updatedCustomerData,
      options: {
        aspectRatio: 1,
      },
    };

    // Sales chart configuration
    const salesConfig = {
      type: 'pie',
      data: updatedSalesData,
      options: {
        aspectRatio: 1,
      },
    };

    if (customerChartRef && customerChartRef.current) {
      new Chart(customerChartRef.current, customerConfig);
    }

    if (salesChartRef && salesChartRef.current) {
      new Chart(salesChartRef.current, salesConfig);
    }
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl text-center mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-xl mb-2">Customer Count</h2>
          <canvas ref={customerChartRef} width={300} height={300}></canvas>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-xl mb-2">Sales</h2>
          <canvas ref={salesChartRef} width={300} height={300}></canvas>
        </div>
      </div>
    </div>
  );
};

export default MyDashboard;
