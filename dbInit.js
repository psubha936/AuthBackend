const mongoose = require('mongoose');

module.exports = ()=>{
    mongoose.connect(process.env.URL,{
        user:process.env.USER,
        pass:process.env.PASSWORD,
        dbName:process.env.DB_NAME
    })
    .then(()=>{
        console.log(`DataBase Connected Successfully`)
    })
    .catch(err=>{
        console.log(err.message)
    })
}