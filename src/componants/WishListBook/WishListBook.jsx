import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredtBookList } from "../../Utility/LocalStorage";
import ReadWishPageBar from "../ReadWishPageList/ReadWishPageBar";
import WhislistPage from "../WhislistPage/WhislistPage";


const WishListBook = () => {
    const books = useLoaderData();
  
    const [appliedBooks, setAppliedBooks] = useState([]);
    useEffect(() => {
        const storedBookIds = getStoredtBookList();

        if (books?.length > 0) {

            const booksList = [];
            for (const bookId of storedBookIds) {
                const book = books.find(book => book.bookId == bookId);
                console.log(book)
                if (book) {
                    booksList.push(book)
                }
            }
            setAppliedBooks(booksList)
            // console.log(books,storedBookIds, booksList)
        }
    }, [])
    return (

        <div className="my-5">

           <h1>hlw</h1>
 
           
        </div>
    );
};

export default WishListBook;