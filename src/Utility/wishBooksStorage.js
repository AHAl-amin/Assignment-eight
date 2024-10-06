
const  getStoredtWishBookList =() =>{
    const storedBookList =localStorage.getItem('wish-add');
    if(storedBookList){
        return JSON.parse(storedBookList);
    }
    return[];
}



const savedStoredWishBookList = bookId =>{
    const  storedBookList = getStoredtWishBookList();
    const exist =storedBookList.find(BooksId => BooksId === bookId);
    if(!exist){
        storedBookList.push(bookId);
        localStorage.setItem('wish-add',JSON.stringify(storedBookList))
    }
}

export {getStoredtWishBookList , savedStoredWishBookList}
