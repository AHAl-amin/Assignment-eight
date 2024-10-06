import { Link } from "react-router-dom";


const Banner = () => {
    return (

        <div className="hero py-10 bg-base-200 rounded-xl my-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
               <div className="w-2/5">
               <img src="https://i.ibb.co/5RMXWbF/banner-book.jpg" className=" rounded-lg  " />
               </div>
                <div className="w-3/5 lg:p-10 space-y-10">
                    <h1 className="text-5xl font-bold mb-10">Books to freshen up your bookshelf</h1>
                   
                    <Link to="/Listed" className="btn bg-green-500 ">View The List</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;