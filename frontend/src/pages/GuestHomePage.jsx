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
<h1 className="text-4xl font-extrabold mb-8 drop-shadow-sm">
  <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 bg-clip-text text-transparent">
    Hello Guest
  </span>{" "}
  <span className="wave">👋</span>
</h1>

      <BooksCard books={books} />
    </div>
  );
};

export default GuestHome;
