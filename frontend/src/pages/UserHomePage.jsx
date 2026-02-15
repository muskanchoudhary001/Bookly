import { useEffect, useState } from "react";
import axios from "axios";
import BooksCard from "../components/home/BooksCard";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import HelloGreet from "../components/common/HelloGreet";
 

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
      <HelloGreet name={user?.name} />
      <BooksCard books={books} />

    </div>

  );
};

export default UserHome;
