import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBook } from "../utility/localstorage";
import ReadList from "./ReadList";

const Read = () => {

    const books = useLoaderData();

    const [displayBook, setDisplayBook] = useState([]);

    const handleBookFilter = (filter) => {
        let sortedBooks = [...displayBook];

        if (filter === 'rating') {
            sortedBooks.sort((a, b) => b.rating - a.rating);
        } else if (filter === 'pages') {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
        } else if (filter === 'year') {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }

        setDisplayBook(sortedBooks);
    };

    useEffect(() => {
        const storedBookId = getStoredBook();
        if (books.length) {
            const bookRead = [];
            for (const id of storedBookId) {
                const book = books.find((book) => book.id === id);
                if (book) {
                    bookRead.push(book);
                }
            }
            setDisplayBook(bookRead);
        }
    }, [books]);





    return (
        <div className="flex flex-col gap-5 relative">

            <div className="text-center md:absolute right-0 top-[-75px]">
                <select className=" w-[100px] border-2 rounded-lg p-2" onChange={(e) => handleBookFilter(e.target.value)}>
                    <option value="rating">Sort By</option>
                    <option value="rating">Rating</option>
                    <option value="pages">Number Of Pages</option>
                    <option value="year">Published Year</option>
                </select>
            </div>


            {displayBook.map((book) => (
                <ReadList book={book} key={book.id}></ReadList>
            ))}
        </div>
    );
};

export default Read;
