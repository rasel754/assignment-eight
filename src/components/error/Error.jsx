import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex flex-col gap-10 mt-28 items-center justify-center">
            <h1 className="text-center font-extrabold text-5xl ">Opps !!!</h1>
            <Link to="/"><button className="btn btn-info text-white font-bold">Go Back</button></Link>
        </div>
    )
}

export default Error;