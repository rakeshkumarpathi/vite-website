const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb://localhost:27017/Login-tut");

connect.then(() => {
    console.log("Database connected successfully");
}
).catch(() => {
    console.log("Database connection failed");
});

//create schema
const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

//collection part
const collection = new mongoose.model("users",LoginSchema);

module.exports = collection;