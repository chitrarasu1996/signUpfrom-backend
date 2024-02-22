const mongoose=require("mongoose")
const MongoURL=process.env.MONGO_URL

const db=async()=>{

    try {
        await mongoose.connect(MongoURL)
        console.log("db connected successfully")
    } catch (error) {
        console.log(error,"error while connecting db")
    }
}

module.exports=db;