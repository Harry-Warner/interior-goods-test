import React from "react";

const Product = (props) => {
  const {
    setDisplay,
    setDetails,
    url,
    title,
    price,
    description,
    width,
    drop,
    ppm,
  } = props;
  const minPrice = (w, d, ppm) => {
    let total = (w / 100) * (d / 100) * ppm;
    return total.toFixed(2);
  };
  return (
    <>
      <div className="flex flex-col space-y-2 mb-6">
        <img className="w-9/12 mx-auto" src={url} alt={title} />
        <h2 className="text-lg font-bold text-center mx-auto">{title}</h2>
        <h3 className="text-base text-center">
          From £{minPrice(width.min, drop.min, ppm)}
        </h3>
        <button
          onClick={() => {
            setDisplay(true);
            setDetails({
              url: url,
              title: title,
              description: description,
              width: width,
              drop: drop,
              ppm: ppm,
            });
          }}
          className="w-10/12 mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Get Price
        </button>
      </div>
    </>
  );
};

export default Product;
