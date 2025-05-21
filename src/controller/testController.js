const testService = require('../service/testService.js');
const BaseController = require('./BaseController.js');
const apiMapping = require('../config/apiMapping.js');
class TestController extends BaseController {
    constructor() {
        super();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get(apiMapping.test.user, this.handleTest);
    }

    handleTest(req, res) {
        testService.handleUserRequest(req, res);
    }
}

module.exports = new TestController().router;