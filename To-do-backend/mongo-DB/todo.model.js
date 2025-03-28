import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String
    }
}, {
    timestamps: true // this will add created_at and updated_at timestamps
})

export const todo = mongoose.model("todo", todoSchema)