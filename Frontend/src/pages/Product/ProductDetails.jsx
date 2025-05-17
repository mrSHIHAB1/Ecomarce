import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

 
  useEffect(() => {
    fetch('http://localhost:3000/products') 
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.find((product) => product.id === parseInt(id)); 
        setProduct(foundProduct);
      })
      .catch((err) => console.error("Failed to fetch product:", err));
  }, [id]);


  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-details">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <h2 className="text-3xl font-semibold">{product.name}</h2>
      <p className="text-lg">${product.price}</p>
      <p className="text-md">{product.description}</p>
    </div>
  );
}

export default ProductDetails;
