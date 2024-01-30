import mongoose, { mongo} from "mongoose";
import orderModel from "./order.model.js";
import orders from "./orders.js";

const MONGO = "mongodb+srv://tomasnavatta:FXVstxFlHvcRxsag@tomas.xyielog.mongodb.net/PracticaMongoAvanzadoIIExmplapleI"

const main = async () => {

    try {
        await mongoose.connect(MONGO)

        console.log("conectado")

       // await orderModel.insertMany(orders)
      
       const orders = await orderModel.aggregate([
        { $match: {size: "medium"}},
        { $group: {_id: "$name", totalQuantity: {$sum:"$quantity"}}},
        {$sort: {totalQuantity: -1}},
        {$group: {_id:1, orders: {$push: "$$ROOT"}}},
        {
            $project: {
                _id: 0,
                orders: "$orders"
            },
        },
        { $merge: {into: "reports"}}

       ])
       console.log(orders)
    }
    catch(error){

        console.log(error)
    }
}

main()


