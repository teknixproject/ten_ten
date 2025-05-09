import React, { useState } from 'react';

interface TableData {
  name: string;
  age: number;
  address: string;
  phone: string;
}

const SampleTable: React.FC = () => {
  const [data] = useState<TableData[]>([
    { name: 'John Doe', age: 28, address: '123 Main St', phone: '555-1234' },
    { name: 'Jane Smith', age: 32, address: '456 Park Ave', phone: '555-5678' },
    { name: 'Emily Johnson', age: 24, address: '789 Broadway', phone: '555-9101' },
    { name: 'Michael Brown', age: 45, address: '101 Sunset Blvd', phone: '555-1213' },
    { name: 'Jessica Wilson', age: 37, address: '202 Pine St', phone: '555-1415' },
    { name: 'Christopher Miller', age: 29, address: '303 Maple Ave', phone: '555-1617' },
    { name: 'Amanda Davis', age: 31, address: '404 Oak St', phone: '555-1819' },
    { name: 'Ryan Garcia', age: 33, address: '505 Elm St', phone: '555-2021' },
    { name: 'Taylor Martinez', age: 26, address: '606 Cedar St', phone: '555-2223' },
    { name: 'Olivia Rodriguez', age: 35, address: '707 Pine St', phone: '555-2425' },
    { name: 'Ethan Hernandez', age: 27, address: '808 Oak St', phone: '555-2627' },
    { name: 'Ava Lopez', age: 30, address: '909 Elm St', phone: '555-2829' },
    { name: 'Liam Gonzalez', age: 34, address: '1010 Maple Ave', phone: '555-3031' },
    { name: 'Sofia Clark', age: 25, address: '1111 Pine St', phone: '555-3233' },
    { name: 'Jackson Lewis', age: 36, address: '1212 Oak St', phone: '555-3435' },
  ]);

  return (
    <div className="w-full">
      <div className="mb-4">
        <h1 className="text-2xl font-bold" style={{ color: '#D50B8B' }}>Table Hihihaha</h1>
      </div>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Age</th>
            <th className="px-4 py-2 text-left">Address</th>
            <th className="px-4 py-2 text-left">Phone</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map((row, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="px-4 py-2">{row.name}</td>
              <td className="px-4 py-2">{row.age}</td>
              <td className="px-4 py-2">{row.address}</td>
              <td className="px-4 py-2">{row.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SampleTable;