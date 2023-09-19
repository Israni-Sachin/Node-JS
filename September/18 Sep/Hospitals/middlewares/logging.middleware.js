
function decoding(req,res,next){
    let data=req.data
    req.setHeader('auth',data.username);
    req.setHeader('auth2',data.role);
    console.log(data);
    console.log(data.role);
    next();
}


module.exports = decoding