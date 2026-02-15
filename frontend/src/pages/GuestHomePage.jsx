import { useEffect, useState } from "react";
import axios from "axios";
import BooksCard from "../components/home/BooksCard";
import HelloGreet from "../components/common/HelloGreet"

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
      <div className="text-left">
          <HelloGreet role="Guest" />
      </div>
      <BooksCard books={books} />
    </div>
  );
};

export default GuestHome;
