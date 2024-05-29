import express from 'express';
import loginRoute from './routes/loginRoute.js';
import readTodoRoute from './routes/readTodoRoute.js';
import { isLoggedIn } from './middleware/isLoggedIn.js';
import createTodoRoute from './routes/createTodoRoute.js';
import updateTodoRoute from './routes/updateTodoRoute.js';
import deleteTodoRoute from './routes/deleteTodoRoute.js';
import registerRoute from './routes/registerRoute.js';

const router = express.Router();

//below is the CRUD functionality

// users
router.post('/registerpage', registerRoute);
router.post('/loginpage', loginRoute);
// todos
router.post('/todos', isLoggedIn, createTodoRoute);
router.get('/todos', isLoggedIn, readTodoRoute);
router.put('/todos/:id', isLoggedIn, updateTodoRoute);
router.delete('/todos/:id', isLoggedIn, deleteTodoRoute);

export default router;
