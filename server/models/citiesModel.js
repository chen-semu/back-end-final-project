const mongoose= require("mongoose")
const schema=mongoose.Schema

const citiesSchema= schema({
    name:{type:String, required:true},
    numOfOrders:{type:Number,required:true},
    numOfStores:{type:Number, required:true},
    profit:{type:Number, required:true}
})

module.exports=mongoose.model("cities",citiesSchema)