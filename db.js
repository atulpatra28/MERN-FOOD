const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://siribalabhadrasai:Webtechprj23@cluster0.hwjge1k.mongodb.net/mern-food?retryWrites=true&w=majority'

mongoose.connect(mongoURL, { useUnifiedTopology:true, useNewUrlParser:true })

var db = mongoose.connection

db.on( 'connected', ()=>{
    console.log("DB connected");
})

db.on('error',()=>{
    console.log("Connection Failed");
})

module.exports = mongoose