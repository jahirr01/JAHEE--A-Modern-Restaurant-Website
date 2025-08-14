import { CustomOrder } from "../models/customOrderModel.js";
// No 'catchAsyncErrors' import needed as there is no middleware folder.
import ErrorHandeler from "../database/error/error.js"; // Corrected spelling to match your reservation controller

export const sendCustomOrder = async (req, res, next) => {
  const { firstName, phone, dishName, description } = req.body;
  if (!firstName || !phone || !dishName || !description) {
    return next(new ErrorHandeler("Please fill out the entire form!", 400));
  }
  
  try {
    await CustomOrder.create({ firstName, phone, dishName, description });
    res.status(201).json({
      success: true,
      message: "Custom order request submitted successfully!",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandeler(validationErrors.join(', '), 400));
    }
    return next(error);
  }
};
