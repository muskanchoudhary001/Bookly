import { Link, useNavigate } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import BookModel from "./BookModel";

const BookSingleCard = ({ book }) => {
  const [showModel, setShowModel] = useState(false);
  const navigate = useNavigate();

  // simple auth check (change later if needed)
  const isRegisteredUser = localStorage.getItem("token");

  const handleReadBook = () => {
    if (isRegisteredUser) {
      navigate("/"); // temporary route (you said you will change later)
    } else {
      alert("Please register first to read this book");
      navigate("/register");
    }
  };

  return (
    <>
      <div
        className="relative 
        bg-gradient-to-br from-blue-400/20 via-blue-600/20 to-blue-800/20
        backdrop-blur-xl 
        border border-blue-300/30 rounded-3xl shadow-xl 
        p-6 text-white transition 
        hover:-translate-y-1 hover:shadow-2xl"
      >
        {/* Publish Year */}
        <span
          className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold 
          rounded-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800"
        >
          {book.publishYear}
        </span>

        {/* Cover Image */}
        <div className="flex justify-center mb-4">
          <div
            className="w-28 h-40 rounded-xl overflow-hidden 
            border border-blue-300/30 shadow-lg bg-blue-400/10"
          >
            <img
              src={`http://localhost:3000${book.coverImage}`}
              alt={book.title}
              className="w-full h-full object-cover 
             hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.target.src = "/placeholder-book.png";
              }}
            />
          </div>
        </div>

        {/* ID */}
        <p className="text-[10px] text-blue-100/50 mb-3 break-all text-center">
          {book._id}
        </p>

        {/* Title */}
        <div className="flex items-center gap-2 mb-2">
          <PiBookOpenTextLight className="text-xl text-blue-300 shrink-0" />
          <h2 className="text-sm font-semibold line-clamp-2">
            {book.title}
          </h2>
        </div>

        {/* Author */}
        <div className="flex items-center gap-2 mb-5">
          <BiUserCircle className="text-lg text-blue-300 shrink-0" />
          <p className="text-xs text-blue-100/80 line-clamp-1">
            {book.author}
          </p>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center pt-3 border-t border-blue-300/20">
          <button
            onClick={() => setShowModel(true)}
            className="p-2 rounded-full bg-blue-500/20 
            hover:bg-blue-500/40 transition"
            title="Quick View"
          >
            <BiShow className="text-lg text-blue-300" />
          </button>

          <Link
            to={`/books/details/${book._id}`}
            className="p-2 rounded-full bg-blue-600/20 
            hover:bg-blue-600/40 transition"
            title="Details"
          >
            <BsInfoCircle className="text-lg text-blue-300" />
          </Link>

          <Link
            to={`/books/edit/${book._id}`}
            className="p-2 rounded-full bg-blue-700/20 
            hover:bg-blue-700/40 transition"
            title="Edit"
          >
            <AiOutlineEdit className="text-lg text-blue-300" />
          </Link>

          <Link
            to={`/books/delete/${book._id}`}
            className="p-2 rounded-full bg-blue-800/20 
            hover:bg-blue-800/40 transition"
            title="Delete"
          >
            <MdOutlineDelete className="text-lg text-blue-300" />
          </Link>
        </div>

        {/* ⭐ Read Book Link */}
        <div className="mt-4 text-center">
          <button
            onClick={handleReadBook}
            className="text-sm font-medium text-blue-300 underline 
            hover:text-blue-200 transition"
          >
            Read Book →
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModel && (
        <BookModel book={book} onClose={() => setShowModel(false)} />
      )}
    </>
  );
};

export default BookSingleCard;
