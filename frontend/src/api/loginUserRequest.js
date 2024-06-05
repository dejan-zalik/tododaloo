import { API_URL, token } from './config';

const loginUserRequest = async (user) => {
  const response = await fetch(`${API_URL}/loginpage`, {
    method: 'POST',
    headers: {
      //   Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: user.email,
      password: user.password,
    }),
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    await response.json().then((data) => {
      throw new Error(data.message);
    });
  }
};

export default loginUserRequest;
