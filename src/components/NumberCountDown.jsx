import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { ImCircleRight } from "react-icons/im";

const NumberCountDown = ({ setDisplayerath }) => {
  const [currentNumber, setCurrentNumber] = useState(1905);
  const [showText, setShowText] = useState(false);
  const [showRiceStadium, setShowRiceStadium] = useState(false);
  const [displayStartExperience, setDisplayStartExperience] = useState(false);
  const [hideCursor, setHideCursor] = useState(true);
  const [ colorIcons, setColorIcons] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNumber((prevNumber) => prevNumber + 1);
    }, 30);

    return () => clearInterval(timer);
  }, []);

  // Stop the countdown when reaching 2024
  useEffect(() => {
    if (currentNumber >= 2024) {
      setCurrentNumber(2024);
      setShowText(true); //Show the text after countdown finishes
    }
  }, [currentNumber]);

  const animationfinsied = () => {
    console.log("function is here");
    setShowRiceStadium(true);
    setHideCursor(false);
  };

  useEffect(() => {
    if (showRiceStadium) {
      const timeoutId = setTimeout(() => {
        setDisplayStartExperience(true);
      }, 2000); // Adjust the delay as needed
      return () => clearTimeout(timeoutId);
    }
  }, [showRiceStadium]);

  return (
    <div className="bg-black h-[100vh]">
      <div className="relative h-[100vh] text-white text-center flex flex-col justify-center items-center ">
        <div className="flex justify-center items-center text-4xl">
          {showText && (
            <h1 className="text-4xl font-optima font-normal text-center">
              <TypeAnimation
                sequence={[
                  1000,
                  "A.S Moloobhoy & Sons Pvt Ltd",
                  () => animationfinsied(),
                ]}
                cursor={hideCursor}
                wrapper="span"
              />
            </h1>
          )}
          <span className="font-optima font-normal text-4xl ">{currentNumber}</span>
        </div>
        {showRiceStadium && (
          <div
            className={`text-white text-center mt-4 ${
              showRiceStadium
                ? "opacity-100 transition-opacity duration-500"
                : "opacity-0"
            }`}
          >
            <h6 className="text-white font-optima font-normal text-2xl">
              <span className="px-0.5 font-optima font-normal">Rice</span>
              <span className="px-0.5 font-optima font-normal">Stadium</span>
              <span className="px-0.5 font-optima font-normal">Texas</span>{" "}
            </h6>
          </div>
        )}

        {displayStartExperience && (
          <div className="flex mt-5 w-full justify-center items-center">
            <h1 className="font-optima font-normal text-white text-3xl  ">
              Start Experience
            </h1>
            <button
              onClick={() => setDisplayerath(true)}
              className="ml-4 btn-5 hover:text-black"
              onMouseEnter={()=> setColorIcons(true)}
              onMouseLeave={() => setColorIcons(false)}
            >
              <ImCircleRight size={25} color={colorIcons ? "#000000" : "#ffffff"} className="icons z-30" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NumberCountDown;
