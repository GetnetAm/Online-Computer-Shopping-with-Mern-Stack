import mongoose from "mongoose";
const productSchema= new mongoose.Schema({
    name: {type: String},
    category: {type: String, required: true},
    image: {type: String, required: true},
    price: {type: String, required: true},
    brand: {type: String, required: true},
    rating: {type: String, required: true},
    countInStock: {type: Number, required: true},
    numReviews: {type: String, required: true},
    description: {type: String, required: true},
  

},
{
    timestamps: true,
}

);
const Product = mongoose.model("Product", productSchema);
export default Product;