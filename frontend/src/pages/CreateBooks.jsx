import React, { useState } from "react";
import BackButton from "../components/common/BackButton";
import Spinner from "../components/common/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [noOfCopies, setNoOfCopies] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("publishYear", publishYear);
    formData.append("noOfCopies", noOfCopies);
    formData.append("coverImage", coverImage);

    setLoading(true);

    axios
      .post("http://localhost:3000/books", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book created successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error creating book", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* Decorative Images (same vibe as Login) */}
      <img
        src="./src/assets/LoginAssets/1.webp"
        className="absolute top-20 left-16 w-36 opacity-30 rotate-12 z-0"
        alt=""
      />
      <img
        src="./src/assets/LoginAssets/2.webp"
        className="absolute top-32 right-24 w-36 opacity-25 -rotate-6 z-0"
        alt=""
      />
      <img
        src="./src/assets/LoginAssets/3.webp"
        className="absolute bottom-28 left-24 w-36 opacity-20 rotate-6 z-0"
        alt=""
      />
      <img
        src="./src/assets/LoginAssets/4.webp"
        className="absolute bottom-20 right-20 w-36 opacity-30 -rotate-12 z-0"
        alt=""
      />

      {/* Form Card */}
      <div className="relative z-10 max-w-md w-full bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-gray-200">

        <BackButton />

        <h2 className="text-3xl font-bold mb-6 text-center text-pink-500">
          Create New Book
        </h2>

        {loading && <Spinner />}

        <div className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-3 border border-gray-300 rounded-xl
            focus:outline-none focus:ring-2 focus:ring-pink-400
            shadow-inner bg-gray-50
            placeholder:text-gray-500 text-gray-800"
          />

          <input
            type="text"
            placeholder="Author Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="p-3 border border-gray-300 rounded-xl
            focus:outline-none focus:ring-2 focus:ring-pink-400
            shadow-inner bg-gray-50
            placeholder:text-gray-500 text-gray-800"
          />

          <input
            type="text"
            placeholder="Publish Year"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="p-3 border border-gray-300 rounded-xl
            focus:outline-none focus:ring-2 focus:ring-pink-400
            shadow-inner bg-gray-50
            placeholder:text-gray-500 text-gray-800"
          />

          <input
            type="text"
            placeholder="Number of Copies"
            value={noOfCopies}
            onChange={(e) => setNoOfCopies(e.target.value)}
            className="p-3 border border-gray-300 rounded-xl
            focus:outline-none focus:ring-2 focus:ring-pink-400
            shadow-inner bg-gray-50
            placeholder:text-gray-500 text-gray-800"
          />

          {/* File Input */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setCoverImage(e.target.files[0])}
            className="p-3 border border-gray-300 rounded-xl
            bg-gray-50 text-gray-600"
          />

          <button
            onClick={handleSaveBook}
            disabled={loading}
            className="mt-4 px-6 py-3 rounded-4xl
            bg-gradient-to-r from-pink-500 to-pink-700
            text-white font-semibold text-lg
            shadow-lg hover:scale-105 transition-transform
            duration-300 disabled:opacity-50"
          >
            Save Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBooks;
