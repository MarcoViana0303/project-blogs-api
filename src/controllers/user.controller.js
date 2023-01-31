// const userAuthenticate = require('../services/user.service');

const { postUser, getAllUsers, getById } = require('../services/user.service');

const postUserController = async (req, res) => {
    const { type, message } = await postUser(req.body);
  if (type !== 201) {
    return res.status(type).json({ message });
  }
  return res.status(type).json(message);
};

const getUsers = async (_req, res) => {
  try {
    const users = await getAllUsers();
    return res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getUsersByid = async (req, res) => {
 try {
  const { id } = req.params;
  const user = await getById(id);
  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  return res.status(200).json(user);
 } catch (error) {
  res.status(500).json({ message: 'Ocorreu um erro' });
 }
};

module.exports = {
  postUserController,
  getUsers,
  getUsersByid,
};