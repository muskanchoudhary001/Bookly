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
        const token = localStorage.getItem("token");

        console.log("TOKEN BEING SENT:", token);

        const res = await axios.get("http://localhost:3000/api/books", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("API RESPONSE:", res.data);

        setBooks(res.data.data);

      } catch (error) {
        console.log("Fetch books error:", error.response?.data || error.message);
      }
    };

    fetchBooks();
  }, []);




  return (
    <div className="p-8">
      <h1 className="text-4xl font-extrabold mb-8 drop-shadow-sm">
        <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 bg-clip-text text-transparent">
          Welcome
        </span>{" "}
        <span className="text-blue-900 font-bold">
          {user?.name}
        </span>{" "}
        <span className="wave">👋</span>
      </h1>

      <BooksCard books={books} />

    </div>

  );
};

export default UserHome;
