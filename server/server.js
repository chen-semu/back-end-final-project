const dotenv=require("dotenv")
dotenv.config()
// // const mongoose= require("mongoose")
const express= require("express")
const app= express()
const cors= require("cors")
const port= 8080
require("./DB")
// const io=require('socket.io')(server)
const passport=require("passport")
require("./config/passport")(passport)
const  path= require("path")



const usersRouter=require("./routes/usersRouter")
const productsRouter=require("./routes/productsRouter")
const citiesRouter=require("./routes/citiesRouter")
const ordersRouter=require("./routes/ordersRouter")
const storesRouter=require("./routes/storesRouter")


// app.use(passport.initialize())
app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use("/users",usersRouter)
app.use("/products", 
// passport.authenticate("jwt",{session:false}),
productsRouter)
app.use("/stores", 
// passport.authenticate("jwt",{session:false}),
storesRouter)
app.use("/orders", 
// passport.authenticate("jwt",{session:false}),
ordersRouter)
app.use("/cities", 
// passport.authenticate("jwt",{session:false}),
citiesRouter)
 


// io.on('connection',(socket)=>{
//     socket.on('massage',(txtMsg)=>{
//         io.emit('massage', txtMsg)
//     })
// })


app.listen(port,(error)=>{
    console.log(process.env.BASIC_API);
    if(error){
        console.log(`faild to connect to port: ${port}`);
        
    }
    console.log(`successful in connecting to port: ${port}`);
    })

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname, "../client/build")))
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname, "../client/build", 'inde.html'))
    })
}