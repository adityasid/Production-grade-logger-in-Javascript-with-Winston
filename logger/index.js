const developmentLogger = require('./developmentLogger');

let logger = null;

if (process.env.NODE_ENV === 'development') {
    logger = developmentLogger();
}



module.exports = logger;