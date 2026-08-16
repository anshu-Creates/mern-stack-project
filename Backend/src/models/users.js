import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    names: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

export const User = mongoose.model("User", userShema)

