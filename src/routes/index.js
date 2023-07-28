const {Router} = require("express");

const {createUser, getAllUsers, getOneUser} = require("../controllers/user");

const router = Router()

router.post("/users",createUser)
router.get("/getusers",getAllUsers)
router.get("/user/:id",getOneUser)

module.exports = router