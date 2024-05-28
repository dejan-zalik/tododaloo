import express from 'express';
import { loginUser } from './routes/loginRoute.js';
import { readTodoRoute } from './routes/readTodoRoute.js';
import { isLoggedIn } from './middleware/isLoggedIn.js';
import createTodoRoute from './routes/createTodoRoute.js';
import { updateTodoRoute } from './routes/updateTodoRoute.js';
import { deleteTodoRoute } from './routes/deleteTodoRoute.js';

const router = express.Router();

router.post('/login', loginUser);
//below is the CRUD functionality
router.post('/todos', isLoggedIn, createTodoRoute);
router.get('/todos', isLoggedIn, readTodoRoute);
router.put('/todos/:id', isLoggedIn, updateTodoRoute);
router.delete('/todos/:id', isLoggedIn, deleteTodoRoute);

export default router;
