// const userAuthenticate = require('../services/user.service');

const { postUser, getAllUsers } = require('../services/user.service');

const postUserController = async (req, res) => {
    const { type, message } = await postUser(req.body);
  if (type !== 201) {
    return res.status(type).json({ message });
  }
  return res.status(type).json(message);
};

const getUsers = async (req, res) => {
  try {
   // const { }
    const users = await getAllUsers();
    return res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  postUserController,
  getUsers,
};