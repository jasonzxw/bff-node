const express = require('express');
const serverConfig = require('./src/config/server.js');

const TestController = require('./src/controller/testController.js');

const log = require('./src/middleware/log.js');

const app = express();
// static resources
app.use(express.static('public'))

// middleware
app.use(log);

// controller
app.use('/test', TestController);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(serverConfig.port, () => {
    console.log('Server is running on port 3000');
})