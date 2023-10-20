import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    todoName: {
        type: String,
        required: true
    },
    todoDescription: {
        type: String,
    }
})

export const Todo = mongoose.model('Todo', todoSchema)