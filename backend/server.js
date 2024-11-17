// const dotenv = require("dotenv").config();
import express from "express"
// import data from "./data.js";
import cors from "cors"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import userRouter from "./routers/userRouter.js";
import mongoose from "mongoose";
import dotenv from "dotenv"
import productRouter from "./routers/productRouter.js";
import orderRouter from "./routers/orderRouter.js";




const app = express()
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors())

app.get("/", (req, res)=>{
    res.send("Home page");
})



// app.get('/api/products/:id', (req, res)=>{
//     const product=data.products.find((x)=>x._id===req.params.id);
//     if(product){
//         res.send(product)
//     }else{
//         res.status(404).send({message: "Product not Found"})
//     }
// })

// app.get("/api/products", (req, res)=>{
//     res.send(data.products);
// })

// main back end state clear

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

app.use((err, req, res, next)=>{
    res.status(500).send({message: err.message});
});




// Routes MiddleWare

// app.use("/api/users", userRoute)
app.get("/", (req, res)=>{
    res.send("Home page");
})




// Err midleware

// app.use(errHandler);


const PORT =process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server Running on Port ${PORT}`)
    })
})

// const port =process.env.PORT ||  5000;
// app.listen(port, ()=>{
//     console.log(`serve at http://localhost:${port}`);
// })
