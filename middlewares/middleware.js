const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
    try{
        let token = req.header("Authorization")
        if(!token){
            return res.status(401).json({message:"Token Not Found!.."})
        }
        let decode = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decode.user
        next();
    }
    catch(error){
        console.log(error)
        return res.status(401).json({messaage:"Invalid Token!..."})
    }
}