const usersDB = require("../models/usersModel");
const bcrypt= require("bcryptjs")
const jwt=require("jsonwebtoken")
const validateRegister=require("../validation/register")
const validateLogIn=require("../validation/logIn")
const key=process.env.SECRET_KEY;

const getAllUsers = async (req, res) => {
  await usersDB.find({}).then((result, error) => {
    if (error) {
      return res.status(400).json({
        success: false,
        massage: `${error}`,
      });
    }
    if(result.length===0){
        return res.status(300).json({
            success:false,
            massage:"the collection data is empty"
        })
    }
    return res.status(200).json({
        success:true,
        massage:result
    })
  });
};
const addNewUser= async (req,res)=>{
    await usersDB.insertMany(req.body)
    .then(()=>res.status(300).json({success:true,massage:"success in adding new user"}))
    .catch(error=>res.status(400).json({success:false,error}))
}

const getUserById= async (req,res)=>{
  await usersDB.findById(req.params.id)
  .then((user)=>{
  if(!user){return res.json({success:false,massage:"user not found"})}
  return res.status(200).json({success:true,massage:`success in finding user: ${user}`})
})
  .catch(error=>res.status(400).json({success:false,error}))
}

const register= async (req,res)=>{
  const [isValid, errors]= validateRegister(req.body)
  if(!isValid) return res.status(400).json(errors);
  await usersDB.findOne({email:req.body.email},)
  .then((err,user)=>{
    if(err) return res.status(400).json(err);
    if(user) return res.json({massage:"email already taken"});
    bcrypt.genSalt(10)
    .then((salt)=>{
      bcrypt.hash(req.body.password,salt)
      .then(async (hashPassword)=>{
        req.body.use.password=hashPassword;
        await usersDB.insertMany(req.body)
        .then(()=>{res.send("success")})
        .catch(err=>res.send(err))
      })
      .catch(err=>{console.log(err);})
    })
    .catch(error=>{console.log(error);})
  })
}

// const logIn=async (req,res)=>{
//   const {isValid, errors}= validateLogIn(req.body)
//   if(!isValid) return res.status(400).json(errors);
//   const email=req.body.email
//   const password = req.body.Password;
//   await usersDB.findOne({email})
//   .then(user=>{
//     if (!user) {
//       return res.status(404).json({ emailNotFound: "Email not found" });
//   }
//     bcrypt.compare(password, user.password).then(isMatch=>{
//       console.log(password, user.password);
//       if(isMatch){
//         const payload ={
//           id:user.id,
//           name:user.name,
//           email:user.email,
//         }
//         jwt.sign(payload, key, { expiresIn: 31556926 }, (err, token) => {
//           if (err) return res.status(400).json(err)
//           res.json({ success: true, token: `Bearer ${token}` });
//       });
//   }
//   else {
//       return res.status(400).json({ passwordIncorrect: "Password incorrect" });
//   }
// });
// });
// }

const logIn = async (req, res) => {
  const { isValid, errors } = validateLogIn(req.body)
  if (!isValid) return res.status(400).json(errors)
  const email = req.body.email;
  const password = req.body.Password;
  await usersDB.findOne({ email })
      .then(user => {
          if (!user) {
              return res.status(404).json({ emailNotFound: "Email not found" });
          }
          bcrypt.compare(password, user.password).then(isMatch => {
              if (isMatch) {
                  const payload = {
                      id: user.id,
                      name: user.name,
                      email: user.email
                  };
                  jwt.sign(payload, key, { expiresIn: 31556926 }, (err, token) => {
                      if (err) return res.status(400).json(err)
                      res.json({ success: true, token: `Bearer ${token}` });
                  });
              }
              else {
                  return res.status(400).json({ passwordIncorrect: "Password incorrect" });
              }
          });
      });
}

module.exports= {getAllUsers, addNewUser, getUserById, register, logIn}
