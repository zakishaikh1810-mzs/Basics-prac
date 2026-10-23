import { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await axios(
      "https://fakestoreapi.com/products"
    );

    setProducts(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Our Collection
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            All Products
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="h-64 flex items-center justify-center bg-gray-100 p-6">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-contain mix-blend-multiply"
                />
              </div>

              <div className="p-5">
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                  {product.category}
                </p>

                <h2 className="font-semibold text-gray-900 line-clamp-2 min-h-[48px]">
                  {product.title}
                </h2>

                <p className="text-lg font-bold text-gray-900 mt-4">
                  ${product.price.toFixed(2)}
                </p>

                <button className="w-full mt-4 bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-gray-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}

export default Products;