import React, { useEffect, useState } from 'react';
import Cards from '../Picked/Cards/Cards';

const Search = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("fakeApi.json")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    const six = products.slice(11, 16);
    return (
      <div>
        <div className="my-20">
          <h2 className="border-dashed font-bold border-b-2 text-xl border-orange-500 p-3 mb-3">
            Your Search history
          </h2>
          <div className="grid grid-cols-5 gap-2">
            {six.map((one) => (
              <Cards one={one} key={one._id}></Cards>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Search;