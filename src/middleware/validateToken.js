function validateToken(req,res,next){
    console.log('validateToken');
    // 1. 获取token
    const token = req.headers['authorization'];
    // 2. 验证token
    if(!token){
        return res.status(401).send('Unauthorized: No token provided');
    }
    // 3. 解密token
    // 4. 验证token是否过期
    // 5. 验证token是否合法
    // 6. 如果合法，继续执行
    next();
}