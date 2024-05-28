import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const TodoModel = mongoose.model('Todo', todoSchema);

export default TodoModel;
