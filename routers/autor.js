import { Router } from "express";
import { con } from "../db/atlas.js";
import { limitGrt } from "../limit/config.js";
import appmiddlewareAutor from "../middleware/middlewareAutor.js";
const appAutor = Router();

let db = await con();
let autor = db.collection("autor");

appAutor.get("/", limitGrt(), appmiddlewareAutor, async(req,res)=>{
    if(!req.rateLimit) return; 
    console.log(req.rateLimit);
    let db = await con();
    let autor = db.collection("autor");
    let result = await autor.find({}).toArray();
    const transformedResult = result.map(item => ({
        "hola": item._id,
        "cedula": item.cc,
        "name": item.nombre,
        "lastname": item.apellido,
        "age": item.edad
    }))
    res.send(transformedResult);
});

export default appAutor; 