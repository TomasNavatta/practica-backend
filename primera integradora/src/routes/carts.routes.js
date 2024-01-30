import { Router } from "express"

import cartModel from "../dao/models/carts.model.js"

const router = Router()

router.get("/", async (req,res) =>{

    const carts = await cartModel.find()
    
    res.send({
        status: "success",
        message: carts
    })
})


router.post('/', async (req, res) => {
 
        const cart = await cartModel.create();
        res.send({
            status: "success",
            message: cart
        });
  
});

router.put('/:cid', async (req, res) => {
     const id = req.params.cid 
     const productid = req.body.productid 

     const cart = await cartModel.find({ _id: id })
      cart.products.push({product: productid}) 

      const cartUpdated = await cartModel.updateOne({_id: id}, cart)
       res.send({ 
        status: "success",
         message: result }) 
        })




 export default router



