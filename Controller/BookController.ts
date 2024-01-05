import {Request, Response} from "express"
import { StatusCode } from "../Utils/StatusCode"
import {client, db} from "../Utils/dbConfig"
import { BookModel } from "../Model/BookModel"
import { ObjectId } from "mongodb";

export const createBook = async (req: Request, res:Response)=>{
try {
   await client.connect();
   const {title, author, category, description, numberOfPages, interesting } = req.body

   const Book = new BookModel(title, author, description, category, numberOfPages, interesting);
   await db.insertOne(Book);

   return res.status(StatusCode.Created).json({
    message: "Book Created",
    data: Book
   });
} catch (error) {
    return res.status(StatusCode.Bad_request).json({
        message: "Error While Creating BookStore"
    });
}
};

export const readBooks = async (req: Request, res: Response)=>{
    try {
        await client.connect();
        const Book = await db.find().toArray();
        return res.status(StatusCode.Ok).json({
            message: "Book Found",
            data: Book
        });
    } catch (error) {
        return res.status(StatusCode.Bad_request).json({
            message:  "Error",
        });
    };
}

export const readBookById = async (req: Request, res: Response)=>{
try{
    await client.connect();
    const {BookId} = req.params

    const Book = await db.findOne({_id: new ObjectId(BookId)});

    return res.status(StatusCode.Ok).json({
        message: "Book found by Id",
        data: Book
    });
}catch(error){
    return res.status(StatusCode.Bad_request).json({
        message: "Error",
    });
}
}

export const readBookByCategory = async (req:Request, res:Response)=>{
try {
    await client.connect()
    const {category} = req.body

    const Book = await db.find({category}).toArray()

    return res.status(StatusCode.Ok).json({
        message: "Book Found by Category",
        data: Book
    });
} catch (error) {
    return res.status(StatusCode.Bad_request).json({
        message: "Error",
    })
}
}

export const updateBook = async (req: Request, res:Response) =>{
try {
    await client.connect();
    const {bookId} = req.params;
    const {title} = req.body
    const Book = await db.updateOne({_id: new ObjectId(bookId)}, {$set: {title} });

    return res.status(StatusCode.Created).json({
        message: "Book Updated Succesfully",
        data: Book
    })
} catch (error) {
    return res.status(StatusCode.Bad_request).json({
       message: "Error",
    });
}
}

export const deleteBook = async (req: Request, res:Response)=>{
try {
    await client.connect()
    const {bookId} = req.params;

    await db.deleteOne({ _id: new ObjectId(bookId)});
    return res.status(StatusCode.Created).json({
        message: "Book deleted succesfully"
    })
} catch (error) {
    return res.status(StatusCode.Bad_request).json({
        message: " Error while deleting books"
    })
}
}