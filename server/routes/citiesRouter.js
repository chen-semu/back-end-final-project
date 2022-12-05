const{
    getAllCities,
    addNewCity
}=require("../controlers/citiesCntrl")
const router= require("express").Router()

router.get("/",getAllCities)
router.post("/",addNewCity)
// router.get('/byId/:id',getUserById)

module.exports= router