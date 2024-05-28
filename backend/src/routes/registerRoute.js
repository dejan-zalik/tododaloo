import UserModel from '../models/userModel.js';

const registerRoute = async (req, res) => {
  const { name, email, password } = req.body;

  //   console.log(name, email, password);

  //   res.json('worked');

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
};

export default registerRoute;
