import React from 'react';
import Featuredcard from '../../components/Featuredcard';
import useFeatureddata from '../../Hooks/useFeatureddata';

function Featured() {
  const { data, loading } = useFeatureddata();

  if (loading) return <p>Loading...</p>;

  return (
    <>
    <div className='my-10 bg-gray-100 p-5'><p className='text-center text-4xl font-semibold font-sans'>Featured Category</p></div>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 py-8">
      {data.map((item) => (
        <Featuredcard key={item.id} product={item} />  
      ))}
    </div>
    </>
  );
}

export default Featured;
