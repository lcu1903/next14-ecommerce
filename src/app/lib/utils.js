import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    if(mongoose.connection.readyState === 1) return console.log("Already connected to database");
    await mongoose.connect("mongodb://127.0.0.1:27017/next14-ecommerce");
    console.log("Connected");
  } catch (error) {
    console.log("Error connecting to database", error);
    throw new Error("Error connecting to database");
  }
}
