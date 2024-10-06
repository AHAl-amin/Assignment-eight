import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredtBookList } from "../../Utility/LocalStorage";
import ReadBooks from "../ReadBooks/ReadBooks";


const ReadBookPage = () => {
    const books = useLoaderData();
    // const [tabIndex, setTabIndex] = useState(0);
    // console.log('tabindex', tabIndex)
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
            console.log(books,storedBookIds, booksList)
        }
    }, [])
    return (
        <div>
            {/* <h2>jhsdfjkfhjdh</h2> */}
            
            <div className="space-y-3 ">
                {
                    appliedBooks.map(readBook => <ReadBooks key={readBook.bookId} readBook={readBook}></ReadBooks> )
                }
            </div>
        </div>
    );
};

export default ReadBookPage;