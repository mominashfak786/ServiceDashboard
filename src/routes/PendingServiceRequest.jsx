import React from 'react';

const PendingServiceRequest = () => {
  const data = [
    {
      clientName: 'John Doe',
      location: 'New York',
      contact: 'john@example.com',
      details: 'Lorem ipsum dolor sit amet.',
      problem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '2023-06-15',
      time: '10:00 AM',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    //  we can ADd more if we want
  ];

  return (
    <div className=" mx-auto">
      <table className="w-full border-collapse border mt-6 border-gray-300">
        <thead>
          <tr>
            <th className="border text-white border-gray-300 bg-gray-900 py-2 px-4">Client Name</th>
            <th className="border text-white border-gray-300 bg-gray-900 py-2 px-4">Location</th>
            <th className="border text-white border-gray-300 bg-gray-900 py-2 px-4">Contact</th>
            <th className="border text-white border-gray-300 bg-gray-900 py-2 px-4">Details</th>
            <th className="border text-white border-gray-300 bg-gray-900 py-2 px-4">Problem</th>
            <th className="border text-white border-gray-300 bg-gray-900 py-2 px-4">Date</th>
            <th className="border text-white border-gray-300 bg-gray-900 py-2 px-4">Time</th>
            <th className="border text-white border-gray-300 bg-gray-900 py-2 px-4">Message</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 py-2 px-4">{item.clientName}</td>
              <td className="border border-gray-300 py-2 px-4">{item.location}</td>
              <td className="border border-gray-300 py-2 px-4">{item.contact}</td>
              <td className="border border-gray-300 py-2 px-4">{item.details}</td>
              <td className="border border-gray-300 py-2 px-4">{item.problem}</td>
              <td className="border border-gray-300 py-2 px-4">{item.date}</td>
              <td className="border border-gray-300 py-2 px-4">{item.time}</td>
              <td className="border border-gray-300 py-2 px-4">{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingServiceRequest;
