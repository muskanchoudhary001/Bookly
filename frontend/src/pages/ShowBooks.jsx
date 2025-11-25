import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const ShowBooks = () => {

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const showBooks = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`http://localhost:3000/books/${id}`)
        setBook(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false);
      }
    }
    showBooks()
  }, [id])

  return (
  <div className='p-4'>
    <BackButton />
    <h1 className='text-3xl my-4 mb-14'>Show Book</h1>

    {loading ? (
      <Spinner />
    ) : !book ? (
      <p className="text-xl text-gray-500">No book found...</p>
    ) : (
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
        
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Id</span>
          <span>{book._id}</span>
        </div>

        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Title</span>
          <span>{book.title}</span>
        </div>

        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Author</span>
          <span>{book.author}</span>
        </div>

        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
          <span>{book.publishYear}</span>
        </div>

        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>No Of Copies</span>
          <span>{book.noOfCopies}</span>
        </div>

        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Create Time</span>
          <span>{book.createdAt ? new Date(book.createdAt).toString() : "N/A"}</span>
        </div>

        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
          <span>{book.updatedAt ? new Date(book.updatedAt).toString() : "N/A"}</span>
        </div>

      </div>
    )}
  </div>
);

}

export default ShowBooks