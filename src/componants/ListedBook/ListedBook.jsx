import { useState } from "react";
import {  Link, Outlet, } from "react-router-dom";



const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    // console.log(setTabIndex)
   

    return (
        <div className="my-5">

            <div>
                    <div>
                        <h2 className="text-center font-bold text-3xl bg-slate-300 p-5 rounded-xl">Books</h2>
                    </div>
                    <div className="flex justify-center items-center my-4 ">

                        {/* dropdowen part */}
                        <details className="dropdown ">
                            <summary className="m-1 btn bg-green-500 ">Sort By</summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li><a>Rating</a></li>
                                <li><a>page of number</a></li>
                                <li><a>Name</a></li>
                            </ul>
                        </details>

                    </div>
                </div>
                <div className="">
                    <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                        <Link to="" onClick={() => setTabIndex(0)} className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'
                            }  `}
                        >

                            <span>Read Books</span>
                        </Link>
                        <Link to="wishlist" onClick={() => setTabIndex(1)} className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'
                            }  `}
                        >

                            <span>Wishlist Books</span>
                        </Link>

                    </div>
                    <Outlet></Outlet>
                </div>
           
           
        </div>

    );
};

export default ListedBooks;