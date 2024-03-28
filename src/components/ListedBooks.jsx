import { useState } from "react"
import { Link, NavLink, Outlet } from "react-router-dom"


const ListedBooks = () => {


    const [tab, setTab] = useState(0)


    return (
        < div className="">
            <div className="mt-10">

                <div className="bg-[#1313130D] py-7 rounded-xl">
                    <h1 className="text-center font-extrabold text-3xl">Books</h1>
                </div>


                <div className="flex justify-center md:justify-start">
                    <div role="" className=" tabs-lifted mt-10 md:mb-10 mb-5 ">
                        <Link to=''
                            onClick={() => setTab(0)} role="tab"
                            className={`tab ${tab === 0 ? 'tab-active' : ''}`}>Read Books
                        </Link>

                        <Link to={`wishlist`}
                            onClick={() => setTab(1)} role="tab"
                            className={`tab ${tab === 1 ? 'tab-active' : ''}`}>Wishlist Book
                        </Link>
                    </div>
                </div>


            </div>

            <Outlet></Outlet>
        </div>

    )
}

export default ListedBooks;