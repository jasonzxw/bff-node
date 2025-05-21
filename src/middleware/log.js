// todo: record user info 、

function log(req, res, next) {
    console.log(`${new Date()} method: ${req.method}  url: ${req.url}`);
    next();
}

module.exports = log;