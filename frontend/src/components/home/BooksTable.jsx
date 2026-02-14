import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <div className="w-full max-w-6xl mx-auto overflow-x-auto">
      <table className="w-full table-auto border-separate border-spacing-y-3">
        {/* Header */}
        <thead>
          <tr className="bg-gray-100 text-gray-700 uppercase text-sm tracking-wide rounded-lg">
            <th className="py-3 px-4 text-left rounded-tl-md">No</th>
            <th className="py-3 px-4 text-left">Title</th>
            <th className="py-3 px-4 text-left max-md:hidden">Author</th>
            <th className="py-3 px-4 text-left max-md:hidden">Publish Year</th>
            <th className="py-3 px-4 text-left rounded-tr-md">Actions</th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {books.map((book, index) => (
            <tr
              key={book._id}
              className="bg-gray-50 shadow-sm rounded-lg hover:shadow-md transition-shadow duration-200"
            >
              <td className="py-3 px-4 text-gray-700">{index + 1}</td>
              <td className="py-3 px-4 text-gray-800 font-medium">{book.title}</td>
              <td className="py-3 px-4 text-gray-700 max-md:hidden">{book.author}</td>
              <td className="py-3 px-4 text-gray-700 max-md:hidden">{book.publishYear}</td>
              <td className="py-3 px-4">
                <div className="flex gap-2 justify-start">
                  <Link 
                    to={`/books/details/${book._id}`} 
                    className="bg-green-100 text-green-700 hover:bg-green-200 rounded-full p-2 shadow transition-all duration-150"
                  >
                    <BsInfoCircle className="text-lg" />
                  </Link>

                  <Link 
                    to={`/books/edit/${book._id}`} 
                    className="bg-yellow-100 text-yellow-600 hover:bg-yellow-200 rounded-full p-2 shadow transition-all duration-150"
                  >
                    <AiOutlineEdit className="text-lg" />
                  </Link>

                  <Link 
                    to={`/books/delete/${book._id}`} 
                    className="bg-red-100 text-red-600 hover:bg-red-200 rounded-full p-2 shadow transition-all duration-150"
                  >
                    <MdOutlineDelete className="text-lg" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
