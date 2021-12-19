const express = require('express')
const logger = require('./logger');

const loggerMiddleware = require('./middlewares/logger.middleware');
const {getRequestContext} = require('./services/asyncContext');
const {asyncFunctions} = require('./services/asyncFunctions');

const app = express()
const port = 3000

app.use(loggerMiddleware);

app.get('/', (req, res) => {
	logger.info('Winston Logger Testing');
  res.send('Hello World!')
});

app.get('/trace-test', async (req, res) => {
	logger.info('start trace test');
	await asyncFunctions();
	logger.info('end trace test');
  res.send('success');
})

app.listen(port, () => {
  console.log(`Async Context Tracking app is up on port ${port}`);
});