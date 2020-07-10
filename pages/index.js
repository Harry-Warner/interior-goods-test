import React, { useState } from "react";
import Product from "../components/product";
import Modal from "../components/modal";

const Index = ({ data }) => {
  const [display, setDisplay] = useState(false);
  const [details, setDetails] = useState({});

  const products = data.data.products;

  return (
    <>
      <Modal display={display} setDisplay={setDisplay} details={details} />
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
              setDisplay={setDisplay}
              setDetails={setDetails}
              url={item.images.main}
              title={item.name}
              description={item.description}
              width={item.limits.width}
              drop={item.limits.drop}
              ppm={item.price_per_metre_squared}
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
