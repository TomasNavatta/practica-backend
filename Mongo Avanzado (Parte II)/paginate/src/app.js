import mongoose from "mongoose";
import express from "express"
import {engine} from "express-handlebars"

import studentModel from "./models/students.model.js";


const MONGO = "mongodb+srv://tomasnavatta:FXVstxFlHvcRxsag@tomas.xyielog.mongodb.net/PracticaMongoAvanzadoIIExmplapleI"

const app = express()

app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", "./src/views")

app.get("/students", async (req,res)=>{
    const {page} = req.query

    const students = await studentModel.paginate(
        {
            //FILTRADO INICIAL
        },
        {
            limit: 5,
            lean: true,
            page: page ?? 1,
        }
    )

    res.render("students", {students})
})

app.listen(8080, ()=>{
    console.log(`Server listening on port 8080`)
})
const main = async () => {

    try {
        await mongoose.connect(MONGO)

        console.log("conectado")
    }
    catch(error){

        console.log(error)
    }
}

main()
