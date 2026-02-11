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
      try {
        if (!user?.token) return;

        const res = await axios.get("http://localhost:3000/api/books", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        setBooks(res.data.data);

      } catch (error) {
        console.log("Fetch books error:", error.response?.data || error.message);
      }
    };

    fetchBooks();
  }, [user]);



  return (
    <div className="p-8">
      <h1
        className="
      text-4xl font-extrabold mb-8
      bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800
      bg-clip-text text-transparent
      drop-shadow-sm
    "
      >
        Welcome{" "}
        <span className="text-blue-900 font-bold">
          {user?.name}
        </span>{" "}
        👋
      </h1>

      <BooksCard books={books} />

    </div>

  );
};

export default UserHome;
