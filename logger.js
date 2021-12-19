const winston = require('winston');
const { combine, timestamp, label, printf } = winston.format;

const {getRequestContext} = require('./services/asyncContext');

// const myFormat = printf(({ level, message, label, timestamp }) => {
//   return `[${new Date().toISOString)}]` //`${} [${getRequestContext()}] ${level}: ${message}`;
// });

const myFormat = printf(({message, level}) => {
	return `[${new Date().toISOString()}][${getRequestContext()}][${level}] : ${message}`;
});
 
const logger = winston.createLogger({
  level: 'info',
  transports: [
		new winston.transports.Console({ format: myFormat }),
  ],
});

module.exports = logger;