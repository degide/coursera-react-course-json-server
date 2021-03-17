const path = require('path')
const express = require('express')
const jsonServer = require('json-server')
var demodata = require('./db.json')

const router = jsonServer.router(demodata) // Express router
const app = express()       // Express server

// Avoid CORS issue
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(router)
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=> {
    console.log(`[${new Date()}] Server started on port: ${PORT}`);
})