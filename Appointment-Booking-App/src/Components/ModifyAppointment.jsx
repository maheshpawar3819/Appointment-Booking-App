import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ModifyAppointment = () => {
  const [formData, setFormData] = useState({
    email:"",
    phone: "",
    service: "",
    time: "",
    date: "",
    notes: "",
  });

  const navigate=useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/modify-appointment",
        formData
      );
      alert(response?.data?.message);
      navigate("/");
    } catch (error) {
      alert("Error modifying appointment!");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Modify Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <input
          type="text"
          name="service"
          placeholder="New Service"
          value={formData.service}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input
          type="datetime-local"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <textarea
          name="notes"
          placeholder="New Notes"
          value={formData.notes}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
        >
          Modify Appointment
        </button>
      </form>
    </div>
  );
};

export default ModifyAppointment;
