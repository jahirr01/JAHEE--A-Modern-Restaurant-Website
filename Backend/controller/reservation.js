import ErrorHandeler from "../database/error/error.js";
import { Reservation } from "../models/reservationSchem.js";

export const sendReservation = async(req,res,next) =>{
    const {firstName,lastName,email,date,time,phone}=req.body;

    if(!firstName || !lastName || !email || !date || !time || !phone){
        return next(new ErrorHandeler("Please fill all reservation form completely",400));
    }
    try {
        await Reservation.create({firstName,lastName,email,date,time,phone});
        res.status(201).json({
            success:true,
            message:"Reservation Sent Successfully !;"
        });
    } catch (error) {
        if(error.name ==="ValidationError"){
            const validationErrors =Object.values(error.errors).map(err=>err.message);
            return next(new ErrorHandeler(validationErrors.join(', '),400))
        }
        return next(error);
        
    }

};