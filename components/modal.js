import React, { useState, useEffect } from "react";
import CheckIcon from "@material-ui/icons/Check";

const Modal = (props) => {
  const { display, setDisplay, details } = props;
  const [width, setWidth] = useState(null);
  const [drop, setDrop] = useState(null);
  const [price, setPrice] = useState({});
  const [error, setError] = useState({ width: false, drop: false });

  // listen to any changes to the width or drop input
  useEffect(() => {
    // initiate conditionals only once modal is open
    if (details.ppm) {
      let total = (width / 100) * (drop / 100) * details.ppm;
      let cases = {
        wWithin:
          (width <= details.width.max && width >= details.width.min) || !width,
        dWithin:
          (drop <= details.drop.max && drop >= details.drop.min) || !drop,
      };
      if (cases.wWithin && cases.dWithin) {
        setPrice({
          value: total.toFixed(2),
          display: !drop || !width ? false : true,
        });
        setError({ width: false, drop: false });
      } else if (cases.wWithin && !cases.dWithin) {
        setPrice({
          value: total.toFixed(2),
          display: false,
        });
        setError({ width: false, drop: true });
      } else if (!cases.wWithin && cases.dWithin) {
        setError({ width: true, drop: false });
        setPrice({
          value: total.toFixed(2),
          display: false,
        });
      } else {
        setError({ width: true, drop: true });
        setPrice({
          value: total.toFixed(2),
          display: false,
        });
      }
    }
  }, [width, drop]);
  return (
    <>
      <div
        className={`${
          display ? "flex" : "hidden"
        } fixed z-50 justify-center items-center top-0 right-0 bottom-0 left-0`}
      >
        <div
          onClick={() => {
            setDisplay(false);
          }}
          className="fixed z-0 top-0 right-0 bottom-0 left-0 bg-darkT"
        />
        <div className="fixed max-h-screen overflow-y-scroll z-10 w-11/12 lg:w-9/12 p-2 md:p-4 lg:p-6 flex flex-col lg:flex-row bg-light text-center">
          <div
            onClick={() => setDisplay(false)}
            className="absolute top-0 right-0 py-3 px-1 flex flex-col cursor-pointer"
          >
            <div className="w-py h-sm bg-dark origin-sm transform rotate-45" />
            <div className="w-py h-sm bg-dark origin-sm transform -rotate-45" />
          </div>
          <img
            className="w-9/12 md:w-5/12 lg:w-1/2 mx-auto mb-2"
            src={details.url}
          />
          <div className="lg:w-1/2 mx-auto flex flex-col space-y-2 justify-center lg:justify-start lg:pr-8">
            <h1 className="text-2xl md:text-4xl lg:text-left font-bold">
              {details.title}
            </h1>
            <p className="md:w-full mx-auto text-dark text-left md:text-center lg:text-left text-base">
              {details.description}
            </p>
            <p className="text-base lg:text-left font-bold">
              Enter Measurements to get a price
            </p>
            <div className="flex flex-col mx-auto lg:flex-row w-11/12 md:w-full space-y-4 lg:space-y-0 lg:space-x-6">
              <div className="lg:w-1/2 mx-auto relative">
                <input
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  placeholder="Width (cm)"
                  id="width"
                  type="text"
                  className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <CheckIcon
                  fontSize="large"
                  style={{
                    display: `${!width || error.width ? "none" : "block"}`,
                  }}
                  className={`absolute right-0 top-0 text-green-500 m-xs`}
                />
                <p
                  className={`${
                    error.width ? "" : "hidden"
                  } mt-1 text-red-500 text-sm italic`}
                >
                  limits: {details.width && details.width.min}cm -{" "}
                  {details.width && details.width.max}cm
                </p>
              </div>
              <div className="lg:w-1/2 mx-auto relative">
                <input
                  value={drop}
                  onChange={(e) => setDrop(e.target.value)}
                  placeholder="Drop (cm)"
                  id="drop"
                  type="text"
                  className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <CheckIcon
                  fontSize="large"
                  style={{
                    display: `${!drop || error.drop ? "none" : "block"}`,
                  }}
                  className={`absolute right-0 top-0 text-green-500 m-xs`}
                />
                <p
                  className={`${
                    error.drop ? "" : "hidden"
                  } mt-1 text-red-500 text-sm italic`}
                >
                  limits: {details.drop && details.drop.min}cm to{" "}
                  {details.drop && details.drop.max}cm
                </p>
              </div>
            </div>
            <h2
              className={`${price.display ? "" : "hidden"} text-3xl font-bold`}
            >
              £{price.value}
            </h2>
            <button
              className={`${
                price.display ? "" : "hidden"
              } w-10/12 md:w-7/12 lg:w-full mx-auto bg-blue-500 hover:bg-blue-700 text-light font-bold py-2 px-4 rounded`}
            >
              Add to Basket
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
