import { CiLocationOn } from "react-icons/ci";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdOutlineInsertPageBreak } from "react-icons/md";

const WishBooks = ({wishBook}) => {
    const { image, bookName,  author, rating, category, tags, yearOfPublishing, publisher, totalPages
    } = wishBook;
    return (
        <div className="  rounded-xl border-2 flex justify-start mt-10 ">
        <div className="hero-content  flex-col lg:flex-row">
            <div className='bg-base-200 px-16 py-5 rounded-xl lg:w-1/4'>
                <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
            </div>

            <div className="space-y-5 lg:space-y-2">
                <h1 className="text-3xl font-bold">{bookName}</h1>
                <p>By :{author}</p>


                <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-2 lg:gap-10">
                    <p className='font-bold'>Tag</p>
                    <p className='text-[16px] text-green-500 bg-gray-50 p-2 rounded-lg'>#{tags[0]}</p>
                    <p className='text-[16px] text-green-500 bg-gray-50 p-2 rounded-lg'>#{tags[1]}</p>

                    <p className='text-gray-400 flex items-center'><span className="text-xl mr-2"><CiLocationOn /></span> Year of Publishing : {yearOfPublishing
                    }</p>
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-between">
                    <p className='text-gray-400 flex items-center'><span className="text-xl mr-2"><BsFillPeopleFill /></span> Year of Publisher : {totalPages
                    }</p>

                    <p className='text-gray-400 flex items-center'><span className="text-xl mr-2"><MdOutlineInsertPageBreak /></span> page : {publisher
                    }</p>
                </div>

                <hr />

                <div className="flex flex-col lg:flex-row lg:justify-between items-center space-y-3 gap-3">
                    <p ><span className="bg-sky-100 text-sky-500 p-2 rounded-xl">Category : {category}</span></p>
                    <p><span className="bg-orange-100 text-orange-400 p-2 rounded-xl" >Rating : {rating}</span></p>
                    <button className="btn bg-green-500 ">View Details</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default WishBooks;