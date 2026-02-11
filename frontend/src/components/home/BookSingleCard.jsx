// import { Link, useNavigate } from "react-router-dom";
// import { PiBookOpenTextLight } from "react-icons/pi";
// import { BiUserCircle, BiShow } from "react-icons/bi";
// import { AiOutlineEdit } from "react-icons/ai";
// import { BsInfoCircle } from "react-icons/bs";
// import { MdOutlineDelete } from "react-icons/md";
// import { useState } from "react";
// import BookModel from "./BookModel";

// const BookSingleCard = ({ book }) => {
//   const [showModel, setShowModel] = useState(false);
//   const navigate = useNavigate();

//   const token = localStorage.getItem("token");

//   const handleReadBook = () => {
//     if (token) {
//       navigate("/"); // change later
//     } else {
//       alert("Please register first to read this book");
//       navigate("/register");
//     }
//   };

//   return (
//     <>
//       <div
//         className="group relative 
//         bg-white/60 backdrop-blur-xl
//         border border-white/40
//         rounded-3xl shadow-md
//         p-6 transition-all duration-500
//         hover:-translate-y-3 hover:shadow-2xl"
//       >
//         {/* Publish Year Badge */}
//         <span
//           className="absolute top-4 right-4 
//           px-3 py-1 text-xs font-semibold 
//           rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 
//           text-white shadow-md"
//         >
//           {book.publishYear}
//         </span>

//         {/* Cover Image */}
//         <div className="flex justify-center mb-5">
//           <div
//             className="w-32 h-44 rounded-xl overflow-hidden 
//             shadow-lg transition duration-500
//             group-hover:scale-105"
//           >
//             <img
//               src={`http://localhost:3000${book.coverImage}`}
//               alt={book.title}
//               className="w-full h-full object-cover"
//               onError={(e) => {
//                 e.target.src = "/placeholder-book.png";
//               }}
//             />
//           </div>
//         </div>

//         {/* Title */}
//         <h2 className="text-lg font-bold text-gray-800 text-center line-clamp-2">
//           {book.title}
//         </h2>

//         {/* Author */}
//         <p className="text-sm text-gray-600 text-center mb-4">
//           by {book.author}
//         </p>

//         {/* Divider */}
//         <div className="border-t border-gray-200 my-4"></div>

//         {/* Action Buttons */}
//         <div className="flex justify-center gap-4 mb-4">
//           <button
//             onClick={() => setShowModel(true)}
//             className="p-2 rounded-full bg-blue-100 hover:bg-blue-500 hover:text-white transition duration-300"
//             title="Quick View"
//           >
//             <BiShow />
//           </button>

//           <Link
//             to={`/books/details/${book._id}`}
//             className="p-2 rounded-full bg-indigo-100 hover:bg-indigo-500 hover:text-white transition duration-300"
//             title="Details"
//           >
//             <BsInfoCircle />
//           </Link>

//           {/* Show Edit/Delete only if logged in */}
//           {token && (
//             <>
//               <Link
//                 to={`/books/edit/${book._id}`}
//                 className="p-2 rounded-full bg-amber-100 hover:bg-amber-500 hover:text-white transition duration-300"
//                 title="Edit"
//               >
//                 <AiOutlineEdit />
//               </Link>

//               <Link
//                 to={`/books/delete/${book._id}`}
//                 className="p-2 rounded-full bg-red-100 hover:bg-red-500 hover:text-white transition duration-300"
//                 title="Delete"
//               >
//                 <MdOutlineDelete />
//               </Link>
//             </>
//           )}
//         </div>

//         {/* Read Button */}
//         <button
//           onClick={handleReadBook}
//           className="w-full py-2 rounded-xl 
//           bg-gradient-to-r from-blue-600 to-indigo-600 
//           text-white font-medium tracking-wide
//           shadow-md hover:shadow-lg 
//           hover:scale-[1.02] transition duration-300"
//         >
//           Read Book →
//         </button>
//       </div>

//       {showModel && (
//         <BookModel book={book} onClose={() => setShowModel(false)} />
//       )}
//     </>
//   );
// };

// export default BookSingleCard;


import { Link, useNavigate } from "react-router-dom";
import { BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import BookModel from "./BookModel";

const BookSingleCard = ({ book }) => {
  const [showModel, setShowModel] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.role === "admin";

  const handleReadBook = () => {
    if (token) {
      navigate(`/books/details/${book._id}`);
    } else {
      alert("Please register first to read this book");
      navigate("/register");
    }
  };

  return (
    <>
      <div
        className="group relative 
        bg-sky-100
        border border-sky-300
        rounded-2xl shadow-md
        p-6 transition-all duration-300
        hover:-translate-y-2 hover:shadow-xl"
      >
        {/* Publish Year Badge */}
        <span
          className="absolute top-4 right-4 
          px-3 py-1 text-xs font-semibold 
          rounded-full bg-blue-600 
          text-white"
        >
          {book.publishYear}
        </span>

        {/* Cover Image */}
        <div className="flex justify-center mb-5">
          <div className="w-32 h-44 rounded-lg overflow-hidden shadow-md">
            <img
              src={`http://localhost:3000${book.coverImage}`}
              alt={book.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.target.src = "/placeholder-book.png";
              }}
            />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 text-center line-clamp-2">
          {book.title}
        </h2>

        {/* Author */}
        <p className="text-sm text-gray-700 text-center mb-4">
          by {book.author}
        </p>

        {/* Divider */}
        <div className="border-t border-sky-300 my-4"></div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mb-4">
          {/* Quick View - Allowed for everyone */}
          <button
            onClick={() => setShowModel(true)}
            className="p-2 rounded-full bg-blue-200 hover:bg-blue-500 hover:text-white transition"
            title="Quick View"
          >
            <BiShow />
          </button>

          {/* Details - Allowed for everyone */}
          <Link
            to={`/books/details/${book._id}`}
            className="p-2 rounded-full bg-indigo-200 hover:bg-indigo-500 hover:text-white transition"
            title="Details"
          >
            <BsInfoCircle />
          </Link>

          {/* Admin Only Controls */}
          {isAdmin && (
            <>
              <Link
                to={`/books/edit/${book._id}`}
                className="p-2 rounded-full bg-yellow-200 hover:bg-yellow-500 hover:text-white transition"
                title="Edit"
              >
                <AiOutlineEdit />
              </Link>

              <Link
                to={`/books/delete/${book._id}`}
                className="p-2 rounded-full bg-red-200 hover:bg-red-500 hover:text-white transition"
                title="Delete"
              >
                <MdOutlineDelete />
              </Link>
            </>
          )}
        </div>

        {/* Read Button */}
        <button
          onClick={handleReadBook}
          className="w-full py-2 rounded-lg 
          bg-blue-600 
          text-white font-medium
          hover:bg-blue-700 transition"
        >
          {token ? "Read Book →" : "Register to Read 🔒"}
        </button>
      </div>

      {showModel && (
        <BookModel book={book} onClose={() => setShowModel(false)} />
      )}
    </>
  );
};

export default BookSingleCard;
