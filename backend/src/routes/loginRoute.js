import jwt from 'jsonwebtoken';

const loginUser = (req, res) => {
  if (req.body.password === process.env.PASSWORD) {
    const token = jwt.sign(
      {
        userId: 1,
      },
      process.env.SECRET
    );
    res.json({ token });
  } else {
    res.status(401).send('wrong password');
  }
};

export { loginUser };
