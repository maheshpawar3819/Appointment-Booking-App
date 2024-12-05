import React, { useEffect, useState } from "react";
import axios from "axios";

const AppointmentsList = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get("http://localhost:8080/appointments");
        setAppointments(response.data);
      } catch (error) {
        setError("Failed to fetch appointments.");
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">All Appointments</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <ul className="space-y-4">
        {appointments.length > 0 ? (
          appointments.map((appointment, index) => (
            <li
              key={index}
              className="p-4 border border-gray-300 rounded-md shadow-sm"
            >
              <h3 className="font-semibold">{appointment.name}</h3>
              <p>{appointment.phone}</p>
              <p>{appointment.service}</p>
              <p>{appointment.time}</p>
              <p>{appointment.date}</p>
              <p>{appointment.notes}</p>
            </li>
          ))
        ) : (
          <p>No appointments found.</p>
        )}
      </ul>
    </div>
  );
};

export default AppointmentsList;
