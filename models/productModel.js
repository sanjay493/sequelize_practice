
const { Sequelize, DataTypes } = require("sequelize");

module.exports =(Sequelize,DataType)=>{
    const Product=sequelize.define("product",{
        title:{
            type:DataTypes.STRING,
            allowNul:false,
        },
        price:{
            type:DataTypes.INTEGER,
        },
        description:{
            type:DataTypes.TEXT,
        },
        published:{
            type:DataTypes.BOOLEAN,
        }
    })
    return Product
}