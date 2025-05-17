import React, { useState } from "react";

const AddSchedule = () => {
  const [selectedDay, setSelectedDay] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="py-12">
      <fieldset className="flex flex-col max-w-6xl mx-auto py-12 fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <legend className="px-2 text-lg font-semibold">Add New Schedule</legend>
        <div className="flex flex-col md:flex-row gap-4 mx-auto w-full">
          <div className="space-y-3 w-full">
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Name"
            />
            <input
              type="date"
              className="input input-bordered w-full"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="space-y-3 w-full">
            <input
              type="time"
              className="input input-bordered w-full"
              placeholder="Start Time"
            />
            <select 
              className="select select-bordered w-full" 
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
            >
              <option disabled value="">Select day</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </div>
        </div>
        <button className="btn btn-neutral mt-6 w-full md:w-auto md:self-end">
          Add Schedule
        </button>
      </fieldset>
    </div>
  );
};

export default AddSchedule;