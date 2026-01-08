import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
import BackButton from "../components/common/BackButton";
import Spinner from "../components/common/Spinner";

const EditBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [noOfCopies, setNoOfCopies] = useState("");
  const [existingImage, setExistingImage] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((res) => {
        const data = res.data;
        setTitle(data.title);
        setAuthor(data.author);
        setPublishYear(data.publishYear);
        setNoOfCopies(data.noOfCopies);
        setExistingImage(data.coverImage);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        enqueueSnackbar("Failed to load book details", { variant: "error" });
        navigate("/");
      });
  }, [id, navigate, enqueueSnackbar]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("publishYear", publishYear);
    formData.append("noOfCopies", noOfCopies);

    if (coverImage) {
      formData.append("coverImage", coverImage);
    }

    setLoading(true);

    axios
      .patch(
        `http://localhost:3000/books/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book updated successfully", { variant: "success" });
        navigate("/");
      })
      .catch(() => {
        setLoading(false);
        enqueueSnackbar("Error updating book", { variant: "error" });
      });
  };


  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating Images (same as Login) */}
      <img
        src="./src/assets/LoginAssets/1.webp"
        className="absolute top-20 left-16 w-36 opacity-30 rotate-12"
        alt=""
      />
      <img
        src="./src/assets/LoginAssets/2.webp"
        className="absolute top-32 right-24 w-36 opacity-25 -rotate-6"
        alt=""
      />
      <img
        src="./src/assets/LoginAssets/3.webp"
        className="absolute bottom-28 left-24 w-36 opacity-20 rotate-6"
        alt=""
      />
      <img
        src="./src/assets/LoginAssets/4.webp"
        className="absolute bottom-20 right-20 w-36 opacity-30 -rotate-12"
        alt=""
      />

      {/* Edit Card */}
      <div className="relative z-10 max-w-md w-full bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-gray-200">
        <BackButton />

        <h2 className="text-3xl font-bold mb-6 text-center text-pink-500">
          Edit Books
        </h2>

        {loading && <Spinner />}

        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Book Title"
            value={title || ""}
            onChange={(e) => setTitle(e.target.value)}
            className="p-3 border border-gray-300 rounded-xl 
           bg-gray-50 text-gray-900
           shadow-inner focus:ring-2 focus:ring-pink-400"
            required
          />

          <input
            type="text"
            placeholder="Author"
            value={author || ""}
            onChange={(e) => setAuthor(e.target.value)}
            className="p-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 shadow-inner focus:ring-2 focus:ring-pink-400"
            required
          />

          <input
            type="text"
            placeholder="Publish Year"
            value={publishYear || ""}
            onChange={(e) => setPublishYear(e.target.value)}
            className="p-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 shadow-inner focus:ring-2 focus:ring-pink-400"
            required
          />

          <input
            type="text"
            placeholder="No of Copies"
            value={noOfCopies || ""}
            onChange={(e) => setNoOfCopies(e.target.value)}
            className="p-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 shadow-inner focus:ring-2 focus:ring-pink-400"
            required
          />

          {/* Existing / Preview Image */}
          {(previewImage || existingImage) && (
            <img
              src={
                previewImage
                  ? previewImage
                  : `http://localhost:3000${existingImage}`
              }
              alt="cover"
              className="w-32 h-44 object-cover rounded-xl mx-auto mb-2"
            />
          )}

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="p-2 bg-white text-gray-900 rounded-xl cursor-pointer"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-4 px-6 py-3 rounded-4xl bg-gradient-to-r from-pink-500 to-pink-700 text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform duration-300 disabled:opacity-50"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBooks;
