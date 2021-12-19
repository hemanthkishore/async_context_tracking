const logger = require('../logger');

const one = async () => {
	logger.info('ONE');
	return;
}

const two = async () => {
	logger.info('TWO');
	return;
}

const three = async () => {
	logger.info('THREE');
	return;
}

const asyncFunctions = () => {
	return one().then(()=>{
		two().then(()=>{
			three().then(()=>{
				return Promise.resolve();
			})
		})
	})
}

module.exports = {
	asyncFunctions,
}