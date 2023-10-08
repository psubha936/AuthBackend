const mongoose = require('mongoose');
const RegisterModal = require('../Modal/registerUser.modal')
const bcrypt = require('bcrypt');

module.exports = {
    getRegisterData: async (req, res, next) => {
        try {
            const result = await RegisterModal.find()
            if (!result || result.length === 0) {
                // Use status code 404 for "Not Found" errors
                return res.status(404).json({
                    error: "Data not found"
                });
            }
            res.status(200).json({
                message: {
                    message: "Successfully register data get",
                    data: result
                }
            });
        } catch (error) {
            // Use a generic status code like 500 for internal server errors
            res.status(500).json({
                error: "Internal Server Error"
            });
        }
    },
    PostRegisterData: async (req, res, next) => {
        console.log(req.body)
        const { name, mobile, email, confirmEmail, password, confirmPassword, username, } = req.body;
        try {
            if (password !== confirmPassword) {
                return res.status(400).json({
                    message: "Passwords do not match",
                });
            }

            if (email !== confirmEmail) {
                return res.status(400).json({
                    message: "Email do not match",
                });
            }
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const confirmPasswordhashed= await bcrypt.hash(confirmPassword, saltRounds);
      
            const data = new RegisterModal({
              name: name,
              mobile: mobile,
              email: email,
              confirmEmail: confirmEmail,
              confirmPassword:confirmPasswordhashed,
              password: hashedPassword, // Store the hashed password
              username: username,

            });
            const result = await data.save()
            res.status(200).json({
                message: {
                    message: "Registered Successfully",
                    data: result
                }
            });
        } catch (error) {
            // Use a generic status code like 500 for internal server errors
            res.status(500).json({
                error: error.message
            });
        }
    },
    getSingleRegisterData: async (req, res, next) => {
        const registrationID= req.params.id
        try {
            const result = await RegisterModal.findById(registrationID)
            if (!result || result.length === 0) {
                // Use status code 404 for "Not Found" errors
                return res.status(404).json({
                    error: "Data not found"
                });
            }
            res.status(200).json({
                message: {
                    message: "Successfully User data get",
                    data: result
                }
            });
        } catch (error) {
            // Use a generic status code like 500 for internal server errors
            res.status(500).json({
                error: "Internal Server Error"
            });
        }
    },
    editSingleRegisterData: async (req, res, next) => {
        const registrationID= req.params.id
        const body = req.body
        const options ={new:true}
        try {
            const result = await RegisterModal.findByIdAndUpdate(registrationID,body,options)
            if (!result || result.length === 0) {
                // Use status code 404 for "Not Found" errors
                return res.status(404).json({
                    error: "Data not found"
                });
            }
            res.status(200).json({
                message: {
                    message: "Successfully User data get",
                    data: result
                }
            });
        } catch (error) {
            // Use a generic status code like 500 for internal server errors
            res.status(500).json({
                error: "Internal Server Error"
            });
        }
    },
    deleteSingleRegisterData: async (req, res, next) => {
        const registrationID= req.params.id
        try {
            const result = await RegisterModal.findByIdAndDelete(registrationID)
            if (!result || result.length === 0) {
                // Use status code 404 for "Not Found" errors
                return res.status(404).json({
                    error: "Data not found"
                });
            }
            res.status(200).json({
                message: {
                    message: "Successfully User data Deleted successfully",
                    data: result
                }
            });
        } catch (error) {
            // Use a generic status code like 500 for internal server errors
            res.status(500).json({
                error: "Internal Server Error"
            });
        }
    }

}
