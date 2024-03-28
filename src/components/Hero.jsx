import { Link } from "react-router-dom";
import background from "../../public/img/hero.png";

const componentName = () => {
    return (
        <div className="bg-[#1313130D] md:mt-12 mt-8 md:px-20 md:py-16 p-5 rounded-xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
            <div className="">
                <div className="md:flex space-y-10 items-center justify-between flex-col lg:flex-row-reverse">
                    <img src={background} className="" />
                    <div className="flex flex-col space-y-10">
                        <h1 className="md:text-5xl text-3xl font-bold md:w-[450px]">Books to freshen up your bookshelf</h1>

                        <Link to='/listedbooks'>
                            < div >
                                <button className="btn bg-[#23BE0A] text-white text-xl font-bold">View The List</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default componentName