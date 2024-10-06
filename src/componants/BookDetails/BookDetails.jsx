
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { savedStoredBookList } from '../../Utility/LocalStorage';
import { savedStoredWishBookList } from '../../Utility/wishBooksStorage';
import { useState } from 'react';


const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const bookIdInt = parseInt(bookId);
    const [list, setList] = useState([]);
    const book = books.find(job => job.bookId === bookIdInt)
    console.log(book);


    const handleRead = () => {
        setList(bookIdInt)
        if (list !== bookIdInt) {

            savedStoredBookList(bookIdInt);
            toast.success('Book Added to Read list')
        }
        else {
            toast.error("you have already read this book")
        }
    }

    const handleWishlist = () => {
        if (list !== bookIdInt) {

            savedStoredWishBookList(bookIdInt);

            toast.success('Book added to whish list')
        }
        else {
            toast.error("you have already read this book")
        }
    }
    return (
        <div className=" ">
            <div className="hero-content flex-col lg:flex-row gap-6">
                <div className=' bg-base-200 py-16 flex justify-center w-full'>
                    <img src={book.image} className="max-w-sm rounded-lg shadow-2xl  w-1/3  " />
                </div>
                <div className=' w-full space-y-2'>
                    <h1 className="text-4xl font-bold">{book.bookName}</h1>
                    <h2>By :{book.author}</h2>
                    <hr />
                    <p>{book.category}</p>
                    <hr />
                    <p className="py-6"><span className='font-bold'>Review :</span>
                        {book.review}
                    </p>
                    <div className='flex justify-between'>
                        <p className='font-bold'>Tag</p>
                        <p className="text-[16px] text-green-500 bg-gray-50 p-2 rounded-lg">#{book.tags[0]}</p>
                        <p className="text-[16px] text-green-500 bg-gray-50 p-2 rounded-lg">#{book.tags[1]}</p>
                    </div>
                    <hr />


                    <p className='flex justify-between w-1/2'><span className='text-gray-400'>Number of Pages:</span>{book.totalPages}</p>
                    <p className='flex justify-between w-1/2'><span className='text-gray-400'>Publisher:</span>{book.publisher}</p>
                    <p className='flex justify-between w-1/2'><span className='text-gray-400'>Year of Publishing:</span>{book.yearOfPublishing}</p>
                    <p className='flex justify-between w-1/2'><span className='text-gray-400'>Rating:</span>{book.rating}</p>
                    <button onClick={handleRead} className="btn bg-sky-400 ">Read</button>
                    <button onClick={handleWishlist} className="btn bg-sky-400 ml-3">Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails; 