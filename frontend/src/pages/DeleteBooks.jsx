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

    // Confirmation popup
    const confirmed = window.confirm("Are you sure you want to delete this book?");
    if (!confirmed) return; // If user clicks Cancel, stop here

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
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3>Are you Sure you want to delete this book ? </h3>

        <button
          className='p-4 bg-red-600 text-white m-8 w-full '
          onClick={handleDeleteBook}

        >
          Delete this Book
        </button>
      </div>
    </div>
  )
}

export default DeleteBooks