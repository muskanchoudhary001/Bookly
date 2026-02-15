import React, { useEffect, useState } from 'react'
import api from '../services/api'
import { useParams } from 'react-router-dom'
import BackButton from '../components/common/BackButton'
import Spinner from '../components/common/Spinner'

const ShowBooks = () => {
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  // Get logged-in user role
  const user = JSON.parse(localStorage.getItem("user"))
  const role = user?.role || "guest"

  useEffect(() => {
    const showBooks = async () => {
      try {
        setLoading(true)
        const response = await api.get(`/books/${id}`)
        setBook(response.data.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    showBooks()
  }, [id])

  // Reusable Detail Row Component
  const DetailRow = ({ label, value }) => (
    <div className="flex justify-between items-center 
    bg-white/40 px-4 py-3 rounded-xl 
    shadow-sm hover:bg-white/60 transition duration-300">
      <span className="text-blue-600 font-medium">{label}</span>
      <span className="text-gray-800 font-semibold">{value}</span>
    </div>
  )

  return (
    <div className="min-h-screen relative overflow-hidden p-6">

      {/* Background Glow */}
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
        bg-white/30 backdrop-blur-2xl
        border border-blue-300/30
        rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)]
        p-10 space-y-6 text-gray-800
        transition-all duration-300 hover:scale-[1.02]">

          {/* Cover Image */}
          {book.coverImage && (
            <div className="flex justify-center mb-4">
              <img
                src={`http://localhost:3000${book.coverImage}`}
                alt={book.title}
                className="w-44 h-60 object-cover rounded-2xl
                shadow-xl border border-blue-200/40"
              />
            </div>
          )}

          {/* Title & Author (Everyone) */}
          <h2 className="text-2xl font-bold text-center text-blue-700">
            {book.title}
          </h2>

          <p className="text-center text-gray-600 italic">
            by {book.author}
          </p>

          <div className="border-t border-blue-200/40 pt-6 space-y-4">

            {/* Publish Year (Everyone) */}
            <DetailRow label="Publish Year" value={book.publishYear} />

            {/* Logged-in Users (User + Admin) */}
            {role !== "guest" && (
              <DetailRow label="Book ID" value={book._id} />
            )}

            {/* Admin Only */}
            {role === "admin" && (
              <>
                <DetailRow label="No Of Copies" value={book.noOfCopies} />
                <DetailRow
                  label="Created At"
                  value={new Date(book.createdAt).toLocaleString()}
                />
                <DetailRow
                  label="Updated At"
                  value={new Date(book.updatedAt).toLocaleString()}
                />
              </>
            )}

          </div>

        </div>
      )}
    </div>
  )
}

export default ShowBooks
