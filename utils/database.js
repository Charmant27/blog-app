// import mongoose from "mongoose";

// // checking if the database is connected
// let isConnected = false;

// export const connectDB = async () => {
//     mongoose.set("strictQuery", true);

//     if (isConnected) {
//         console.log("mongodb is connected")
//     }

//     try {
//         await mongoose.connect(process.env.MONGO_URI)
//     } catch (error) {
//         console.log(error)
//     }
// }

import mongoose from "mongoose";

let isConnected = false; //track connection

export const connectDB = async () => {
    mongoose.set('strictQuery', true)

    mongoose.connection.once('connected', () => {
        console.log('MongoDB was successfully connected')
        isConnected = true
    })

    try {
        await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.log(error)
    }
}