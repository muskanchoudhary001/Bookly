import React, { useState } from 'react'
import BackButton from '../components/common/BackButton'
import Spinner from '../components/common/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const DeleteBooks = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  const { enqueueSnackbar } = useSnackbar()

  const handleDeleteBook = () => {
    const confirmed = window.confirm("Are you sure you want to delete this book?");
    if (!confirmed) return;

    setLoading(true);

    axios
      .delete(`http://localhost:3000/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book deleted successfully !!', { varient: 'success' })
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { varient: 'error' })
        console.log(error);
      });
  }

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">

      {/* Glow Backgrounds */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl z-0" />

      <div className="relative z-10 w-full max-w-xl px-4">
        <BackButton />

        <h1
          className="text-4xl font-bold text-center mb-8 
          bg-gradient-to-r from-red-400 to-pink-600 
          bg-clip-text text-transparent"
        >
          Delete Book
        </h1>

        {loading && <Spinner />}

        {/* Glass Card */}
        <div
          className="bg-white/15 backdrop-blur-xl 
          border border-white/20 
          rounded-3xl shadow-2xl 
          p-8 text-center text-white"
        >
          <h3 className="text-lg mb-6 text-white/80">
            Are you sure you want to permanently delete this book?
          </h3>

          <button
            onClick={handleDeleteBook}
            className="w-full py-3 rounded-2xl 
            bg-gradient-to-r from-red-500 to-pink-600 
            text-white font-semibold text-lg 
            shadow-lg hover:scale-105 
            transition-transform duration-300"
          >
            Delete This Book
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteBooks
