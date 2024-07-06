const Product = require("../model/user");

const addUsers=async(req, res, next) => {
    const body = req.body;
    console.log(body);
   const user=await  Product.create({
      username: body.username,
      email: body.email,
      phone: body.phone,
    });
    res.json(user)
  }

const getUsers= (req, res, next) => {
    Product.findAll()
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  }


const delUser=(req, res, next) => {
    const id=req.body.id
    console.log(req.body)
    Product.destroy({where:{id:id}})
    res.json("Deleted User")
}


module.exports={
    add:addUsers,
    get:getUsers,
    del:delUser

}