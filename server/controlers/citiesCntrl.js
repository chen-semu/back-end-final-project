const citiesDB = require("../models/citiesModel");
const bcrypt= require("bcryptjs")
const key=process.env.SECRET_KEY;

const getAllCities = async (req, res) => {
    await citiesDB.find({}).then((result, error) => {
      if (error) {
        return res.status(400).json({
          success: false, 
          massage: error,
        });
      }
      if(result.length===0){
          return res.status(300).json({
              success:false,
              massage:"there are no cities available"
          })
      }
      return res.status(200).json({
          success:true,
          massage:result
      })
    });
  };
  const addNewCity= async (req,res)=>{
      await citiesDB.insertMany(req.body)
      .then(()=>res.status(300).json({success:true,massage:"success in adding new city"}))
      .catch(error=>res.status(400).json({success:false,error}))
  }

  module.exports={
    getAllCities,
    addNewCity
  }