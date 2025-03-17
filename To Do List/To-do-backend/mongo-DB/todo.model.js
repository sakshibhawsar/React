import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
})

export const todo = mongoose.model("todo", todoSchema)