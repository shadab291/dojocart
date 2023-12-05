import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const Sales = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const salesData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Sales',
          data: [50, 60, 70, 65, 75, 80],
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    };

    const chartConfig = {
      type: 'bar',
      data: salesData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    if (chartRef && chartRef.current) {
      const myChart = new Chart(chartRef.current, chartConfig);
      return () => {
        myChart.destroy();
      };
    }
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl text-center mb-6">Sales Overview</h1>
      <div className="flex justify-center mb-6">
        <canvas ref={chartRef} width={600} height={300}></canvas>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-xl mb-2">Total Sales</h2>
          <p>$5000</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-xl mb-2">Number of Customers</h2>
          <p>100</p>
        </div>
        {/* Add more stats here */}
      </div>
    </div>
  );
};

export default Sales;
