import React, { useEffect, useState } from 'react';

function useFeatureddata() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/category')
      .then(res => res.json())
      .then(data => {
        setdata(data);
        setloading(false);
      })
      .catch(e => {
        console.log("Failed to load products", e);
        setloading(false);
      });
  }, []);

  return { data, loading };
}

export default useFeatureddata;
