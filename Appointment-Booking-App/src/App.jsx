import { useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppointmentForm from "./Components/AppointmentForm";
import ModifyAppointment from "./Components/ModifyAppointment";
import Appointments from "./Components/Appointment";
import CancelAppointment from "./Components/CancelAppointment";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Appointments />} />
            <Route path="/book" element={<AppointmentForm />} />
            <Route path="/modify" element={<ModifyAppointment />} />
            <Route path="/cancel" element={<CancelAppointment />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
