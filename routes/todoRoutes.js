import express from 'express';
import { delTodo, getTodos, postTodo, putTodo } from "../controllers/todoController.js";

const router = express.Router();

router.route("/get").get(getTodos);
router.route("/post").post(postTodo);
router.route("/update/:id").post(putTodo);
router.route("/delete/:id").post(delTodo);

export default router;