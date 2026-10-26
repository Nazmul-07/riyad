import { getDB } from "../config/db.js";

const getCollection = ()=> getDB().collection("products")

export const createProduct =async (req, res)=>{
    try {
        const {name, category, price, stock} = req.body;
        const newProduct = {
            name : String(name),
            category: String(category),
            price : Number(price),
            stock: Number(stock)
        }
        const result =await getCollection().insertOne(newProduct)
        res.status(201).json({
            success: true,
            messsage: 'New Product Added successfully!',
            data: {
                ...newProduct
            }
        })
    } catch (error) {
        res.status(500).json({
            success: false, 
            messsage: error.messsage
        })
    }
}