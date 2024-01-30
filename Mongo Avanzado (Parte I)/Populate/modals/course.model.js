import mongoose from "mongoose";

const sourceSchema = new mongoose.Schema({
    title: String,
    description: String,
    difficulty: Number,
    topics:{
        type: Array,
        default: []
    },
    professor: String,
    students: {
        type: Array,
        default: []
    }
})

const courseModel = mongoose.model("courses", sourceSchema)

export default courseModel