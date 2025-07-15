const jwt = require('jsonwebtoken');
const getuserdetailscontroller = async (req, res) => {
    try{
        const {authorization} = req.cookies;
    console.log("Authorization" + authorization);
    if (!authorization) {
        res.status(401).json({isSuccess:false, message: "Unauthorized user. Token not found"});
    }
    jwt.verify(authorization,process.env.JWT_SECRET,function (err, data) {
        if(err){
            res.status(401).json({
                isSuccess:false, 
                message: "Token not valid",
                data:{}
            });
        }
        else{
            res.status(200).json({
                isSuccess:true, 
                message: "Token valid", 
                user: decodedData})
        }
    })
    }
    catch(err){
        console.log("Error in getuserdetailscontroller :", err.message);
        res.status(500).json({
            isSuccess:false, 
            message: "Internal server error",
            data:{}
        });
    }
}

module.exports = {
    getuserdetailscontroller
}