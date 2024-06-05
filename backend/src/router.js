import express from 'express';
import loginRoute from './routes/loginRoute.js';
import readTodoRoute from './routes/readTodoRoute.js';
import createTodoRoute from './routes/createTodoRoute.js';
import updateTodoRoute from './routes/updateTodoRoute.js';
import deleteTodoRoute from './routes/deleteTodoRoute.js';
import registerRoute from './routes/registerRoute.js';
import logoutRoute from './routes/logoutRoute.js';

const router = express.Router();

//below is the CRUD functionality

// users
router.post('/registerpage', registerRoute);
router.post('/loginpage', loginRoute);
router.post('/logout', logoutRoute);
// todos
router.post('/todos', createTodoRoute);
router.get('/todos', readTodoRoute);
router.put('/todos/:id', updateTodoRoute);
router.delete('/todos/:id', deleteTodoRoute);

export default router;
