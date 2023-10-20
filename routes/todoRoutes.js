import express from 'express';
import { delTodo, getTodos, postTodo, putTodo } from "../controllers/todoController.js";

const router = express.Router();

router.route("/get").get(getTodos);
router.route("/post").post(postTodo);
router.route("/update").put(putTodo);
router.route("/delete").delete(delTodo);

export default router;