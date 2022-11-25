import React from 'react';
import { FaStar } from 'react-icons/fa';

const Review = ({one}) => {
     const { name, picture, price, discount } = one;
    return (
      <div className="card card-side bg-base-100 p-10 border-4">
        <figure>
          <img src={picture} alt="S" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{name}</h2>
              <h3 className='text-bold font-semibold'>${price}</h3>
          <div className="card-actions justify-between">
                    <div className="flex text-yellow-300">
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
            </div>
            <div className="text-orange-400 text-sm">
              <p>-{discount}% off</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Review;