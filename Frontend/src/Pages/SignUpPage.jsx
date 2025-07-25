import { Link } from "react-router";
import { useNavigate } from "react-router";
const SignUpPage = () => {
  const navigate = useNavigate();
  const handleregistersubmit = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const gender = event.target.gender.value;
    const password = event.target.password.value;
    const dataOBJ = { username, email, gender, password };
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`, {
      method: "POST",
      body: JSON.stringify(dataOBJ),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const result = await response.json();

    if (response.status == 200) {
      alert("User registered successfully");
      navigate("/signin")
    }
    else {
      alert("User registration failed", result.message);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-white px-4">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Create an Account
        </h2>
        <form onSubmit={handleregistersubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Username
            </label>
            <input
              name="username"
              type="text"
              required
              placeholder="Enter your username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Gender
            </label>
            <select
              name="gender"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              autoComplete="off"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          {/* <div>
            <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              required=""
              autoComplete="off"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div> */}

          <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
            >
              Sign Up
            </button>

            <p className="text-sm text-gray-600 text-center">or</p>
            <p className="text-sm text-gray-600 text-center">
              Already have an account?{" "}
              <Link to="/signin" className="text-blue-600 hover:underline font-medium">
                Sign In
              </Link>
            </p>
        </form>
      </div>
    </div>
  );
};

export { SignUpPage };
