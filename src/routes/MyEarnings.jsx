import React from 'react';

const EarningsTable = () => {
  const data = [
    {
      serviceId: 'S1234',
      dateOfTask: '2023-06-12',
      myEarning: '$50.00'
    },
    {
      serviceId: 'S5678',
      dateOfTask: '2023-06-13',
      myEarning: '$75.00'
    },
    // Add more data objects as needed
  ];

  return (
    <div className=" mx-auto">
      <h2 className="text-center text-2xl font-bold mb-4">My Earnings Table</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border text-white border-gray-300 bg-gray-900 py-2 px-4">Service ID</th>
            <th className="border text-white border-gray-300 bg-gray-900 py-2 px-4">Date of Task</th>
            <th className="border text-white border-gray-300 bg-gray-900 py-2 px-4">My Earning</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 py-2 px-4">{item.serviceId}</td>
              <td className="border border-gray-300 py-2 px-4">{item.dateOfTask}</td>
              <td className="border border-gray-300 py-2 px-4">{item.myEarning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EarningsTable;
