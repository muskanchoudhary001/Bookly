import React, { useEffect, useState } from 'react'
import api from '../services/api'
import { useParams } from 'react-router-dom'
import BackButton from '../components/common/BackButton'
import Spinner from '../components/common/Spinner'

const ShowBooks = () => {
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const showBooks = async () => {
      try {
        setLoading(true)
        const response = await api.get(`/books/${id}`)
        setBook(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    showBooks()
  }, [id])

  return (
    <div className="min-h-screen relative overflow-hidden p-6">

      {/* Soft Blue Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/15 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-400/10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative z-20">
        <BackButton />
      </div>

      <h1 className="relative z-10 text-4xl font-bold text-center mb-12
      bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
        Book Details
      </h1>

      {loading ? (
        <Spinner />
      ) : !book ? (
        <p className="relative z-10 text-center text-xl text-blue-500">
          No book found...
        </p>
      ) : (
        <div className="relative z-10 max-w-2xl mx-auto
        bg-white/20 backdrop-blur-xl
        border border-blue-200/40
        rounded-3xl shadow-2xl p-8 space-y-6 text-gray-800">

          {/* Cover Image */}
          {book.coverImage && (
            <div className="flex justify-center">
              <img
                src={`http://localhost:3000${book.coverImage}`}
                alt={book.title}
                className="w-40 h-56 object-cover rounded-2xl
                border border-blue-200/40 shadow-lg"
              />
            </div>
          )}

          {[
            { label: "ID", value: book._id },
            { label: "Title", value: book.title },
            { label: "Author", value: book.author },
            { label: "Publish Year", value: book.publishYear },
            { label: "No Of Copies", value: book.noOfCopies },
            {
              label: "Created At",
              value: book.createdAt ? new Date(book.createdAt).toLocaleString() : "N/A",
            },
            {
              label: "Updated At",
              value: book.updatedAt ? new Date(book.updatedAt).toLocaleString() : "N/A",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b border-blue-200/30 pb-3"
            >
              <span className="text-blue-600 font-medium">{item.label}</span>
              <span className="text-gray-800">{item.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ShowBooks
