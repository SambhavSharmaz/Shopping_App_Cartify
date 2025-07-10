import { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { useAppcontext } from "../Context/AppContext.js";

const ProfilePage = () => {

  const [products, setProducts] = useState([]);
  const [editid, seteditid] = useState("");
  const [editedprice, seteditedprice] = useState(-1);
    const {setcount} = useAppcontext();

  const getData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products`, {
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

      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products`, {
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

      if (response.status == 200) {
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

  const handleeditproduct = async (editId) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products/${editId}`, {
        method: "PATCH",
        body: JSON.stringify({
          price: editedprice
        }),
        headers: {
          "Content-Type": "application/json",
        }
      })
      if (response.status == 200) {
        alert("Product edited successfully");
        getData();
        seteditedprice("")
      }
      else {
        alert("Error editing product");
      }
    }
    catch {
      alert("Error editing product");
      console.log("error");
    }
  }

  const handledeleteproduct = async (deleteId) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products/${deleteId}`, {
        method: "DELETE",
      })
      if (response.status == 200) {
        alert("Product deleted successfully");
        getData();
      }
      else {
        alert("Error deleting product");
      }
    }
    catch {
      alert("Error deleting product");
      console.log("error");
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

      <main className="flex-grow px-4 sm:px-6 py-12 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">My Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition duration-300"
            >
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{product.title}</h2>

                {product._id === editid ? (
                  <div className="mb-4">
                    <input
                      onChange={(e) => seteditedprice(e.target.value)}
                      value={editedprice}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      type="text"
                      name="price"
                      placeholder="Edit price"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => seteditid(null)}
                        className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-1 rounded-md text-sm"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleeditproduct(product._id)}
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white py-1 rounded-md text-sm"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-700 mb-2 text-lg">Price: ₹{product.price}</p>
                )}
                <p className="text-gray-600 mb-1">Quantity: {product.quantity}</p>
                {product.description && (
                  <p className="text-gray-500 text-sm mt-1 italic">{product.description}</p>
                )}
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => {
                    seteditid(product._id);
                    seteditedprice(product.price);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={()=>{
                    setcount((prev)=>{return prev+1})
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
                >
                  ++
                </button>
                <button
                  onClick={() => handledeleteproduct(product._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export { ProfilePage };
