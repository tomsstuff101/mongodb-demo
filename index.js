// connecting to mongoDB

const mongoose = require('mongoose')
const User = require('./models/user')


mongoose.connect('mongodb://localhost:27017/signup',{useNewUrlParser:true})

