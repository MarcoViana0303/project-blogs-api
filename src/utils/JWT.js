const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'secretJWT';

const jwtConfig = {
    expiresIn: '15m',
    algorithm: 'HS256',
};

const generateToken = ({ email, password }) => {
    const token = jwt.sign({ email, password }, JWT_SECRET, jwtConfig);
    return token;
};

const authenticateToken = async (token) => {
    if (!token) {
        const error = new Error('missing auth token');
        error.status = 401;
        throw error;
    }

    try {
        const decryptedData = await jwt.verify(token, JWT_SECRET);
        return decryptedData;
    } catch (err) {
        const error = new Error('jwt malformed');
        error.status = 401;
        throw error;
    }
};

module.exports = {
    generateToken, 
    authenticateToken,
};