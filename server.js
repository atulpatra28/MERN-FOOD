const express = require("express");
const Menu=require('./models/menuModel')

const db = require( './db.js');
const app = express();
app.use(express.json());

const foodsRoute = require('./routes/foodRoute')
const userRoute =require('./routes/userRoute')

app.use('/api/menu/',foodsRoute)
app.use('/api/users',userRoute)

app.get("/",(req,res) => {
    res.send("Server working :) ");
});


const port = process.env.PORT || 5000; // or any other available port
app.listen(port, () => `Server running on port ${port}`);
