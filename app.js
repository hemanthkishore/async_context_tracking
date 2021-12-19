const express = require('express')
const logger = require('./logger');

const app = express()
const port = 3000

app.get('/', (req, res) => {
	logger.info('Winston Logger Testing');
  res.send('Hello World!')
});

app.get('/', (req, res) => {
	logger.info('Winston Logger Testing');
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Async Context Tracking app is up on port ${port}`);
});