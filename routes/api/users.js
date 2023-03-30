const express = require("express");
const { ResultWithContext } = require("express-validator/src/chain");
const router = express.Router();
const bcrypt = require('bcryptjs')
const { body, validationResult } = require('express-validator');
const User = require("../../model/User")
const jwt = require('jsonwebtoken');
const config = require("config")
const auth = require('../../middleware/auth')

const { v4: uuidv4 } = require('uuid');

// @route   GET api/user
// @desc    test route
//access    Public
 
router.post('/',[
    body('name','please enter username').not().isEmpty(),
    body('email', 'please enter email   ').isEmail(),
    body('password', 'please enter a password with 6 characters').isLength({min:5})
]
, async (req, res) =>{
    console.log(req.body)
    const errors =validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors)
        console.log("everything is empty")
         return res.status(400).json({errors: errors.array()});
    }
    console.log(req.body);

    const {name, email, password}  = req.body;
    console.log("ldskfjlkj")
    try{
        let user = await User.findOne({email});

        if(user){
            console.log("errorrrrrrrrrrrrrrrr")
            return res.status(400).json({errors: [{msg: 'User already exist'}]});
        } 


        user = new User({
            name,
            email,
            password,
            // avatar
        })

        
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        cart = new Cart({
            user:user.id
        })

        await cart.save();
        const payload ={
            user:{
                id: user.id
            }
        };


        jwt.sign(payload, config.get("privateKey"),{expiresIn:3600}, function(err, token) {
            if(err){
                console.log(err)
            }else{
                console.log("token thould ")
                console.log(token)
                res.json({token})
            }
            
          });

          
    }catch(error){
        console.log(error.message);
        res.status(500).send('Server error')

    }



    // res.send('User route');
})


router.put('/address',[auth,
[    body('f_name','please enter first name').not().isEmpty(),
    body('l_name', 'please enter last name ').not().isEmpty(),
    body('address', 'please enter a address').not().isEmpty(),
    body('city', 'please enter  city name').not().isEmpty(),
    body('state', 'please enter state name').not().isEmpty(),
    body('zip', 'please enter zip code').not().isEmpty(),]
], async(req, res)=>{
    console.log(req.body,'a gift from address')
    const errors =validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors)
        console.log("everything is empty")
         return res.status(400).json({errors: errors.array()});
    }

    const {f_name, l_name, address, city, state, zip} = req.body;


    try {
        const u_id =  uuidv4();
        const user = await User.findOne({_id: req.user.id ,address: {$elemMatch: {f_name, l_name, address, city, state, zip}}})
        console.log(user, 'user')
        if(!user){
            const res1 = await User.findOneAndUpdate({_id: req.user.id},  
                {
                        '$push':{
                            'address':{f_name, l_name, address, city, state, zip, u_id}
                        }
                })
                console.log(res1)

              return  res.send({f_name, l_name, address, city, state, zip, u_id})
        }else{

            return res.status(400).json({errors: [{msg: 'Address already exist'}]});
        }

    } catch (error) {
        console.log(error)
        res.status(400).send('Server error')
    }
} )




router.put('/address/:u_id', auth , async(req, res) =>{
    console.log('is hit')
    const params= req.params['u_id']

    try {
        const newAddress = await User.findOneAndUpdate({_id:req.user.id, address:{$elemMatch:{ u_id: params}}},
            {
                $set:{
                    'address.$.f_name':req.body.f_name,
                    'address.$.l_name':req.body.l_name,
                    'address.$.address':req.body.address,
                    'address.$.city':req.body.city,
                    'address.$.state':req.body.state,
                    'address.$.zip':req.body.zip,
                }
            })


            console.log(newAddress, 'newAddress')
            res.send(req.body)
    } catch (error) {
        console.log(error)  
        res.status(400).send('sever error')
    }
})



router.delete('/address/:u_id', auth, async(req, res) =>{
    const params = req.params['u_id'];

    try {
            const newUser=    await User.updateOne( { _id: req.user.id }, {
                $pull:{
                    'address':{u_id: params}
                }
            })
            console.log(newUser, "newWuse");
            if(newUser.modifiedCount > 0){

                return res.send('successfully deleted') 
            }else{
                return res.send("no address found")
            }
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
