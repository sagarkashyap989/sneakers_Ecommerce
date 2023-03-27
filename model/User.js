const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
   name:{
    type:String,
    required: true
   } ,
   email:{
    type:String,
    required: true,
    unique: true
   },
   password:{
    type:String,
    required: true
   },
   avatar:{
    type:String,
   },
   data:{
    type:Date,
    default:Date.now
   },
   address:[
      {
         f_name:{
            type:String
         },
         l_name:{type:String},
         address:{type:String},
         city:{type:String},
         state:{type:String},
         zip:{type:Number},
         u_id:{type:String}
      }
   ]
})


module.exports = User = mongoose.model('user', UserSchema)