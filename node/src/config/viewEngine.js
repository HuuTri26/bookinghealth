// ES6
// var express = require('express'); var:toan cuc , let: bien cuc bo
import express from "express";
let configViewEngine = (app) => {
    //arrow function
    app.use(express.static("./src/public"));
    //client acess to Data.
    app.set("view engine", "ejs");//logic trong file html
    app.set("views", "./src/views");//=>caau hinh mvc
}

module.exports = configViewEngine;