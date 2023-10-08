const express = require('express');
const app = express();
const env = require('dotenv').config()
const cors = require('cors')

// Router imports
const RegisterRouter = require('./router/registerUser.router')
const loginRouter = require('./router/login.router')



const PORT = process.env.PORT || 8080

// Miiddleware configuration
app.use(cors())
app.use(express.json());


//Database configuration 
require('./dbInit')()

//Router configuration

app.use('/register',RegisterRouter)
app.use('/signup',loginRouter)



// Port configuration
app.listen(PORT,()=>{
    console.log(`Serving at ${PORT}`);
});