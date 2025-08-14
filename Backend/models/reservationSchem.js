import mongoose from "mongoose";
import validator from "validator";

const reservationSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minlength:[3,"First name must contain 3 characters"],
        maxlength:[30,"First name must contain 30 characters"],
    },
    
     lastName:{
        type:String,
        required:true,
        minlength:[3,"Last name must contain 3 characters"],
        maxlength:[30,"Last name must contain 30 characters"],
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Provide valid email !"],
    },
    phone:{
        type:String,
        required:true,
        minlength:[10,"phone number must contain 10 digits"],
        maxlength:[10,"phone number must contain 10 digits"],

    },
    time:{
        type:String,
        required:true,

    },
    date:{
        type:String,
        required:true,

    },
});

export const Reservation=mongoose.model("Reservation",reservationSchema);