const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },

    cart:{
            products: [{

                    name:{
                        type:"String",
                        // required:true
                    },
                    product_id:{
                        type:mongoose.Schema.Types.ObjectId,
                        ref:'product',
                        required:true
                    },
                    image:{
                        type:'String',
                        required:true
                    },
                    size:{
                        type:'Number',
                        // required:true
                        
                    },

                    quantity:{
                        type:"Number",
                        // required:true
                    },
                    color:{
                        type:"String",
                        // required:false
                    },
                    price:{
                        
                        type:"Number"
                    },
                    totalPrice:{
                        type:"Number",
                        // required:true
                    },
                    u_id:{
                        type:'String'
                    }
                }],
             
            cartTotalPrice:{
                type:"Number",
            
            },
            cartTotalQuantity:{
                type:"Number"
            }
    

        }


}


)


module.exports = Cart= mongoose.model("cart", CartSchema)