import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  names: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 80
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    maxlength: 20
  },
  subject: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 120
  },
  message: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 2000
  }
});

export const Message = mongoose.model("Message", messageSchema);