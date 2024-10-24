import express from "express";
import { mangasFileRouter } from "./mangas.file.router.js";
const router = express.Router();


export function routerMangas(app){
    app.use("/api/v1", router);

    router.use("/file/mangas", mangasFileRouter);
}