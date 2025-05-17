import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
const AllSchedule = () => {
  const initialData = useLoaderData();
  const [gyms, setGyms] = useState(initialData);

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        {/* Table Header */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Day</th>
            <th>Actions</th>
          </tr>
        </thead>
        
        {/* Table Body */}
        <tbody>
          {gyms.map((gym, index) => (
            <tr key={gym._id}>
              <td>{index + 1}</td>
              <td>{gym.name}</td>
              <td>{gym.date}</td>
              <td>{gym.time}</td>
              <td>{gym.day}</td>
              <td>
                <div className="join space-x-2">
                  <button className="btn btn-sm"><FaRegEdit size={20} /></button>
                  <button className="btn btn-sm btn-error"><MdDelete size={20} /></button>
                  <button className="btn btn-sm btn-primary">Update</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllSchedule;