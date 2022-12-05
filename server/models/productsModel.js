const mongoose= require("mongoose")
const schema=mongoose.Schema

const productsSchema= schema({
    name:{type:String, required:true},
    amount:{type:Number,required:true},
    price:{type:Number, required:true},
    
})

module.exports=mongoose.model("products",productsSchema)