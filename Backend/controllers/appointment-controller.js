const {
  loadAppointments,
  saveAppointments,
} = require("../models/appointment-model");

//Controller function for Create or Update appointment
const createOrUpdateAppointment = async (req, res) => {
  try {
    const { name, email, phone, service, time, date, notes } = req.body;

    if (!name || !email || !phone || !service || !time || !date) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    const appointments = await loadAppointments();

    const existingAppointments = appointments.find(
      (appt) => appt.phone === phone
    );

    if (existingAppointments) {
      //Update existing appointment
      existingAppointments.email = email;
      existingAppointments.service = service;
      existingAppointments.time = time;
      existingAppointments.date = date;
      existingAppointments.notes = notes;
    } else {
      //Create new appointment
      appointments.push({ name, email, phone, service, time, date, notes });
    }

    //save appointment
    await saveAppointments(appointments);

    //Send response
    res
      .status(200)
      .json({ message: "Appointment booked or updated successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while saving the appointment!" });
  }
};

//Controller funtion for modifying from existing appointment
const modifyAppointment = async (req, res) => {
  try {
    const { email, phone, service, time, date, notes } = req.body;

    console.log(email, phone, service, time, date, notes )
    const appointments = await loadAppointments();
    const appointment = appointments.find((appt) => appt.phone === phone);

    if (appointment) {
      appointment.email = email;
      appointment.service = service;
      appointment.time = time;
      appointment.date = date;
      appointment.notes = notes;
    }

    await saveAppointments(appointments);

    //sending response
    res.status(200).json({ message: "Appointment modified successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while modifying the appointment!" });
  }
};

//Controller function for cancel appointment
const cancelAppointment = async (req, res) => {
  try {
    const { phone } = req.body;

    const appointments = await loadAppointments();
    const index = appointments.findIndex((appt) => appt.phone === phone);

    if (index !== -1) {
      appointments.splice(index, 1); //it will removes appointment
      //after cancell appointment save file
      await saveAppointments(appointments);
      //sending response
      res.status(200).json({ message: "Appointment canceled successfully!" });
    } else {
      res.status(404).json({ error: "Appointment not found!" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while canceling the appointment!" });
  }
};

// Controller function to get all appointments
const getAllAppointments = async (req, res) => {
  try {
    // Load appointments from the file
    const appointments = await loadAppointments();

    // Return the appointments data
    res.status(200).json(appointments);
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the appointments!" });
  }
};

module.exports = {
  createOrUpdateAppointment,
  modifyAppointment,
  cancelAppointment,
  getAllAppointments,
};
