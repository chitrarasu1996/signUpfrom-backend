const bcrpt=require("bcrypt")
const deliveryAgentCollection=require("../models/userModel")
exports.registerAgent=async(req,res)=>{
    try {
        const{name,email,mobileNumber,password,pincode,address,city}=req.body
  
        const oldUser=await deliveryAgentCollection.findOne({email})
        if(oldUser){
            return res.status(200).send({result:false,message:"email already exists"})
        }
        const oldMobileNum=await  deliveryAgentCollection.findOne({mobileNumber})
if(oldMobileNum){
  return  res.status(200).send({result:false,message:"mobile number already exist"})
}

        const hashedPass=await bcrpt.hash(password,12);


if(hashedPass){
    const stroedData=await new deliveryAgentCollection({
        name,
        email,
        pincode,
        mobileNumber,
        password:hashedPass,
        address,
        city
    }).save()

    if(!stroedData){
        res.status(400).send({result:false,message:"error while string Data"})
   return 
    }

res.status(201).send({result:true,message:"Agent registered successfully"})


}
} catch (error) {
        console.log(error)
res.status(500).send("internal server error")
    }
}