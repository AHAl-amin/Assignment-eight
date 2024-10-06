import { useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import WishBooks from "../WishBooks/WishBooks";
import { getStoredtWishBookList } from "../../Utility/wishBooksStorage";


const WishListBookPage = () => {
    const books = useLoaderData();
    // const [tabIndex, setTabIndex] = useState(0);
    // console.log('tabindex', tabIndex)
    const [appliedBooks, setAppliedBooks] = useState([]);
    useEffect(() => {
        const storedBookIds = getStoredtWishBookList();

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
        <div>
         
            <div className="space-y-3 ">
                {
                    appliedBooks.map(wishBook => <WishBooks key={wishBook.bookId} wishBook={wishBook}></WishBooks> )
                }
            </div>
        </div>
    );
};

export default WishListBookPage;