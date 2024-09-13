import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB is successfully connected");
    } catch (err) {
        console.log(`Error connecting to MongoDB`);
        
    }
}

export default connectDB;
