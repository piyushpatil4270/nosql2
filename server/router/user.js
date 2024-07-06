const express = require("express");
const router = express.Router();

const { where } = require("sequelize");
const {add,del,get}=require("../controllers/user")

router.post("/addUser",add );

router.get("/getUsers",get );

router.post("/delUser",del);

module.exports = router;
