import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose'
import { Book } from "./models/bookModel.js";
import  booksRoute from './routes/booksRoute.js'
import cors from 'cors'


const app = express();

// Middleware (for JSON parsing, commonly needed)
app.use(express.json());

//Middleware for handling CORS POLICY
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET','POST','PUT','DELETE'],
  allowedHeaders: ["Content-Type"],
})
)

// Route
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Bookly 📚");
});

//BookRoute using express route

app.use('/books',booksRoute);



/*
//Route to save a new book
app.post('/books', async (request, response) => {
  try {
    if (
     / !request.body.title ||
     / !request.body.author ||
     / !request.body.publishYear ||
     / !request.body.noOfCopies
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title,author,publishYear',

      })
    }

    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
      noOfCopies: request.body.noOfCopies,
    }

    const book = await Book.create(newBook);

    return response.status(201).send(book)
  }
  catch (error) {
    console.log(error.message)
    response.status(500).send({ message: error.message })
  }
})

//Route to get All Books from DB
app.get('/books', async (request, response) => {
  try {
    const books = await Book.find({})

    return response.status(200).json({
      count: books.length,
      data: books
    });

  } catch (error) {
    console.log(error.message)
    response.status(500).send({ message: error.message })
  }
})

//Route to get one Book by id
app.get('/books/:id', async (request, response) => {
  try {

    const { id } = request.params;

    const book = await Book.findById(id)

    return response.status(200).json(book);

  } catch (error) {
    console.log(error.message)
    response.status(500).send({ message: error.message })

  }
})

//Route to update a Book 

app.put('/books/:id', async (request, response) => {
  try {

    if (
     / !request.body.title ||
     / !request.body.author ||
     / !request.body.publishYear ||
     / !request.body.noOfCopies
    ) {
      return response.status(400).send({
        message: "Send all required fields: title , author , publishYear , noOfCopies",
      })
    }

    const { id } = request.params;

    const result = await Book.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Book not found" })
    }

    return response.status(200).send({ message: "Book updated successfully" })

  } catch (error) {
    console.log(error.message)
    response.status(500).send({ message: error.message })

  }
})

//Route to delete a book
app.delete('/books/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Book.findByIdAndDelete(id);

    if(!result){
      return response.status(404).json({message: 'Book not found'})
    }

    return response.status(200).send({message: "Book deleted successfully!! "})

  } catch (error) {
    console.log(error.message)
    response.status(500).send({ message: error.message })
  }
})

*/

//dB connection 
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database')
    // Start server
    app.listen(PORT || 3000, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT || 3000}`);
    });

  })
  .catch((error) => {
    console.log(error);
  })

