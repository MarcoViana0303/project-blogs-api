const { User } = require('../models'); 
const { generateToken } = require('../utils/JWT');

const loginAuthenticate = async ({ email, password }) => {
        // const errorData = new Error("Some required fields are missing");
        // errorData.status = 400;
        // throw errorData;

    const user = await User.findOne({
        attributes: ['id', 'email'],
        where: { email, password },
    });

    if (!user) {
        // const error = new Error("Invalid fields");
        // error.status = 400;
        // throw error;
        return user;
    }

    const token = generateToken(user.dataValues);

    return token;
};

module.exports = {
    loginAuthenticate,
};