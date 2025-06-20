import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    description: {
        requred: true,
        type: String,
    },
    productImage: {
        type: String,

    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    stock: {
        default: 0,
        type: Number,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"

    }

}, { timestamps: true });

export const Product = mongoose.model("Product", productSchema);