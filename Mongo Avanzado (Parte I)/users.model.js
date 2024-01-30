import mongoose from "mongoose";

const collection = "users"

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        index:true
    },
    last_name: String,
    email: String,
    gender: String
})

const userModel = mongoose.model(collection, userSchema)

export default userModel