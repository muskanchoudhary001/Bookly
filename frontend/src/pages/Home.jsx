import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/common/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from "react-icons/md";
import BooksCard from '../components/home/BooksCard';
import BooksTable from '../components/home/BooksTable';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:3000/books');
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
            <div className="flex justify-center items-center gap-x-4 mb-6">
                <button
                    className={`px-4 py-1 rounded-lg transition ${
                        showType === 'table' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-white/20 text-white hover:bg-blue-500 hover:text-white'}`
                    }
                    onClick={() => setShowType('table')}
                >
                    Table
                </button>
                <button
                    className={`px-4 py-1 rounded-lg transition ${
                        showType === 'card' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-white/20 text-white hover:bg-blue-500 hover:text-white'}`
                    }
                    onClick={() => setShowType('card')}
                >
                    Card
                </button>
            </div>

            {/* Header + Add Button */}
            <div className="flex justify-between items-center w-full max-w-6xl mb-6">
                <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
                    📚 Books List
                </h1>
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
