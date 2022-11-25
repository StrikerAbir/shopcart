import React, { useEffect, useState } from 'react';
import Cards from '../Picked/Cards/Cards';

const Today = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("fakeApi.json")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    const six = products.slice(0, 5);
    // console.log(six);
    return (
      <div>
        <div className="">
          <h2 className="border-dashed font-bold border-b-2 text-xl border-orange-500 p-3 mb-3">
            Today's hot deals
          </h2>
          <div className="grid lg:grid-cols-5 grid-cols-1 lg:gap-2">
            {six.map((one) => (
              <Cards one={one} key={one._id}></Cards>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Today;