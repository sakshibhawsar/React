import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String
    }
}, {
    timestamps: true
})

export const todo = mongoose.model("todo", todoSchema)