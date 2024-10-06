
const  getStoredtBookList =() =>{
    const storedBookList =localStorage.getItem('book-add');
    if(storedBookList){
        return JSON.parse(storedBookList);
    }
    return[];
}



const savedStoredBookList = bookId =>{
    const  storedBookList = getStoredtBookList();
    const exist =storedBookList.find(BooksId => BooksId === bookId);
    if(!exist){
        storedBookList.push(bookId);
        localStorage.setItem('book-add',JSON.stringify(storedBookList))
    }
}

export {getStoredtBookList , savedStoredBookList}





