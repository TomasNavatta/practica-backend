import mongoose from "mongoose";

import studentModel from "./modals/student.model.js";
import courseModel from "./modals/course.model.js";

const createStudent = async () => {
    await studentModel.create({
        first_name:"Frieda",
        last_name:"Pitchers",
        email:"fpitchers7@jiathis.com",
        gender:"Female"

    })
}

const createCourse = async () => {
    await courseModel.create({
        title: "Programacion Backend",
        description: "curso de desarrollo",
        difficulty: 5,
        topics: ["NodeJS", "Express", "Mongo"],
        professor: "Tomas Navatta"

    })
}

const addCourseToStudent = async () => {
    const student = await studentModel.findById("65ae88b2f3d99cf215bd3f8b")
    student.courses.push({course: "65ae88b4f3d99cf215bd3f8d"})
    await student.save()
}

const MONGO = "mongodb+srv://tomasnavatta:FXVstxFlHvcRxsag@tomas.xyielog.mongodb.net/PracticaMongoAvanzado1Curso"

//curso 65ae88b4f3d99cf215bd3f8d
//estudiante 65ae88b2f3d99cf215bd3f8b

const main = async () => {

    try {
        await mongoose.connect(MONGO)
       // await createStudent()
       // await createCourse()
       // await addCourseToStudent()

       const student = await studentModel.findOne()

       console.log(JSON.stringify(student, null, "\t"))

      
        mongoose.connection.close()

        console.log("conectado")

    }
    catch(error){
        console.log(error)
    }
 
}

main()