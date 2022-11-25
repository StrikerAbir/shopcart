import React, { useEffect, useState } from "react";

import Cards from "./Cards/Cards";

const Picked = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("fakeApi.json")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    const six = products.slice(0, 6);
    console.log(six);
  return (
    <div className="mt-20 flex">
      <div className=" w-2/5">
        <div className="flex items-center">
          <h2 className="font-bold text-6xl">
            We picked <br />
            some{" "}
            <span className="text-orange-300">
              cool <br />
              things
            </span>{" "}
            for you
          </h2>
        </div>
      </div>
      <div className='w-3/5'>
              <h2 className="border-dashed border-b-2 text-xl border-orange-500 p-3">hot deals for you</h2>
              <div>
                  {
                      six.map(one=><Cards></Cards>)
                  }
              </div>
      </div>
    </div>
  );
};

export default Picked;
