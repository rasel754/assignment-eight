import { useEffect, useState } from "react";
import Books from './Books';

const BooksContainer = () => {
    

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);

    // console.log(books);


    return (
        <div className='mt-20'>
            <h1 className="text-4xl font-extrabold text-center">Books</h1>

            <div className="mt-12 grid md:grid-cols-3 grid-cols-1 gap-5">
                {
                    books.map(book => <Books book={book} key={book.id}></Books>)
                }

                
            </div>
        </div>
        
    )
}

export default BooksContainer;