import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import todoRoutes from "./routes/todoRoutes.js";
// init express app

const app = express();
const PORT = process.env.PORT || 3000;
const connection_url = "mongodb+srv://appskans2017:XupC5OZiWY9tBvBC@cluster0.mnetf21.mongodb.net/newtododb?retryWrites=true&w=majority"

app.use(express.json());
app.use(Cors());

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/api/todos', todoRoutes);

// listen to the current port
app.listen(PORT, () => {
    console.log(`Server started. Listening to port - ${PORT}`);
});