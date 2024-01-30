import { Router } from "express"
import productsModel from "../dao/models/products.model.js"


const router = Router()

router.get("/", async (req,res) =>{

    const products = await productsModel.find()
    
    res.send({
        status: "success",
        message: products
    })
})

router.get("/:pid", async (req,res) =>{

    const id = req.params.pid

    const product = await productsModel.find({_id:id})
    
    res.send({
        status: "success",
        message: product
    })
})

router.post("/", async (req,res) =>{

    const { name, description, price, stock } = req.body


    if(!name || !description || !price || !stock){
        return res.status(400).send({
            status: "error",
            message: "valores incompletos"
        })
    }

    const product = {
        name,
        description,
        price,
        stock
    }

    const result = await productsModel.create(product)
    
    res.send({
        status: "success",
        message: result
    })
})

router.delete("/:pid", async (req,res) =>{

    const id = req.params.pid

    const result = await productsModel.deleteOne({_id:id})
    
    res.send({
        status: "success",
        message: result
    })
})

router.put("/:pid", async (req,res) =>{

    const id = req.params.pid

    const { name, description, price, stock } = req.body

    const updateProduct = {
        name,
        description,
        price,
        stock
    }

    const result = await productsModel.updateOne({_id:id}, {$set:updateProduct})
    
    res.send({
        status: "success",
        message: result
    })
})



export default router