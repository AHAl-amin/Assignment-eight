import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Root from './componants/Root/Root';
import Home from './componants/Home/Home';
import ListedBook from './componants/ListedBook/ListedBook';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PageList from './componants/PageList/PageList';
import BookDetails from './componants/BookDetails/BookDetails';

import ReadWishPageBar from './componants/ReadWishPageList/ReadWishPageBar';
import ErrorPage from './componants/Error/ErrorPage';
import WishListBook from './componants/WishListBook/WishListBook';
import ReadBookPage from './componants/ReadBookPage/ReadBookPage';
import WishListBookPage from './componants/WishListBookPage/WishListBookPage';
import NewCollect from './componants/NewCollect/NewCollect';
import AboutBook from './componants/AboutBook/AboutBook';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
       
      },
      {
        path:"/Listed",
        element:<ListedBook></ListedBook>,
        loader:() => fetch('/Books.json'),
        children:[
          {
            index: true,
            element:<ReadBookPage></ReadBookPage>,
            loader:() => fetch('/Books.json'),
          },
          {
            path:'wishlist',
            element:<WishListBookPage></WishListBookPage>,
            loader:() =>fetch ('/Books.json')
          }
        ]
    
      },
     
      {
        path:"/page",
        element:<PageList></PageList>,
        loader:() => fetch('/Books.json')
      },
      {
        path:"/collect",
        element:<NewCollect></NewCollect>
      },
      {
        path:"/about",
        element:<AboutBook></AboutBook>
      },
      {
        path:"/book-details/:bookId",
        element:<BookDetails></BookDetails>,
        loader:() => fetch('/Books.json')
      },
      {
        path:'/ReadWish',
        element:<ReadWishPageBar></ReadWishPageBar>,
        loader: () => fetch('/Books.json'),
     
     
        
      }
    

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
