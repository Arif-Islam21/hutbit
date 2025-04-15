import React from "react";

const Transections = () => {
  const tableData = [
    {
      date: "2023-10-01",
      amount: "$100",
      status: "Completed",
    },
    {
      date: "2023-10-02",
      amount: "$200",
      status: "Pending",
    },
    {
      date: "2023-10-03",
      amount: "$300",
      status: "Failed",
    },
  ];
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table px-6">
          {/* head */}
          <thead>
            <tr className="text-white text-center">
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {tableData.map((data, index) => (
              <tr key={index} className="text-white">
                <td>{data.date}</td>
                <td>{data.amount}</td>
                <td
                  className={`${
                    data.status === "Completed"
                      ? "text-green-500"
                      : data.status === "Pending"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {data.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transections;
