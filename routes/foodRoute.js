const express = require("express");
const router = express.Router();
const Menu = require('../models/menuModel')

router.get("/getallfoods", async (req, res) =>{
    try {
        const foods = await Menu.find({})
        res.send(foods)
    } catch (error) {
        return res.status(400).json({ message: error });}
    });
module.exports = router;
