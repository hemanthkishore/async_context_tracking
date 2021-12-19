const nanoid = require('nanoid');
const {createRequestContext} = require('../services/asyncContext');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const loggerMiddleware = (req, res, next) => {
	let traceId = req.headers && req.headers['x-trace-id'];
	traceId = traceId || new Date().getTime() //nanoid();
	// add the traceId to the async context
	createRequestContext(traceId, next);
}

module.exports = loggerMiddleware;