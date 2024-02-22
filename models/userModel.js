const mongoose=require("mongoose");

const deliveryAgentSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
mobileNumber:{
    type:String,
    required:true
},
    password:{
        type:String,
        required:true
    },
pincode:{
    type:"string",
    required:true
},
email:{
    type:String,
    required:true
},
address:{
    type:String,
    required:true
},

    city:{
        type:String,
        required:true
    }

})

module.exports=mongoose.model("deliveryagent",deliveryAgentSchema)