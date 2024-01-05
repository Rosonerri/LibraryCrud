import { Router } from "express";
import { createBook, deleteBook, readBookByCategory, readBookById, readBooks, updateBook } from "../Controller/BookController";

const router: Router = Router();

router.route("/create-book").post(createBook);
router.route("/read-book/:bookId").delete(deleteBook);
router.route("/read-book-id/:bookId").get(readBookById)
router.route("/read-book-category").get(readBookByCategory)
router.route("/update-book/:bookId").patch(updateBook)
router.route("/read-book-id").get(readBooks)

export default router;