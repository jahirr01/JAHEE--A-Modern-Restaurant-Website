import mongoose from "mongoose";
export const dbconnection= () =>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"RESTAURANT"
    }).then(()=>{
        console.log("connected to database successfully !");
    }).catch(ee=>{
        console.log(`some error occured while DB connecting ${err}`);
    })
}