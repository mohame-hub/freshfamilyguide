import React from "react";
import mongoose from "mongoose";

let isConnected = false;
export const connectDB = async () => {
    try {
        if(!isConnected){
            await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
            console.log("Successfully connected to MONGODB :)");
            isConnected = true;
        }
        if(isConnected == true){
            console.log("Mongodb already connected")
        }
    }
    catch (err) {
        console.log(err);
    }
}