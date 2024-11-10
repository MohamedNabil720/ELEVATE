import { Link } from "react-router-dom";


export default function NavBar() {
    return (


        <>

            <nav className="bg-slate-100 p-2">

                <div className=" container flex justify-around items-center">

                    <h1 className="text-2xl italic"> <Link to="/"> Navbar</Link> </h1>

                    <div>
                        <ul>
                            <li className=" text-xl"> <Link to="/"> Products</Link> </li>
                        </ul>
                    </div>

                </div>

            </nav>

        </>

    )
}
