import { API_URL } from './config';

const logoutUserRequest = async (todo) => {
  const response = await fetch(`${API_URL}/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
};

export default logoutUserRequest;
