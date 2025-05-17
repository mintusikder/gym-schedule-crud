import React, { useState } from "react";
import Swal from "sweetalert2";

const AddSchedule = () => {
  const [selectedDay, setSelectedDay] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};
    
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (!formData.day) newErrors.day = "Day is required";
    
    return newErrors;
  };

  const handelScheduleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const gymData = Object.fromEntries(formData.entries());
    
    // Validate form
    const validationErrors = validateForm(gymData);
    setErrors(validationErrors);
    
    // If there are errors, don't submit
    if (Object.keys(validationErrors).length > 0) {
      Swal.fire({
        title: "Please fill all required fields",
        icon: "error",
        draggable: true,
      });
      return;
    }

    console.log(gymData);
    fetch("http://localhost:3000/schedule", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(gymData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
          setSelectedDay("");
          setDate("");
          Swal.fire({
            title: "Schedule add success!",
            icon: "success",
            draggable: true,
          });
          console.log("add data", data);
        }
      });
  };

  return (
    <div className="py-12">
      <form
        onSubmit={handelScheduleSubmit}
        className="flex flex-col max-w-6xl mx-auto py-12 fieldset bg-base-200 border-base-300 rounded-box border p-4"
      >
        <legend className="px-2 text-lg font-semibold">Add New Schedule</legend>
        <div className="flex flex-col md:flex-row gap-4 mx-auto w-full">
          <div className="space-y-3 w-full">
            <div>
              <input
                type="text"
                name="name"
                className={`input input-bordered w-full ${errors.name ? "input-error" : ""}`}
                placeholder="Name"
              />
              {errors.name && <p className="text-error text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="date"
                name="date"
                className={`input input-bordered w-full ${errors.date ? "input-error" : ""}`}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              {errors.date && <p className="text-error text-sm mt-1">{errors.date}</p>}
            </div>
          </div>
          <div className="space-y-3 w-full">
            <div>
              <input
                type="time"
                name="time"
                className={`input input-bordered w-full ${errors.time ? "input-error" : ""}`}
                placeholder="Start Time"
              />
              {errors.time && <p className="text-error text-sm mt-1">{errors.time}</p>}
            </div>
            <div>
              <select
                className={`select select-bordered w-full ${errors.day ? "select-error" : ""}`}
                name="day"
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
              >
                <option disabled value="">
                  Select day
                </option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
              {errors.day && <p className="text-error text-sm mt-1">{errors.day}</p>}
            </div>
          </div>
        </div>
        <button className="btn btn-neutral mt-6 w-full md:w-auto md:self-end">
          Add Schedule
        </button>
      </form>
    </div>
  );
};

export default AddSchedule;