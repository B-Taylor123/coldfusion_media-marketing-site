const cors = require('cors');

const validateOrgin = (origin, callback) => callback(null, true);

const corsMiddleware = cors({ origin: validateOrgin });

module.exports = corsMiddleware;