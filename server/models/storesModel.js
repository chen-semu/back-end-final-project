const mongoose= require("mongoose")
const schema=mongoose.Schema

const storesSchema= schema({
    number:{type:Number, required:true},
    numOfOrders:{type:Number,required:true},
    numOfPruductes:{type:Number, required:true},
    city:{type:String, required:true},
    profit:{type:Number, required:true}
})

module.exports=mongoose.model("stores",storesSchema)