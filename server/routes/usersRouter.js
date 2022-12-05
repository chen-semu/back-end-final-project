const {
    getAllUsers,
    addNewUser,
    getUserById,
    logIn
}=require("../controlers/usersCntrl")
const router= require("express").Router()

router.get("/",getAllUsers)
router.post("/",addNewUser)
router.get("/log-in",logIn)
router.get('/byId/:id',getUserById)

module.exports= router
