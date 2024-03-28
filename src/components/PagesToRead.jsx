import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBook } from '../utility/localstorage';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';


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




const PagesToRead = () => {
    const books = useLoaderData();

    
    const [displayBook, setDisplayBook] = useState([]);

    useEffect(() => {
        const storedBookId = getStoredBook();
        if (books.length) {
            const bookRead = [];
            for (const id of storedBookId) {
                const book = books.find((book) => book.id === id);
                if (book) {
                    bookRead.push({ name: book.bookName, pages: book.totalPages });
                }
            }
            setDisplayBook(bookRead);
        }
    }, [books]);


    

    
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    return (
        <div className="flex flex-col justify-center items-center mt-10 bg-[#13131308] p-5 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    data={displayBook}
                    margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="pages" />
                    <Tooltip />
                    
                    <Bar dataKey="pages" shape={<TriangleBar />}>
                        {displayBook.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PagesToRead;
