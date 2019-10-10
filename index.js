// connecting to mongoDB

const mongoose = require('mongoose')
const User = require('./models/user')


mongoose.connect('mongodb://localhost:27017/signup',{useNewUrlParser:true})



// filling in data into the schema, which is an object, 
// give it a string

const user = new User({
    name:'your name',
    email:'yourName@mail.com',
    password:'secretpassword'
})


user.save()

