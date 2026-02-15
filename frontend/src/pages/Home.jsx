import React, { useState, useEffect } from 'react';
import api from '../services/api';
import Spinner from '../components/common/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from "react-icons/md";
import BooksCard from '../components/home/BooksCard';
import BooksTable from '../components/home/BooksTable';
import HelloGreet from '../components/common/HelloGreet';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                setLoading(true);
                const response = await api.get('http://localhost:3000/api/books');
                setBooks(response.data.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchBooks();
    }, []);

    return (
        <div className="min-h-screen p-4  flex flex-col items-center">

            {/* Buttons to toggle Table/Card */}
            <div className="flex justify-center items-center gap-3 mb-6">
                {/* Table Button */}
                <button
                    onClick={() => setShowType('table')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-base transition-all duration-150
                     ${showType === 'table'
                              ? 'bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 text-white shadow-md scale-105'
                            : 'bg-gray-100 text-gray-800 hover:bg-gradient-to-r hover:from-blue-300 hover:via-blue-500 hover:to-blue-700 hover:text-white hover:shadow-md hover:scale-105'}`
                    }
                >
                    📋 Table
                </button>

                {/* Card Button */}
                <button
                    onClick={() => setShowType('card')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-base transition-all duration-150
                      ${showType === 'card'
                            ? 'bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 text-white shadow-md scale-105'
                            : 'bg-gray-100 text-gray-800 hover:bg-gradient-to-r hover:from-blue-300 hover:via-blue-500 hover:to-blue-700 hover:text-white hover:shadow-md hover:scale-105'}`
                    }
                >
                    🗂️ Card
                </button>
            </div>






            {/* Header + Add Button */}
            <div className="flex justify-between items-center w-full max-w-6xl mb-6">
                 <HelloGreet role="Admin" />
                <Link to='/books/create'>
                    <MdOutlineAddBox className='text-sky-800 text-5xl hover:scale-110 transition-transform' />
                </Link>
            </div>

            {/* Display Table or Cards */}
            {loading ? (
                <Spinner />
            ) : showType === 'table' ? (
                <BooksTable books={books} />   // Table remains exactly as it was
            ) : (
                <div className="relative z-10 w-full max-w-6xl mx-auto">
                    <BooksCard books={books} />  {/* Card view */}
                </div>
            )}
        </div>
    );
};

export default Home;
