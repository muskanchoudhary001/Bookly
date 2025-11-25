import React, { useState, useEffect } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditBooks = () => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const [noOfCopies, setNoOfCopies] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/books/${id}`, {
      // No cancel token provided; just a note
    }).then((response) => {
      setLoading(true);
      if (!response.data || Object.keys(response.data).length === 0) {
        alert("Book not found");
        navigate('/');
        return;
      }
      setTitle(response.data.title);
      setAuthor(response.data.author);
      setPublishYear(response.data.publishYear);
      setNoOfCopies(response.data.noOfCopies);
      setLoading(false);
    }).catch((error) => {
      setLoading(true);
      console.log(error);
      alert("Error fetching book details");
      navigate('/');
    });
  }, [id]);

  const handleEditBook = () => {
    const data = { title, author, publishYear, noOfCopies };

    setLoading(true);
    axios.put(`http://localhost:3000/books/${id}`, data)
      .then(() => {
        setLoading(false);
        alert("Book updated successfully");
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        if (error.response && error.response.status === 404) {
          alert("Book not found - update failed");
          navigate('/');
        } else {
          alert("Update failed");
        }
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Book Here</h1>
      {loading ? <Spinner /> : null}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl my-4 text-gray-500'>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl my-4 text-gray-500'>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl my-4 text-gray-500'>Publish Year</label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl my-4 text-gray-500'>No Of Copies</label>
          <input
            type="text"
            value={noOfCopies}
            onChange={(e) => setNoOfCopies(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button
          className='p-2 bg-sky-600 m-8'
          onClick={handleEditBook}
          disabled={loading}
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default EditBooks;
