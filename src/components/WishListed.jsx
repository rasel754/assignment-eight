import { IoBookSharp } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

const WishListed = ({book}) => {


    return (
        <div className='md:flex gap-5 border p-5 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            <div className='bg-[#1313130D] rounded-xl p-5'>
                <img className='h-[200px] w-[150px]' src={book.image} alt="" />
            </div>


            <div className='flex flex-col gap-5'>
                <div><h1 className='text-3xl font-bold'>{book.bookName}</h1></div>

                <div><p className='text-sm font-bold'>By : {book.author}</p></div>

                <div className='md:flex items-center gap-5 space-y-3 md:space-y-0'>
                    <p className='font-bold'>Tag : </p>
                    <p className='font-medium text-sm text-[#23BE0A]'>#{book.tags[0]}</p>
                    <p className='font-medium text-sm text-[#23BE0A]'>#{book.tags[1]}</p>
                    <div className='text-[#131313CC] text-sm font-semibold flex items-center gap-2'><p className='font-semibold'><MdDateRange size={20}/></p><p>Year Of Publishing :</p> {book.yearOfPublishing}</div>
                </div>

                <div className='md:flex items-center gap-10 font-medium text-sm text-[#131313CC] md:space-y-0 space-y-3'>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-2'>
                            <p><FiUsers /></p>
                            <p>Publisher :</p>
                        </div>
                        <p>{book.publisher}</p>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <div className='flex items-center gap-2'>
                            <p><IoBookSharp size={15}/></p>
                            <p>Pages :</p>
                        </div>
                        <p>{book.totalPages}</p>
                    </div>

                </div>

                <div className='border-b-2 border-dashed'></div>

                <div className='md:flex md:gap-10 md:space-y-0 space-y-3'>
                    <div className='bg-[#328EFF26] text-[#328EFF] rounded-2xl px-2 py-1 text-sm font-semibold'>Category : {book.category}</div>
                    <div className='bg-[#FFAC3326] text-[#FFAC33] rounded-2xl px-2 py-1 text-sm font-semibold'>Rating : {book.rating}</div>
                    <Link to={`/details/${book.id}`}><div className='bg-[#23BE0A] md:mt-0 mt-2 hover:transition-all hover:bg-gray-300 hover:text-[#000000ee] text-white rounded-2xl px-2 py-1 text-sm font-semibold'><button>View Details</button></div></Link>
                </div>
            </div>
        </div>
    )
}

export default WishListed;