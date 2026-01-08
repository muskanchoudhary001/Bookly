import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose'
import { Book } from "./models/bookModel.js";
import booksRoutes from './routes/booksRoutes.js'
import cors from 'cors'
import path from "path"


const app = express();

// Middleware (for JSON parsing, commonly needed)
app.use(express.json());

//Middle ware for book covers
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

//Middleware for handling CORS POLICY
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ["Content-Type"],
})
)

// Route
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Bookly 📚");
});

//BookRoute using express route

app.use('/books', booksRoutes);

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

