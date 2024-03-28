import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWish } from "../utility/localstorage";
import WishListed from "./WishListed";

const WishList = () => {
    const books = useLoaderData();

    const [wish, setWish] = useState([]);
    
    const [displayWish, setDisplayWish] = useState([]);

    const handleBookFilter = (filter) => {
        let sortedBooks = [...wish];

        if (filter === 'rating') {
            sortedBooks.sort((a, b) => b.rating - a.rating);
        } else if (filter === 'pages') {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
        } else if (filter === 'year') {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }

        setDisplayWish(sortedBooks);
    };

    useEffect(() => {

        const storedWishId = getStoredWish();

        if (books.length > 0) {
            const wishedBooks = [];
            for (const id of storedWishId) {
                const book = books.find(book => book.id === id)
                if (book) {
                    wishedBooks.push(book)
                }
            }
            setWish(wishedBooks);
            setDisplayWish(wishedBooks);
        }
    }, [])

    return (

        <div className="flex flex-col gap-5 relative">
            <div className="text-center md:absolute right-0 top-[-75px]">
                <select className="w-[100px] border-2 rounded-lg p-2" onChange={(e) => handleBookFilter(e.target.value)}>
                    <option value="rating">Sort By</option>
                    <option value="rating">Rating</option>
                    <option value="pages">Number Of Pages</option>
                    <option value="year">Published Year</option>
                </select>
            </div>

            {displayWish.map(book => <WishListed key={book.id} book={book}></WishListed>)}
        </div>

    )
}

export default WishList;
