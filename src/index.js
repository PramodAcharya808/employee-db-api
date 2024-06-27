import express from "express";
import bodyParser from "body-parser";
import dbconnect from "./db/database.js";
import emplpyeeRouter from "./routes/employee.routes.js";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

// Sever conenction based on database connection
dbconnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Express Server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ DB Connection Failed");
  });

// Welcome route

const apiVersion = "/api/v1";

app.use(`${apiVersion}/employee`, emplpyeeRouter);
