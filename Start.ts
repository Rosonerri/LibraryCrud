console.clear()
import express, { Application } from "express"
import cors from "cors";
import {mainApp} from "./mainApp"

const Port: number = 6000;
const app: Application = express();

app.use(cors())
app.use(express.json())

mainApp(app);

const server = app.listen(Port, ()=>{
    console.log()
    console.log("Server Connected.....🚀🚀 on Port", Port)
});

process.on("uncaughtException", (err: Error)=>{
    console.log("uncaughtException", err);

    process.exit(1)
})

process.on("unhandledRejection", (reason: any)=>{
    console.log("unhandledRejection", reason)

    server.close(()=>{
        process.exit(1);
    });
});



