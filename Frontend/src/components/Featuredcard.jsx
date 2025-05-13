import React from 'react';

function Featuredcard() {
  return (
    <div className="p-2">
      <div className="card w-60 bg-base-100 shadow-md overflow-hidden relative">
        <figure className="relative">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Sneakers"
            className="object-fill  h-64"
          />
          <div className="absolute bottom-0 left-0 w-full  p-3 rounded-b-xl">
            <h2 className="text-gray-900 text-lg font-semibold text-center bg-white w-[50%] mx-auto rounded-lg">Sneakers</h2>
          </div>
        </figure>
      </div>
    </div>
  );
}

export default Featuredcard;
