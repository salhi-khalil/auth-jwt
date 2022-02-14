const { body, validationResult } = require('express-validator');
exports.RegisterValidation=[

    body('name','please enter a name').notEmpty(),
    body('email','enter a valid email').isEmail(),
    body('password','must contains at least 6 caracters').isLength({min:6})

]

exports.LoginValidation=[

 
    body('email','enter a valid email').isEmail(),
    body('password','must contains at least 6 caracters').isLength({min:6})

]

exports.Validation=(req,res,next)=>{

    const errors=validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).send({ errors: errors.array() });
    }
    next()
}