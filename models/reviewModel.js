const { Sequelize, DataTypes } = require("sequelize");

module.exports =(Sequelize,DataType)=>{
    const Review=sequelize.define("review",{
        rating:{
            type:DataTypes.INTEGER,
        },
        
        description:{
            type:DataTypes.TEXT,
        },
        
    })
    return Review
}