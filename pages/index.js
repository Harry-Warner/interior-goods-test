import React from "react";
import Product from "../components/product";

const Index = ({ data }) => {
  console.log(data.data.products);

  const products = data.data.products;
  const minPrice = (w, d, ppm) => {
    let total = (w / 100) * (d / 100) * ppm;
    return total.toFixed(2);
  };

  return (
    <>
      <img
        className="w-10/12 lg:w-4/12 mx-auto mt-8 mb-5"
        src="./logo.svg"
        alt="Blinds Direct"
      />
      <hr className="w-full mb-5" />
      <h1 className="text-center text-base text-dark mb-5 mx-2">
        {data.data.description}
      </h1>
      <hr className="w-full mb-5" />
      <div className="w-full grid grid-cols-2 lg:grid-cols-4">
        {products.map((item) => (
          <div key={products.indexOf(item)}>
            <Product
              url={item.images.main}
              title={item.name}
              price={minPrice(
                item.limits.width.min,
                item.limits.drop.min,
                item.price_per_metre_squared
              )}
            />
          </div>
        ))}
      </div>
    </>
  );
};

Index.getInitialProps = async () => {
  const response = await fetch(
    "https://www.interiorgoodsdirect.com/interview/api/products?key=6HJx2R8st$%Q"
  );
  const data = await response.json();
  return { data: data };
};

export default Index;
