import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";

const BookModel = ({ book, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center 
      bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[600px] max-w-[90%] 
        bg-white/15 backdrop-blur-xl 
        border border-white/20 
        rounded-3xl shadow-2xl p-8 text-white"
      >
        {/* Close Button */}
        <AiOutlineClose
          className="absolute top-5 right-5 text-3xl 
          text-pink-400 hover:text-pink-600 
          cursor-pointer transition"
          onClick={onClose}
        />

        {/* Publish Year Badge */}
        <span
          className="inline-block mb-4 px-4 py-1 text-sm font-semibold 
          rounded-full bg-gradient-to-r 
          from-pink-400 to-pink-600"
        >
          {book.publishYear}
        </span>

        {/* Book ID */}
        <p className="text-xs text-white/60 mb-4 break-all">
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
        <img
          src={`http://localhost:5000/${book.coverImage?.replace(/\\/g, "/")}`}
          alt={book.title}
          className="w-full h-64 object-cover rounded-xl mb-4"
        />


        {/* Description */}
        <p className="text-white/80 leading-relaxed">
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
