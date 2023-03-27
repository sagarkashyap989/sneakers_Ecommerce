const jwt = require("jsonwebtoken")
const config = require('config')
const moment = require('moment');

function tokenValid(exp) {
    const currentDate = new Date();
    console.log(currentDate)
    const currentDateSecond = currentDate / 1000
    var expDate = exp / 1000;
    console.log(currentDateSecond, 'is matched', expDate )
    return currentDateSecond < exp;
  }
module.exports = function async(req, res, next){
    const token = req.header("x-auth-token");

    if(!token){
      return  res.status(402).json({errors: [{msg: 'please login , to access further'}]})
    }
    
    try {
        // const decoded = jwt.verify(token, config.get("privateKey"));
        // console.log(tokenValid(decoded.exp) , 'valid or not')

        // if (tokenValid(decoded.exp)) {
        //     return   res.status(401).json({errors: [{msg: 'your sessin is expired'}]})
        //   }
    

        
jwt.verify(token, config.get("privateKey")  , function(err, decoded) {
    console.log(err, "skdljfsdklj")
            if (err) {
              
                if(tokenValid(err.expiredAt)){
                    return   res.status(402).json({errors: [{msg: 'your sessin is expired, please login in again'}]}) 
                }
        // console.log(req.user.id)
    }
        console.log(decoded)
        req.user = decoded.user;
        next(); 
          });

    } catch (error) {
        console.log(error)
        res.status(401).json({msg:"Token is not valid"})
    }

}