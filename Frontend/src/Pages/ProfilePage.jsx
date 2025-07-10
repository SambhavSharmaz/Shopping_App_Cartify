import { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

const ProfilePage = () => {

  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/products`, {
        method: "GET",
      });
      const result = await response.json();
      console.log("results", result);
      setProducts(result.data.products);
    }
    catch (error) {
      console.log("error", error);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  const handleaddproductsubmit = async (event) => {
    try {
      event.preventDefault();
      const title = event.target.title.value;
      const price = event.target.price.value;
      const description = event.target.description.value;
      const quantity = event.target.quantity.value;

  const response = await fetch(`${import.meta.env.VITE_API_URL}/products`, {
        method: "POST",
        body: JSON.stringify({
          title: title,
          price: price,
          description,
          quantity,
        }),
        headers: {
          "Content-Type": "application/json",
        }
      });

      if(response.status == 200) {
        alert("Product added successfully");
      }
      console.log("response", response);
      getData();
    }
    catch (error) {
      console.log("error", error);
      alert("Error adding product");
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <form onSubmit={handleaddproductsubmit} className="bg-white shadow rounded-lg p-6 mt-6 mx-auto w-full max-w-2xl space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Add Product</h2>

        <div className="flex flex-col gap-1">
          <label htmlFor="title" className="text-gray-700 font-medium">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Enter product title"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="price" className="text-gray-700 font-medium">Price</label>
          <input
            id="price"
            name="price"
            type="text"
            placeholder="Enter product price"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="quantity" className="text-gray-700 font-medium">Quantity</label>
          <input
            id="quantity"
            name="quantity"
            type="text"
            placeholder="Enter available quantity"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="description" className="text-gray-700 font-medium">Description</label>
          <input
            id="description"
            name="description"
            type="text"
            placeholder="Enter product description"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mt-4 transition">
          Submit
        </button>
      </form>

      <main className="flex-grow px-6 py-12 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mt-2 mb-6 text-center">My Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
              <p className="text-gray-600 mt-2">Price: ₹{product.price}</p>
              <p className="text-gray-600 mt-2">Quantity: {product.quantity}</p>
              {product.description && (
                <p className="text-gray-500 mt-2 text-sm">{product.description}</p>
              )}
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export { ProfilePage };
