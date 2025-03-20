import mongoose from "mongoose";

// const mongoose = require('mongoose');

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected..');
    } catch (error) {
        console.error("Database connection error", error);
        process.exit(1);
    }
};

export default connectDB;