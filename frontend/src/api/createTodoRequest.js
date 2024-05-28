import { API_URL, token } from './config';

const createTodoRequest = async (todo) => {
  const response = await fetch(`${API_URL}/todos`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: todo.text,
      completed: false,
    }),
  });
  return await response.json();
};

export default createTodoRequest;
