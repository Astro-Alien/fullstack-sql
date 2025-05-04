const jwt = require('jsonwebtoken');
const util = require('util');

const verify = util.promisify(jwt.verify);

async function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);
    
    try {
        const user = await verify(token, process.env.JWT_SECRET);

        if (!user || !user.userId) return res.sendStatus(403);

        req.user = user;
        next();
        
    }catch (error) {
        console.error('JWT verification error:', error);
        return res.sendStatus(403); 
    }
}

module.exports = authenticateToken;