import { useEffect, useState } from 'react';

import { getStoredtBookList } from '../../Utility/LocalStorage';
import { useLoaderData } from 'react-router-dom';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const PageList = () => {
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

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      
      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };
    return (
        <div className=' flex justify-center'>
           
           
     
        


       
        <BarChart
      width={500}
      height={300}
      data={appliedBooks}
      margin={{
        top: 20,
        right: 2,
        left: 2,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" />
      <YAxis />
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {appliedBooks.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
        </div>
       
     
      
       
        
    );
};

export default PageList;