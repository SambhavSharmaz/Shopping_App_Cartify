import { Link } from "react-router";
import { useAppcontext } from "../Context/Appcontext";

const Navbar = () => {

    const { count } = useAppcontext();

    return (
        <div className="bg-black text-white px-6 py-4 shadow-md">
            <div className="flex flex-col sm:flex-row items-center justify-between">
                <h1 className="text-3xl font-extrabold mb-2 sm:mb-0 tracking-wide">Cartify</h1>
                <div className="flex items-center gap-2 p-2">
                    <p>count : {count}</p>
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
                    />
                    <button
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Search
                    </button>
                </div>
                <div className="flex gap-4 text-sm sm:text-base font-medium">
                    <Link
                        to="/"
                        className="hover:text-gray-300 transition duration-200"
                    >
                        Home
                    </Link>
                    <Link
                        to="/profile"
                        className="hover:text-gray-300 transition duration-200"
                    >
                        Products
                    </Link>
                    <Link
                        to="/signup"
                        className="hover:text-gray-300 transition duration-200"
                    >
                        SignUp
                    </Link>
                    <Link
                        to="/signin"
                        className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 transition duration-200"
                    >
                        SignIn
                    </Link>
                    <Link
                        to="/cart"
                        className="hover:text-gray-300 transition duration-200"
                    >
                        Cart
                    </Link>
                </div>
            </div>
        </div>
    );
};

export { Navbar };
