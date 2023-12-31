import { Todo } from "../db-models/model.js";

export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.status(200).json({ todos: todos });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error during fetching todos');
    }
}

export const postTodo = async (req, res) => {
    try {
        const { todoName, todoDescription } = req.body
        const newTodo = new Todo({
            todoName: todoName,
            todoDescription: todoDescription
        })
        const saveTodo = await newTodo.save();
        res.status(200).json(saveTodo);

    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error during creation of new Todo');
    }
}

export const putTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { todoName, todoDescription } = req.body;

        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            { todoName: todoName, todoDescription: todoDescription },
            { new: true }
        );

        res.status(200).json(updatedTodo);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error during updating todo');
    }
}

export const delTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);

        res.status(200).send('Todo deleted successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error during deleting todo');
    }
}