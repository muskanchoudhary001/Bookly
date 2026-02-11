import { useEffect, useState } from "react";
import axios from "axios";
import BooksCard from "../components/home/BooksCard";

const GuestHome = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get("http://localhost:3000/api/books");
      setBooks(res.data.data.slice(0, 10));  // limit 10 here
    };
    fetchBooks();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-5xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">Guest Books</h1>
      
      <BooksCard books={books} />
    </div>
  );
};

export default GuestHome;
