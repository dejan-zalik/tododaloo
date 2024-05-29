import UserModel from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

const registerRoute = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await UserModel.findOne({ email });

  if (userExists) {
    console.log('user exists');
  }

  const user = new UserModel({
    name,
    email,
    password,
  });

  const newUser = await user.save();
  res.json(newUser);
});

export default registerRoute;
