import { API_URL, token } from './config';

const updateTodoRequest = async (todo) => {
  const response = await fetch(`${API_URL}/todos/${todo._id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: todo.text,
      completed: todo.completed,
    }),
  });
  return await response.json();
};

export default updateTodoRequest;
