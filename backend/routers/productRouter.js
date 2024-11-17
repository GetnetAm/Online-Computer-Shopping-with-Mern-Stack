import expressAsyncHandler from 'express-async-handler'
import express from "express";
import Product from '../models/productModel.js';
import data from '../data.js';


const productRouter= express.Router();

productRouter.get(
    "/",
    expressAsyncHandler(async(req, res)=>{
        const products= await Product.find({});
        res.send(products)
    })
)


productRouter.get("/seed", expressAsyncHandler(async(req, res)=>{
    // await User.remove({});
    const createProducts= await Product.insertMany(data.products);
    res.send({createProducts})
}))

productRouter.get("/:id", expressAsyncHandler(async(req, res)=>{
    const product = await Product.findById(req.params.id)
    if(!product){
      res.status(404);
      throw new Error("Product not Found");
    }
    res.status(200).json(product);
}))

export default productRouter;