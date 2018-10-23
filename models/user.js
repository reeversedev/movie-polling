import mongoose from "mongoose";

const user = new mongoose.Schema({
  id: String,
  first_name: String,
  last_name: String,
  age: Number,
  email: String,
  password: String
});
