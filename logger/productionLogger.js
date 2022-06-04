const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf, json } = format;

const productionLogger = () => {


    return createLogger({
        level: 'info',
        // format: winston.format.simple(),
        format: combine(
            timestamp(),
            json()
        ),

        defaultMeta: { service: 'user-service' },
        transports: [
            new transports.Console(),
            new transports.File({
                filename: 'errors.log',

            })
        ],
    });
}

module.exports = productionLogger;