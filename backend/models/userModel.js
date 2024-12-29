const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    user_name:{
        type:String,
        required:true
    },
    user_email:{
        type:String,
        required:true
    },
    gender:{
        type:String
      
        
    },
})
;


module.exports=mongoose.model("users",userSchema)