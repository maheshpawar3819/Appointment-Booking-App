const express = require("express");
const router = express.Router();
const {
  createOrUpdateAppointment,
  modifyAppointment,
  cancelAppointment,
  getAllAppointments
} = require("../controllers/appointment-controller");

//Routes for managing appointments
router.post("/submit-booking",createOrUpdateAppointment);
router.post("/modify-appointment",modifyAppointment);
router.post("/cancel-appointment",cancelAppointment);
router.get('/appointments', getAllAppointments);

module.exports=router;
