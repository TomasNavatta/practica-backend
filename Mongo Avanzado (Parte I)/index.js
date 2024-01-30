import mongoose from "mongoose";
import fs from "fs"

import userModel from "./users.model.js";
import { error } from "console";

const seedData = async () => {
    const data = JSON.parse(fs.readFileSync("./Users.json"))

    const response = await userModel.insertMany(data)

        console.log(response)
}

const queryData = async () => {
    const response = await userModel
    .find({first_name: "Celia"})
    .explain("executionStats")

    console.log("queryData:",response.find)
}

const MONGO = "mongodb+srv://tomasnavatta:FXVstxFlHvcRxsag@tomas.xyielog.mongodb.net/PracticaMongoAvanzado1?retryWrites=true&w=majority"

const main = async () => {

    try {
        await mongoose.connect(MONGO)
        await seedData()
        await queryData()
        mongoose.connection.close()

        console.log("conectado")

    }
    catch(error){
        console.log(error)
    }

       

   
    
}

main()