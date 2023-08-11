import express from "express";
import dotenv from "dotenv";
import appAutor from "./routers/autor.js";
dotenv.config();
let appExpress = express();

appExpress.use(express.json());
appExpress.use("/autor",appAutor);
let config = JSON.parse(process.env.MY_SERVER);
appExpress.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});

