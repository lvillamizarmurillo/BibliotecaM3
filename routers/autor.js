import { Router } from "express";
import { con } from "../db/atlas.js";
const appAutor = Router();

let db = await con();
let usuario = db.collection("autor");

appAutor.get("/", async(req,res)=>{
    let db = await con();
    let autor = db.collection("autor");
    let result = await usuario.find({}).toArray();
    res.send(result);
});

export default appAutor; 