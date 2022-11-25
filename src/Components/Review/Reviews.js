import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("fakeApi.json")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    const six = products.slice(0, 2);
    console.log(six);
    return (
      <div className="my-20">
        <h2 className="border-dashed border-b-2 font-bold mb-3 text-xl border-orange-500 p-3">
          Reviews for you
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {six.map((one) => (
            <Review one={one} key={one._id}></Review>
          ))}
        </div>
      </div>
    );
};

export default Reviews;