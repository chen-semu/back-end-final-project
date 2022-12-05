const{
    getAllStores,
    addNewStore
}=require("../controlers/storesCntrl")
const router= require("express").Router()

router.get("/",getAllStores)
router.post("/",addNewStore)
// router.get('/byId/:id',getUserById)

module.exports= router