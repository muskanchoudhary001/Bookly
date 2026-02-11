import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";

const BookModel = ({ book, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center 
      bg-blue-950/60 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[600px] max-w-[90%] 
        bg-gradient-to-br from-blue-300/10 via-blue-500/20 to-blue-700/30
        backdrop-blur-xl 
        border border-blue-600/30
        rounded-3xl shadow-2xl p-8 text-white"
      >
        {/* Close Button */}
        <AiOutlineClose
          className="absolute top-5 right-5 text-3xl 
          text-red-300 hover:text-red-500 
          cursor-pointer transition"
          onClick={onClose}
        />

        {/* Publish Year Badge */}
        <span
          className="inline-block mb-4 px-4 py-1 text-sm font-semibold 
          rounded-full bg-gradient-to-r 
          from-blue-400 via-blue-600 to-blue-800"
        >
          {book.publishYear}
        </span>

        {/* Book ID */}
        <p className="text-xs text-blue-100/70 mb-4 break-all">
          {book._id}
        </p>

        {/* Title */}
        <div className="flex items-center gap-3 mb-3">
          <PiBookOpenTextLight className="text-2xl text-blue-300" />
          <h2 className="text-xl font-semibold">
            {book.title}
          </h2>
        </div>

        {/* Author */}
        <div className="flex items-center gap-3 mb-6">
          <BiUserCircle className="text-2xl text-blue-300" />
          <h3 className="text-lg">
            {book.author}
          </h3>
        </div>

        {/* Cover Image */}
        {book.coverImage && (
          <img
            src={`http://localhost:3000${book.coverImage}`}
            alt={book.title}
            className="
      w-40 h-56
      object-cover
      rounded-2xl
      mx-auto
      mb-5
      shadow-lg
      hover:scale-105
      transition-transform
      duration-300
    "
          />
        )}

        {/* Description */}
        <p className="text-blue-100/80 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Animi hic cumque quos quae quas? Provident pariatur rem vitae
          sit assumenda quis, suscipit maiores, dignissimos cum
          praesentium officia, mollitia ipsa minima.
        </p>
      </div>
    </div>
  );
};

export default BookModel;
