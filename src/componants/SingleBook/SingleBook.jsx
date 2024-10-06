import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleBook = ({ book }) => {
    const {bookId, image,author,bookName,rating,category,tags, } = book;
    return (
        <Link to={`/book-details/${bookId}`} className="card   shadow-xl p-5 my-10">
            <div className="bg-[#F3F3F3] py-5 rounded-lg">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl bg-[#F3F3F3]" />
            </figure>
            </div>
            <div className="flex gap-10 mt-5">
                <h2 className="text-[16px] text-green-500 bg-gray-50 p-2 rounded-lg">{tags[0]}</h2>
                <h2 className="text-[16px] text-green-500 bg-gray-50 p-2 rounded-lg">{tags[1]}</h2>
              
            </div>
            <div className="space-y-5">
                <h2 className="card-title font-bold text-2xl">{bookName}</h2>
                <p className=" text-[16px]">By: <span className="font-bold">{author}</span></p>
                <div className="flex justify-between">
                   <p>{category}</p>
                 
                   <p className="flex items-center gap-2">{rating}<FaRegStar /></p>
                </div>
            </div>
        </Link>
    );
};

export default SingleBook;