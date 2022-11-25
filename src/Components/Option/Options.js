import React from 'react';

const Options = () => {
    const options = ["Fresh", "Todays Deals", "Mobiles", "Women Clothing", 'men clothing', 'kids clothing', 'health', 'pet corner', 'books', 'beauty', 'kitchen', 'bed room', 'sport', 'blog'];
    return (
        <div className="lg:lg:flex justify-between flex-warp">
            {
                options.map(option => <button key={Math.random()} className='btn btn-sm text-sm bg-white text-gray-400 border-0'>{ option }</button>)
            }
        </div>
    );
};

export default Options;