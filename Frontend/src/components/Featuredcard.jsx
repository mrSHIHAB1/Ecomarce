import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Featuredcard({ product }) {
  const { CategoryID,id, image, name, price } = product;

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <Link to={`/ProductPage/${CategoryID}`}> {/* Link to navigate to product details */}
          <img
            src={image}
            alt={name}
            className="rounded-xl h-48 w-full object-cover"
          />
        </Link>
      </figure>
      <div className="p-4">
        <h2 className="text-lg text-center font-semibold">{name}</h2>
      </div>
    </div>
  );
}

export default Featuredcard;
