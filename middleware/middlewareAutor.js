import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {Autor} from "../controller/storageAutor.js"
import {validate} from 'class-validator';

const appmiddlewareAutor = express();
appmiddlewareAutor.use(async(req,res,next)=>{
    try {
        let data = plainToClass(Autor, req.body, { excludeExtraneousValues: true });
        req.body = data;
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export default appmiddlewareAutor;