import React from "react";

const Index = ({ data }) => {
  console.log(data.data.products);

  const products = data.data.products;

  return (
    <>
      <img
        className="w-9/12 lg:w-4/12 mx-auto mt-8 mb-5"
        src="./logo.svg"
        alt="Blinds Direct"
      />
      <hr className="w-full mb-5" />
      <h1 className="text-center text-base text-dark mb-5 mx-2">
        {data.data.description}
      </h1>
      <hr className="w-full mb-5" />
      {products.map((item) => (
        <p key={products.indexOf(item)}>{item.name}</p>
      ))}
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
