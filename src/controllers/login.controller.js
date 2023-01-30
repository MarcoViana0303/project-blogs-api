const { loginAuthenticate } = require('../services/login.service');

const loginController = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const token = await loginAuthenticate(req.body);
    if (!token) {
        return res.status(400).json({ message: 'Invalid fields' });
    }
    return res.status(200).json({ token });
};

module.exports = {
    loginController,
};