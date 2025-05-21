class TestService{
    constructor(){

    };

    handleUserRequest(req, res){
        res.send('Hello from TestService!');
    }
}

module.exports = new TestService();