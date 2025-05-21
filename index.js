const express = require('express');
const fs = require('fs');
const serverConfig = require('./src/config/server.js');
const apiMapping = require('./src/config/apiMapping.js');

const TestController = require('./src/controller/TestController.js');
const FileController = require('./src/controller/FileController.js');
const log = require('./src/middleware/log.js');
const reqAddin = require('./src/middleware/reqAddIn.js');

const app = express();
// static resources
app.use(express.static('public'))

// middleware
app.use(log);
app.use(reqAddin);

// controller
app.use(apiMapping.test.main, TestController);
app.use(apiMapping.file.main, FileController);

app.get('/', (req, res) => {
  res.send(fs.readFileSync('./public/index.html', 'utf8'));
  // res.send('Hello World!')
});

app.listen(serverConfig.port, () => {
    console.log('Server is running on port 3000');
})