const express = require('express')
const router = express.Router();
const testService = require('../service/testService.js');

class TestController {
    constructor() {
        this.router = router;
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get('/user', this.handleTest);
    }

    handleTest(req, res) {
        testService.handleUserRequest(req, res);
    }
}

module.exports = new TestController().router;