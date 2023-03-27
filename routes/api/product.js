const express = require("express");
const { ResultWithContext } = require("express-validator/src/chain");
// const Product = require("../../model/Products.js")
const router = express.Router();
const sneaks = require('sneaks-api');
const Products = require("../../model/Products.js");
const auth = require('../../middleware/auth')
const { body, validationResult } = require('express-validator');

// const router = express.Router();
// @route   GET api/pruduct
// @disc    test route
//access    Public



router.get('/', async (req, res) => {
    const product =await Products.find();
    res.json(product);
})



router.put('/like/:product_id', auth, async (req, res) => {


    try {
        const product = await Products.findById(req.params.product_id);

    if(product.likes.filter( like =>like.user.toString() === req.user.id).length > 0){
        let newProduct = new Products({...product, likes:product.likes.filter(like=>like.user.toString() !== req.user.id)});

        const removeIndex = product.likes.map(like => like.user.toString()).indexOf(req.user.id);
        product.likes.splice(removeIndex, 1); 
    
    
       await product.save();
       res.json(product);


    }else{
        product.likes.push({user:req.user.id})
        await product.save();
        res.json(product)
    }

    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }


    // res.send(test);
})





router.put('/review/:product_id', [auth, [
    body('text' , 'text is required').not().isEmpty(),
    

]], async(req, res)=>{

    const text = req.params.product_id;
    console.log(text)
    try {
        const reviews = await Products.findByIdAndUpdate((req.params.product_id),
            {
                

                    $push:{
                        'reviews':{
                            user:req.user.id, comment:req.body.text
                        }
                    }
                
            })

            res.json(reviews)
    } catch (err) {
        console.log(err);
        res.status(400).json({msg:{err}})
    }



} )


router.delete('/review/:product_id/:comment_id', auth, async(req, res) =>{
    try {
        const reviews = await Products.findByIdAndUpdate((req.params.product_id),{
            $pull:{
                'reviews': { _id: req.params.comment_id}
            }
        }) 
        res.json(reviews)
    } catch (err) {
        console.log(err),
        res.status(500).json({msg:{err}})
    }

})


module.exports = router;
