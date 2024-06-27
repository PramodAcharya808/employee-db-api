import mongoose from "mongoose";

const dbconnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://pramodacharya808:UMtRy2Q8i1ggc5kV@cluster0.pehnb90.mongodb.net/employee-db"
    );
    console.log("✅ Database connection established");
  } catch (error) {
    console.log("❌ Error connecting database ", error);
    process.exit(1);
  }
};

export default dbconnect;
