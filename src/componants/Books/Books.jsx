import { useEffect, useState } from "react";
import SingleBook from "../SingleBook/SingleBook";


const Books = () => {
const [books ,setBooks] =useState([]);


useEffect(() =>{
    fetch('Books.json')
    .then(res => res.json())
    .then(data =>setBooks(data));
} ,[])

    return (
       <div>
         <div>
            <h2 className="text-4xl font-bold text-center">Books</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {
                books.map(book => <SingleBook key={books.bookId} book={book}></SingleBook>)
            }
        </div>
       </div>
    );
};

export default Books;