import mongoose from "mongoose";


const collection = "Products"

const productsSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    stock: Number
   
  
})

const productsModel = mongoose.model(collection, productsSchema)

export default productsModel