const mongoose= require("mongoose")
const schema=mongoose.Schema

const ordersSchema= schema({
    orderNum:{type:String, required:true},   
    numOfItems:{type:Number, required:true},  
    date:{type:Date},  
    purchaseErr:{type:Boolean, required:true},  
    clientDecline:{type:Boolean, required:true},  
    profit:{type:Number, required:true},  
})

module.exports=mongoose.model("orders",ordersSchema)