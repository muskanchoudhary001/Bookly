import React, { useState } from "react";
import BackButton from "../components/common/BackButton";
import Spinner from "../components/common/Spinner";
import api from "../services/api"
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

    api
      .post("/books", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book created successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar(
          error.response?.data?.message || "Error creating book",
          { variant: "error" }
        );
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* Decorative Images */}
     <img
        src="./src/assets/LoginAssets/1.webp"
        alt="decor"
        className="absolute top-20 left-16 w-36 opacity-80 rotate-12 z-0"
      />

      <img
        src="./src/assets/LoginAssets/2.webp"
        alt="decor"
        className="absolute top-32 right-24 w-36 opacity-80 -rotate-6 z-0"
      />

      <img
        src="./src/assets/LoginAssets/3.webp"
        alt="decor"
        className="absolute bottom-28 left-24 w-36 opacity-80 rotate-6 z-0"
      />

      <img
        src="./src/assets/LoginAssets/4.webp"
        alt="decor"
        className="absolute bottom-20 right-20 w-36 opacity-80 -rotate-12 z-0"
      />

      {/* Form Card */}
      <div className="relative z-10 max-w-md w-full bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-blue-200/40">

        <BackButton />

        <h2 className="text-3xl font-bold mb-6 text-center
        bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
          Create New Book
        </h2>

        {loading && <Spinner />}

        <div className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-3 border border-blue-200 rounded-xl
            focus:outline-none focus:ring-2 focus:ring-blue-500
            shadow-inner bg-blue-50/40
            placeholder:text-gray-500 text-gray-800"
          />

          <input
            type="text"
            placeholder="Author Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="p-3 border border-blue-200 rounded-xl
            focus:outline-none focus:ring-2 focus:ring-blue-500
            shadow-inner bg-blue-50/40
            placeholder:text-gray-500 text-gray-800"
          />

          <input
            type="text"
            placeholder="Publish Year"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="p-3 border border-blue-200 rounded-xl
            focus:outline-none focus:ring-2 focus:ring-blue-500
            shadow-inner bg-blue-50/40
            placeholder:text-gray-500 text-gray-800"
          />

          <input
            type="text"
            placeholder="Number of Copies"
            value={noOfCopies}
            onChange={(e) => setNoOfCopies(e.target.value)}
            className="p-3 border border-blue-200 rounded-xl
            focus:outline-none focus:ring-2 focus:ring-blue-500
            shadow-inner bg-blue-50/40
            placeholder:text-gray-500 text-gray-800"
          />

          {/* File Input */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setCoverImage(e.target.files[0])}
            className="p-3 border border-blue-200 rounded-xl
            bg-blue-50/40 text-gray-600"
          />

          <button
            onClick={handleSaveBook}
            disabled={loading}
            className="mt-4 px-6 py-3 rounded-4xl
            bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800
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
