const mongoose= require("mongoose")
const schema=mongoose.Schema

const usersSchema= schema({
    fullName:{type:String, required:true},
    birthDate:{type:Date, required:false},
    email:{type:String,required:true},
    password:{type:String,required:true},
    active:{type:Boolean},
})

module.exports=mongoose.model("users",usersSchema)