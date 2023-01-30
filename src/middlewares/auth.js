const JWT = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = (req, _res, next) => {
    const token = req.headers.authorization;
    
    if (!token) {
        const err = new Error('Token not found');
    
        err.statusCode = 401;
        return next(err);
    }

    try {
        const payload = JWT.verify(token, JWT_SECRET);

        req.user = payload;
    } catch (err) {
         const error = new Error('Expired or invalid token');
        error.statusCode = 401;
        return next(error);
    }

    next();
};