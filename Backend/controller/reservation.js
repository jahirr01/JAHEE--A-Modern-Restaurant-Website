import ErrorHandeler from "../database/error/error.js";
import { Reservation } from "../models/reservationSchem.js";

export const sendReservation = async (req, res, next) => {
  try {
    // 🔎 Log incoming data (important for debugging in Render)
    console.log("Incoming Reservation Body:", req.body);

    const { firstName, lastName, email, date, time, phone } = req.body || {};

    // ✅ Trim values to avoid blank-string submissions
    if (
      !firstName?.trim() ||
      !lastName?.trim() ||
      !email?.trim() ||
      !date ||
      !time ||
      !phone?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all reservation form fields correctly."
      });
    }

    // ✅ Create reservation in MongoDB
    const reservation = await Reservation.create({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      date,
      time,
      phone: phone.trim()
    });

    console.log("Reservation Saved:", reservation._id);

    // ✅ Send success response
    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!"
    });

  } catch (error) {
    console.error("Reservation Error:", error);

    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        err => err.message
      );

      return res.status(400).json({
        success: false,
        message: validationErrors.join(", ")
      });
    }

    next(error);
  }
};
