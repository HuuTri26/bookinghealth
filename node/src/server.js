import express from "express";

import bodyParser from "body-parser";
//user nhap id = 7 ==> server nhan id =7;

import viewEngine from "./config/viewEngine";

import initWebRouter from "./route/web";

import connectDB from "./config/connectDB";

// import cors from 'cors';
require("dotenv").config();

//viet api;

//==> giup chay dong 22.

let app = express();
//cors:
// app.use(cors({ credentials: true, origin: true }));

// Add headers before the routes are defined
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", process.env.URL_REACT);

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
//config app;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRouter(app);

connectDB();

let port = process.env.PORT || 6969;
//Lay tham so tu env.
//if POTT === undefined==> port =6969;
app.listen(port, () => {
  //Callback
  console.log("Backend Nodejs is running on the port: " + port);
});
