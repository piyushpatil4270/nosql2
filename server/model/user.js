const Sequelize=require("sequelize")
const sequelize=require("../utils/db")


const User=sequelize.define('User',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    username:Sequelize.STRING,
    email:Sequelize.STRING,
    phone:Sequelize.STRING
},{
    timestamps:false
});

module.exports=User



