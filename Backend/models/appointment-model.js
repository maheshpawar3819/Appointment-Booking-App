const fs = require("fs/promises");
const path = require("path");
const FILE_PATH = path.join(__dirname, "appintments.txt");

//Load appointments from file
const loadAppointments = async () => {
  try {
    //read the file data
    const data = await fs.readFile(FILE_PATH, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }
    throw error;
  }
};

//Save Appointments in the file

const saveAppointments = async (appointments) => {
  try {
    await fs.writeFile(FILE_PATH, JSON.stringify(appointments, null, 2));
  } catch (error) {
    throw new Error("Faild To Save Appointments");
  }
};

module.exports = { loadAppointments, saveAppointments };
