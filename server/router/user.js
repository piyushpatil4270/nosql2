const express = require("express");
const router = express.Router();
const Product = require("../model/user");
const { where } = require("sequelize");

router.post("/addUser", async(req, res, next) => {
  const body = req.body;
  console.log(body);
 const user=await  Product.create({
    username: body.username,
    email: body.email,
    phone: body.phone,
  });
  res.json(user)
});

router.get("/getUsers", (req, res, next) => {
  Product.findAll()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

router.post("/delUser", (req, res, next) => {
    const id=req.body.id
    console.log(req.body)
    Product.destroy({where:{id:id}})
    res.json("Deleted User")
});

module.exports = router;
