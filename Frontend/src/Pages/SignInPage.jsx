import { Link } from "react-router";
import { useNavigate } from "react-router";

const SignInPage = () => {

  const navigate = useNavigate();
  const handleloginsubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const dataOBJ = { email, password };
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/signin`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataOBJ),

    })
    const result = await response.json();

    if (response.status == 200) {
      alert("User login successfully");
      navigate("/")
    }
    else {
      alert("User login failed", result.message);
    }
  }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-white px-4">
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
                    Sign In
                </h2>
                <form onSubmit={handleloginsubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            required
                            autoComplete="off"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
                    >
                        Sign In
                    </button>
                    <p className="text-sm text-gray-600 text-center">or</p>
                    <p className="text-sm text-center text-gray-600 mt-4">
                        Don’t have an account?{" "}
                        <Link to="/signup" className="text-blue-600 hover:underline font-medium">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export { SignInPage };
