import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
const AllSchedule = () => {
  const initialData = useLoaderData();
  const [gyms, setGyms] = useState(initialData);
  console.log(gyms);
  const handelScheduleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/schedule/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your schedule has been deleted.",
                icon: "success",
              });
              const remaining = gyms.filter((gym) => gym._id !== id);
              setGyms(remaining);
            }
          });
      }
    });
  };
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
                  <button
                    className="btn btn-sm btn-ghost hover:btn-info"
                    aria-label="Edit schedule"
                  >
                    <FaRegEdit size={18} />
                  </button>
                  <button
                    onClick={() => handelScheduleDelete(gym._id)}
                    className="btn btn-sm btn-ghost hover:btn-error"
                    aria-label="Delete schedule"
                  >
                    <MdDelete size={18} />
                  </button>
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
