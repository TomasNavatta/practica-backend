import mongoose from "mongoose";
import { students } from "./data.js";
import studentModel from "./students.model.js";

const MONGO = "mongodb+srv://tomasnavatta:FXVstxFlHvcRxsag@tomas.xyielog.mongodb.net/PracticaMongoAvanzadoIIExmplapleI"

const main = async () => {

    try {
        await mongoose.connect(MONGO)

        await studentModel.insertMany(students)

        const resultOne = await studentModel.aggregate([
            {$sort: {grade: -1 }}
        ])
        console.log(resultOne)

        const resultTwo = await studentModel.aggregate([
            {$group: {_id:"$group", count: {$count: {}}}}
        ])
        console.log(resultTwo)

        const resultThree = await studentModel.aggregate([
            { $match: {group: "1B"}},
            {$group: {_id: "1B", avg: {$avg: "$grade"}}}
        ])
        console.log(resultThree)

        const resultFour = await studentModel.aggregate([
            { $match: {group: "1A"}},
            {$group: {_id: "1A", avg: {$avg: "$grade"}}}
        ])
        console.log(resultFour)

        const resultFive = await studentModel.aggregate([
            {$group: {_id: "all", avg: {$avg: "$grade"}}}
        ])
        console.log(resultFive)

        const resultSix = await studentModel.aggregate([
            {$match: {gender: "male"}},
            {$group: {_id: "male", avg: {$avg: "$grade"}}}

        ])
        console.log(resultSix)

        const resultSeven = await studentModel.aggregate([
            {$match: {gender: "female"}},
            {$group: {_id: "female", avg: {$avg: "$grade"}}}

        ])
        console.log(resultSeven)

        console.log("conectado")
    }
    catch(error){

        console.log(error)
    }
}

main()
