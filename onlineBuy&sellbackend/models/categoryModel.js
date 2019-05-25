const Sequelize = require("sequelize");
const db = require("../DBConnection/connection");

const  categorys = db.seq.define(
    "categorys",
    {
        cname:{
            type:Sequelize.STRING
        },
        
        ccode:{
            type:Sequelize.INTEGER

        },

    },
   { timestamps:false}
    
)

module.exports = categorys;