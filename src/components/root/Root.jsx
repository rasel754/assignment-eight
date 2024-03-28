import { Outlet } from "react-router-dom";
import Navbar from '../Navbar'
import Footer from "../Footer";


const Root = () => {
    return (
        <>
            <div className="container mx-auto mt-5 xl:px-20 p-5">
                <Navbar></Navbar>
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </>
    )
}

export default Root;