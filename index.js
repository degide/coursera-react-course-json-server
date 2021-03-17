const path = require('path')
const express = require('express')
const jsonServer = require('json-server')
var demodata = require('./db.json')


const router = jsonServer.router(demodata) // Express router
const server = jsonServer.create()       // Express server
// Avoid CORS issue
server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

server.use('/', express.static(path.join(__dirname, 'public')))
server.use(router)

const PORT = process.env.PORT || 3001
server.listen(PORT, "http://localhost", ()=> {
    console.log(`[${new Date()}] Server started on port: ${PORT}`);
})