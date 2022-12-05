const storesDB = require("../models/storesModel");
const bcrypt= require("bcryptjs")
const key=process.env.SECRET_KEY;

const getAllStores = async (req, res) => {
    await storesDB.find({}).then((result, error) => {
      if (error) {
        return res.status(400).json({
          success: false,
          massage: error,
        });
      }
      if(result.length===0){
          return res.status(300).json({
              success:false,
              massage:"there are no stores available"
          })
      }
      return res.status(200).json({
          success:true,
          massage:result
      })
    });
  };
  const addNewStore= async (req,res)=>{
      await storesDB.insertMany(req.body)
      .then(()=>res.status(300).json({success:true,massage:"success in adding new store"}))
      .catch(error=>res.status(400).json({success:false,error}))
  }

  module.exports={
    getAllStores,
    addNewStore
  }