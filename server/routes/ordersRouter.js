const{
    getAllOrders,
    addNewOrder
}=require("../controlers/ordersCntrl")
const router= require("express").Router()

router.get("/",getAllOrders)
router.post("/",addNewOrder)
// router.get('/byId/:id',getUserById)

module.exports= router