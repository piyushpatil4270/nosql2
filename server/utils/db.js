const Sequelize = require("sequelize")

const sequelize=new Sequelize('users','root','Piyush@nyc85',{dialect:'mysql',host:'localhost'})


module.exports=sequelize