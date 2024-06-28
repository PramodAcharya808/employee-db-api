import { Router } from "express";

import Employee from "../Models/employee.model.js";

const emplpyeeRouter = Router();

emplpyeeRouter.get("/", (req, res) => {
  res.send(
    "<h1>POST : /create</h1><br/><h1>GET : /showall</h1><br/><h1>GET : /:id</h1><br/><h1>DELETE : /:id</h1><br/><h1>PUT : /:id</h1>"
  );
});

emplpyeeRouter.post("/create", async (req, res) => {
  // const { name, email, password } = req.body;
  const employeeObject = await Employee.create(req.body);

  const employeeCreated = await Employee.findById(employeeObject._id);
  if (!employeeCreated) {
    res.status(400).json({ message: "Employee not created " });
  } else {
    res.status(201).json(employeeObject);
  }
});

emplpyeeRouter.get("/showall", async (req, res) => {
  const employeObject = await Employee.find();
  res.status(200).json(employeObject);
});

emplpyeeRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const employee = await Employee.findById(id);
  if (!employee) {
    res.status(404).json({ message: "Employee not found" });
  } else {
    res.status(200).json(employee);
  }
});

emplpyeeRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const employee = await Employee.findByIdAndDelete(id);
  if (!employee) {
    res.status(404).json({ message: "Employee not found" });
  } else {
    res.status(200).json({ employee: "Employee deleted successfully" });
  }
});

emplpyeeRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const employeUpdatedDetails = req.body;
  const employee = await Employee.findByIdAndUpdate(
    id,
    employeUpdatedDetails
  ).select("-password");
  if (!employee) {
    res.status(404).json({ message: "Employee not found" });
  } else {
    res.status(200).json({
      message: "Employee detailes updated successfully",
      employee: employee,
    });
  }
});

export default emplpyeeRouter;
