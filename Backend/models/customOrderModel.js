import mongoose from "mongoose";
import validator from "validator";

const customOrderSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required!"],
    minLength: [3, "First name must contain at least 3 characters!"],
  },
  phone: {
    type: String,
    required: [true, "Phone Number is required!"],
    minLength: [10, "Phone number must contain at least 10 digits!"],
    maxLength: [10, "Phone number cannot exceed 10 digits!"],
  },
  dishName: {
    type: String,
    required: [true, "Dish Name is required!"],
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
  },
});

export const CustomOrder = mongoose.model("CustomOrder", customOrderSchema);
