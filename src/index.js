const express = require('express');
const pasth = require('path');
const bcrypt = require('bcrypt');
const collection = require('./confiq');

const app = express();

//convert data into json format
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//use EJS as view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

//register user
app.post('/signup', async (req, res) => {
    const data = {
        name: req.body.name,
        password: req.body.password
    }

    const userdata = await collection.insertMany(data);
    console.log(userdata);

});

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
