const ordersDB = require("../models/ordersModel");
const bcrypt= require("bcryptjs")
const key=process.env.SECRET_KEY;

const getAllOrders = async (req, res) => {
    await ordersDB.find({}).then((result, error) => {
      if (error) {
        return res.status(400).json({
          success: false,
          massage: error,
        });
      }
      if(result.length===0){
          return res.status(300).json({
              success:false,
              massage:"there are no orders available"
          })
      }
      return res.status(200).json({
          success:true,
          massage:result
      })
    });
  };
  const addNewOrder= async (req,res)=>{
      await ordersDB.insertMany(req.body)
      .then(()=>res.status(300).json({success:true,massage:"success in adding new order"}))
      .catch(error=>res.status(400).json({success:false,error}))
  }

  module.exports={
    getAllOrders,
    addNewOrder
  }