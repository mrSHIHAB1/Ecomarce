import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const { CategoryID } = useParams(); 
  const [products, setProducts] = useState([]); 
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => {
        
        const categoryIdNum = parseInt(CategoryID);

        const category = data.find((item) => item.CategoryID === categoryIdNum);

        if (category) {
          setProducts(category.products); 
        } else {
          setProducts([]); 
        }

        setLoader(false);
      });
  }, [CategoryID]);

  return (
    <>
      {/* Fixed Sidebar */}
      <aside className="fixed left-0 w-1/4 h-[calc(100vh-64px)] overflow-y-auto border-r p-4 bg-gray-100">
        <h2 className="font-semibold text-lg mb-2">Categories</h2>
        <ul className="space-y-2">
          {Array.from({ length: 30 }, (_, i) => (
            <li
              key={i}
              className="bg-white p-2 rounded shadow hover:bg-blue-100 cursor-pointer"
            >
              Category {i + 1}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content Area */}
      <main className="ml-[25%] p-6 h-[calc(100vh-64px)] overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4">All Products in Category {CategoryID}</h2>

        {loader ? (
          <p>Loading...</p>
        ) : products.length === 0 ? (
          <p>No products found for this category.</p>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-4 rounded shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover mb-2 rounded"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="text-blue-600 font-semibold mt-2">${product.price}</p>
                <p className="text-yellow-500">Rating: {product.rating}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export default ProductPage;
