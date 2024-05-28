import { API_URL, token } from './config';

const readTodosRequest = async () => {
  const response = await fetch(`${API_URL}/todos`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
};

export default readTodosRequest;
