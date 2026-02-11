import { useEffect, useState } from "react";
import axios from "axios";
import BooksCard from "../components/home/BooksCard";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const UserHome = () => {
  const [books, setBooks] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get("http://localhost:3000/api/books", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setBooks(res.data.data);
    };

    if (user) fetchBooks();
  }, [user]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Welcome {user?.name}
      </h1>
      <BooksCard books={books} />
    </div>
  );
};

export default UserHome;
