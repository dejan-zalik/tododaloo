import { API_URL, token } from './config';

const registerUserRequest = async (user) => {
  const response = await fetch(`${API_URL}/registerpage`, {
    method: 'POST',
    headers: {
      // Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: user.name,
      email: user.email,
      password: user.password,
    }),
  });
  if (response.ok) {
    response.json();
  } else {
    await response.json().then((data) => {
      throw new Error(data.message);
    });
  }
};

export default registerUserRequest;
