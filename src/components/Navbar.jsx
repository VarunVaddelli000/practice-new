import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Navbar() {
    const [dateString, setDateString] = useState();
    useEffect(() => {
        let timerInterval = setInterval(() => {
            const dateObj = new Date();
            setDateString(`${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`)

        }, 1000);

        return () => {
            if (timerInterval) {
                clearInterval(timerInterval);
            }
        }
    }, []);
    return (

        <div>
            <div className="bg-slate-800 text-white h-16 flex justify-center mx-3 rounded-xl gap-5">
                <div className="my-5 text-xl flex gap-5">
                    <h1><Link className=" hover:text-blue-400 text-xl" to="/">Home</Link> </h1>
                    <h1><Link className=" hover:text-blue-400 text-xl" to="/Products">Products</Link></h1>
                    <h1><Link className=" hover:text-blue-400 text-xl" to="/Cart">Cart</Link></h1>
                    <h1><Link className=" hover:text-blue-400 text-xl" to="/Todos">Todos</Link></h1>
                    <h1><Link to="/SupplierList">SupplierList</Link></h1>
                    <p>{dateString}</p>
                </div>
                <div className="my-5">
                    <button className="px-2 pb-1 bg-blue-400 text-xl rounded"><Link to="/Register">Register</Link> </button>
                </div>
            </div>
        </div>
    )
}