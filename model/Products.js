const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    images:[{
        type:"String",
        required:true
}],
    brand:{
        type:"String",
        
    },
    name:{
        type:"String",
        required:"true",
        
        
    },
    disc:{
        type:"String",
        // required:true,
    },
    price:{
        type:"Number",

    },
    discount:{
        
        type:"Number",
    },
    size: [{ 
        type:"Number",
        required:true
    }],
    stock:{
        type:"Number",
        required: true
    },
    likes:[
        {
            user:{
                type: mongoose.Schema.Types.ObjectId,
                 ref: "user"
            }
        }
    ],

    reviews:[
        {
            user:{
                type: mongoose.Schema.Types.ObjectId,
                 ref: "user"
            },
            comment:{
                type:"String",
                required:true
            },
            date:{
                type:Date,
                default:Date.now
            }
        }
    ]

})


module.exports = Products = mongoose.model("product", productSchema)