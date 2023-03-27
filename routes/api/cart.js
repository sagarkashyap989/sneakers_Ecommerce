const express = require('express');
const { v4: uuidv4 } = require('uuid');
const Cart = require('../../model/Cart')
const auth = require('../../middleware/auth')
const Product = require('../../model/Products')

const router = express.Router();
String.prototype.toObjectId = function() {
    var ObjectId = (require('mongoose').Types.ObjectId);
    return new ObjectId(this.toString());
  };

router.get("/", auth,  async (req, res) => {

  try {
    console.log(req.user.id)
   const cart = await Cart.findOne({user : req.user.id});
  console.log("get cart")
   res.json(cart.cart.products)
  } catch (error) {
    console.log(error)
    res.status(500).send("server error")
  }

})



router.post("/:product_id", auth, async (req, res) => {


    let u_id;
    const {user} = req.user.id;
    const product_id  = req.params.product_id
    // console.log(product_id, "product+id")
    console.log(req.body, "req.body.................")
    const { size, quantity, totalPrice, cartTotalPrice, cartTotalQuantity, color, price} = req.body;

    try{


    const product =     await Product.findById(product_id)
    console.log(product, "this hsoul be  ")

    

           const test2 =  await   Cart.updateOne({user: req.user.id,
            "cart.products": { "$elemMatch": { "product_id": req.params.product_id, "size": size }}
 
          },
          { $inc: { 'cart.products.$.quantity': quantity, }}
          )

    if(test2) {console.log(test2)}
      if(!test2.modifiedCount){

         u_id =  uuidv4();
        console.log("push ran")
    await  Cart.findOneAndUpdate({user: req.user.id},
            {
              "$push": {
                "cart.products": {name:product.name,image:product.images[0], size, quantity,price:product.price, totalPrice, product_id:req.params.product_id,
                u_id}
              }
            })
      }


          // res.send({test2})
          res.send({modified:test2.modifiedCount, name:product.name,image:product.images[0], size, quantity,price:product.price, totalPrice, product_id:req.params.product_id, u_id})
        
        
    }catch(err){
        console.log(err)
        res.status(500).send("server error")
    }


})





router.delete("/:id",auth, async(req, res) =>{
    const param_id= req.params['id'];
    console.log(param_id, "param_id")
    console.log(req.user.id, 'req.user.id')

    try{
      await  Cart.updateOne( { user: req.user.id }, { 
            $pull: { 
                'cart.products':{ 
                    u_id: param_id }
         } 
        } )


        res.send("done")
  }catch(err){
        console.log(err)
        res.status(500).json("server error");

    }
    
} )


module.exports = router;