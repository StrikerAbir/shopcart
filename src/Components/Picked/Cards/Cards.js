const Cards = ({ one }) => {
  const { name, picture, price, discount } = one;
  return (
    <div>
      <div className="card card-compact w-[300px] bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="S" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="card-actions justify-between">
            <div className=" text-sm">
              <p>${price}</p>
            </div>
            <div className="text-orange-400 text-sm">
              <p>-{discount}% off</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
