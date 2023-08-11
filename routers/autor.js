import { Router } from "express";
import { con } from "../db/atlas.js";
import { limitGrt } from "../limit/config.js"
const appAutor = Router();

let db = await con();
let autor = db.collection("autor");

appAutor.get("/", limitGrt(), async(req,res)=>{
    if(!req.rateLimit) return; 
    console.log(req.rateLimit);
    let db = await con();
    let autor = db.collection("autor");
    let result = await autor.find({}).toArray();
    res.send(result);
});

export default appAutor; 