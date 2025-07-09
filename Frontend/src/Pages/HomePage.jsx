import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to the Home Page
        </h1>
        <p className="text-lg text-gray-600">
          To view our products, please Sign-in or Sign-up.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export { HomePage };
