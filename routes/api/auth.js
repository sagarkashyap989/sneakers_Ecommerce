const express = require("express");
const { ResultWithContext } = require("express-validator/src/chain");
const auth = require('../../middleware/auth')
const User = require("../../model/User")
const { body, validationResult } = require('express-validator');
const config = require("config")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const router = express.Router();
// @route   GET api/auth
// @desc    test route
//access    Public

router.get('/',auth, async (req, res) =>{

    try{
        const user = await User.findById(req.user.id).select('-password');
        console.log(user, "kldskjl")
        res.json(user);


    }catch(error){  
        console.log(error)
        res.status(500).send("server error")
    }

})


router.post('/',[
    body('email').isEmail(),
    body('password', "please fill password").exists()
], async(req, res) =>{
    console.log(req.body)
    const {email, password} = req.body;
    try {
        const user = await  User.findOne({email});
        if(!user){
           return res.status(400).json({errors:[{msg:"invalid credentials"}]})
        }

        
        const isMatch = await  bcrypt.compare(password, user.password);
        if(!isMatch){
          return  res.status(400).json({errors:[{msg:"invalid credentials"}]})

        }

        const payload = {
            user:{
                id:user.id
            }
        }

        jwt.sign(payload, config.get('privateKey'), {expiresIn: 3600}, function(error, token){
            if(error) throw error;
            res.json({token})
        })

    } catch (error) {
        console.log(error)
        res.status(500).send('server error')
    }
})


module.exports = router;
