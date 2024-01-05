import { Application, Request, Response } from "express";
import Book from "./Router/BookRouter"
import {StatusCode} from "./Utils/StatusCode"

export const mainApp = (app: Application)=>{
    app.use("/api/v1", Book);

    app.get("/", (req: Request, res:Response)=>{
        try {
            return res.status(StatusCode.Ok).json({
                message: "Welcome to Our Book API",
            });
        } catch (error) {
            return res.status(StatusCode.Bad_request).json({
                message: "Error"
            });
        }
    });
}