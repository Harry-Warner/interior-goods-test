import React from "react";

const Product = (props) => {
  const { url, title, price } = props;
  return (
    <>
      <div className="flex flex-col space-y-2 mb-6">
        <img className="w-9/12 mx-auto" src={url} alt={title} />
        <h2 className="text-lg font-bold text-center mx-auto">{title}</h2>
        <h3 className="text-base text-center font-bold">From £{price}</h3>
        <button class="w-10/12 mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Price
        </button>
      </div>
    </>
  );
};

export default Product;
