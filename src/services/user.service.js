const { User } = require('../models');
const { validateUser } = require('./validations/validateInput');
const JWT = require('../utils/JWT');

const postUser = async (body) => {
    const error = validateUser(body);
    if (error) {
      return { type: 400, message: error };
    }
    const { displayName, email, password, image } = body;
  
    const allUsers = await User.findAll();
    const user = allUsers.find(
      (e) => e.email === email && e.password === password,
    );
  
    if (user) return { type: 409, message: 'User already registered' };
  
    await User.create({
      displayName,
      email,
      password,
      image,
    });
  
    const token = JWT.generateToken({ displayName, email, image });
  
    return { type: 201, message: { token } };
};

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return users;
};

module.exports = {
    postUser,
    getAllUsers,
};