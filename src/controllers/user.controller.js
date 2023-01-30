// const userAuthenticate = require('../services/user.service');

const { postUser } = require('../services/user.service')

const postUserController = async (req, res) => {

    const { type, message } = await postUser(req.body);
  if (type !== 201) {
    return res.status(type).json({ message });
  }
  return res.status(type).json(message);
};

module.exports = {
  postUserController,
}