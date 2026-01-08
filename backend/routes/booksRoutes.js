import express from "express";
import { Book } from "../models/bookModel.js";
import upload from "../middlewares/uploadMiddleware.js";


const router = express.Router();

// Route to save a new book
router.post(
  "/",
  upload.single("coverImage"),
  async (req, res) => {
    try {
      const book = await Book.create({
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear,
        noOfCopies: req.body.noOfCopies,
        coverImage: req.file
          ? `/uploads/books/${req.file.filename}`
          : "",
      });

      res.status(201).json(book);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
);


// Route to get all books
router.get("/", async (request, response) => {
  try {
    const books = await Book.find({});
    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route to get one book
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id);
    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route to update a book
// router.put("/:id", async (request, response) => {
//   try {
//     console.log(`PUT /books/${request.params.id} called with body:`, request.body);  // added log for debugging

//     if (
//       !request.body.title ||
//       !request.body.author ||
//       !request.body.publishYear ||
//       !request.body.noOfCopies
//     ) {
//       return response.status(400).send({
//         message: "Send all required fields: title, author, publishYear, noOfCopies",
//       });
//     }

//     const { id } = request.params;
//     const result = await Book.findByIdAndUpdate(id, request.body);

//     if (!result) {
//       return response.status(404).json({ message: "Book not found" });
//     }

//     return response.status(200).send({ message: "Book updated successfully" });
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });

// Route to update a book (PARTIAL UPDATE)
router.patch(
  "/:id",
  upload.single("coverImage"),
  async (req, res) => {
    try {
      const { id } = req.params;

      const book = await Book.findById(id);
      if (!book) {
        return res.status(404).json({ message: "Book not found" });
      }

      // Update fields ONLY if provided
      if (req.body.title) book.title = req.body.title;
      if (req.body.author) book.author = req.body.author;
      if (req.body.publishYear) book.publishYear = req.body.publishYear;
      if (req.body.noOfCopies) book.noOfCopies = req.body.noOfCopies;

      // Update image ONLY if uploaded
      if (req.file) {
        book.coverImage = `/uploads/books/${req.file.filename}`;
      }

      await book.save();

      return res.status(200).json({
        message: "Book updated successfully",
        book,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  }
);


// Route to delete a book
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }

    return response.status(200).send({ message: "Book deleted successfully!!" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});



export default router;
