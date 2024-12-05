require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const appointmentRoutes = require("./routes/appointment-routes");

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use("/", appointmentRoutes);

//Error handling for undefined routes show 404 error
app.use((req, res) => {
  res.status(404).json({ error: "Route not Found!!" });
});

//Server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is listning on port`, port);
});
