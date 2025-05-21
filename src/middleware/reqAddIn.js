// Middleware to add a custom add-in to the request object
function reqAddin(req, res, next) {
  // Add your custom logic here
  req.addin = 'This is a custom add-in';
  next();
}

module.exports = reqAddin;