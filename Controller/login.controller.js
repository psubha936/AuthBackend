const monggose = require('mongoose')
const loginModal = require('../Modal/registerUser.modal')
const bcrypt = require('bcrypt');

module.exports = {
    getSignupData:async (req,res,next)=>{
        try {
            res.json({
                "message":"Logged Successfull"
            })
        } catch (error) {
            console.log(error)
        }
    },
    CheckSignupData:async (req,res,next)=>{
        const {username , password} = req.body
        try {
            const result = await loginModal.findOne({ username: username });
            if(!result){
             res.status(404).json({
                message:"UnAuthorised Access"
             })
             return
            }

            const isPasswordValid = await bcrypt.compare(password, result.password)

            if(!isPasswordValid){
                res.status(401).json({
                    message: "Incorrect Password",
                  });
                  return;
            }
            res.json({
                message:"Logged Successfull",
                data:req.body,
                find:result
            });
        } catch (error) {
            console.log(error)
        }
    }
}