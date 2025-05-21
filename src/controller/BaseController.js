const express = require('express')
const router = express.Router();

/**
 * BaseController class
 */
class BaseController {
    constructor() {
        this.router = router;
    }

    outputRsp(req, res, code, data) {
        res.status(code).json({
            code: code,
            data: data
        });
    }
}

module.exports = BaseController;