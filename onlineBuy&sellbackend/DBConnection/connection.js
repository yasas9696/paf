const SEQ= require('sequelize');
const sequelize = new SEQ('paf','root','',{
    host:'localhost',dialect:'mysql',operatorAliases:false,pool:{
        max:5,min:0,acqire:30000,idle:10000
    }
});

module.exports.seq = sequelize
