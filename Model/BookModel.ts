import { ObjectId } from "mongodb";

export class BookModel{
    public _id: ObjectId;
    public title: string;
    public author: string;
    public description: string;
    public category: string;
    public numberOfPages: number;
    public interesting: boolean;

    constructor(title: string, author: string, description: string, category: string, numberOfPages: number, interesting: boolean){
        this._id = new ObjectId();
        this.title = title
        this.author = author
        this.description = description
        this.category = category
        this.numberOfPages = numberOfPages
        this.interesting = interesting
    }
}