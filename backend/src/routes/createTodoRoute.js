import TodoModel from '../models/todoModel.js';

const createTodoRoute = async (req, res) => {
  const { text } = req.body;
  const todo = new TodoModel({
    text,
    completed: false,
  });
  const newTodo = await todo.save();
  res.json(newTodo);
};

export default createTodoRoute;
