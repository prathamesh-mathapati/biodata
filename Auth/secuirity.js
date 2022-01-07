require('dotenv').config()
const jwt=require('jsonwebtoken')

exports.generatetoken=(data)=>{
    return jwt.sign({data},'prathamesh')
  
}

// generatetoken()

exports.autindecationToke=(req,res,next)=>{
    if (req.headers.cookie){
        const token=req.headers.cookie.split('=')[1]
        const decode=jwt.verify(token,'prathamesh')
        req.data=decode
        next()
    }else(
        next(res.status(401).json({
            message:'not login yet'
        }))
    )
}
