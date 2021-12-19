const { AsyncLocalStorage, AsyncResource } = require('async_hooks');

const asyncLocalStorage = new AsyncLocalStorage();

const createRequestContext = (traceId, next) => {
	asyncLocalStorage.run(traceId, next);
};

const getRequestContext = () => {
	return asyncLocalStorage.getStore();
}

module.exports = {
	createRequestContext,
	getRequestContext,
}