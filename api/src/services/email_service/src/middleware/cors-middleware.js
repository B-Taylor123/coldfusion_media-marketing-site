const cors = require('cors');

const allowedOrigins = [ 'http://localhost:3000' ];

const validateOrgin = (origin, callback) => {
    if (!origin) return callback(null, true);

    if (!allowedOrigins.includes(origin))
        callback(new Error(`Origin "${ origin }" not allowed by CORS policy`), false);
    
    return callback(null, true);
};

const corsMiddleware = cors({ origin: validateOrgin });

module.exports = corsMiddleware;