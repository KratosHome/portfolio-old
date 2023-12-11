import mongoose from "mongoose";


export const connectToDb = async () => {
    const connection = {}

    console.log("process.env.NEXT_MONGO_DB", process.env.NEXT_MONGO_DB)
    try {
        if (connection.isConnected) return
        const db = await mongoose.connect(`${process.env.NEXT_MONGO_DB}`);
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        throw new Error(error);
    }
}