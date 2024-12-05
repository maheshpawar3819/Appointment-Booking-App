import React, { useState } from "react";
import axios from "axios";

const CancelAppointment = () => {
  const [phone, setPhone] = useState("");

  const handleChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080  /cancel-appointment",
        { phone }
      );
      alert(response.data.message);
    } catch (error) {
      alert("Error canceling appointment!");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Cancel Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={phone}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <button
          type="submit"
          className="w-full py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Cancel Appointment
        </button>
      </form>
    </div>
  );
};

export default CancelAppointment;
