import "../App.css";
import earthImage from "../assets/bgimage.jpg";
import hoverTagImage1 from "../assets/hoverImage.png";
import hoverTagImage2 from "../assets/hoverImage2.png";
import hoverTagImage3 from "../assets/hoverImage3.png";
import hoverTagImage4 from "../assets/hoverImage4.png";
import hoverTagImage5 from "../assets/hoverImage5.png";

import backgroundImage from "../assets/backgroundImage.png";

import logo from "../assets/logo.jpg";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import NumberCountDown from "./NumberCountDown";
import { Link } from "react-router-dom";

function LandingPage() {
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredDiv, setHoveredDiv] = useState(null);
  const [hamburgerMenuData, setHamburgerMenuData] = useState(true);
  const [displayerath, setDisplayerath] = useState(false);

  const getImageSource = () => {
    switch (hoveredDiv) {
      case 1:
        return hoverTagImage1;
      case 2:
        return hoverTagImage2;
      case 3:
        return hoverTagImage3;
      case 4:
        return hoverTagImage4;
      case 5:
        return hoverTagImage5;
      default:
        return earthImage;
    }
  };

  const getTextContent = () => {
    switch (hoveredDiv) {
      case 1:
        return "Text for A.S Moloobhoy & Sons Pvt Ltd";
      case 2:
        return "Text for About";
      case 3:
        return "Text for EMME";
      case 4:
        return "Text for A.S Moloobhoy & Sons Pvt Ltd";
      case 5:
        return "Text for Molobhoy Marine Services LLC";
    }
  };

  const getLogoSource = () => {
    switch (hoveredDiv) {
      case 1:
        return logo;
      case 2:
        return logo2;
      case 3:
        return logo3;
      case 4:
        return logo;
      case 5:
        return logo;
      default:
        return null;
    }
  };

  const mobileData = [
    {
      id: 1,
      title: "A.S Moloobhoy & Sons Pvt Ltd",
      link: "",
      image: hoverTagImage1,
    },
    {
      id: 2,
      title: "A.S Moloobhoy Pvt Ltd",
      link: "",
      image: hoverTagImage2,
    },
    {
      id: 3,
      title: "Moloobhoy Marine Services LLC",
      link: "",
      image: hoverTagImage3,
    },
    {
      id: 4,
      title: "EMME",
      link: "",
      image: hoverTagImage4,
    },
    {
      id: 5,
      title: "About",
      link: "",
      image: hoverTagImage5,
    },
  ];

  const marginMap = {
    1: "ml-[15%]",
    2: "ml-[20%]",
    3: "ml-[-5%]",
    4: "ml-[0%]",
    5: "ml-[-30%]",
  };

  return (
    <>
      {displayerath ? (
        <div className="w-full h-screen mobile:flex mobile:flex-col md:justify-center md:items-center sm:items-start  bg-black md:relative overflow-y-hidden overflow-x-hidden">
          <div className="md:hidden sm:block sm:w-[100%] h-[100vh] ">
            <div className="h-[10%] sm:text-center mobile:text-center border-b-[1px] border-white border-opacity-20">
              <div className="flex w-[96%] justify-between items-center h-full">
                <h1 className="text-white w-full font-optima font-normal text-center z-20">
                  What is missing ?
                </h1>
                <p className="">
                  {hamburgerMenuData ? (
                    <RxHamburgerMenu
                      onClick={() => setHamburgerMenuData(false)}
                      color="#ffffff"
                      size={25}
                    />
                  ) : (
                    <IoCloseSharp
                      onClick={() => setHamburgerMenuData(true)}
                      color="#ffffff"
                      size={25}
                    />
                  )}
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center h-[80%] w-full mx-auto">
              {!hamburgerMenuData ? (
                <div className="w-[96%] flex flex-col justify-center items-center">
                  {mobileData.map((data) => (
                    <div
                      key={data.id}
                      className={`flex w-full justify-center items-center cursor-pointer p-4 ${
                        marginMap[data.id] || ""
                      }`}
                    >
                      <img
                        src={data.image}
                        className="mobile:w-9 mobile:h-9 sm:w-14 sm:h-14 object-contain"
                        alt=""
                      />
                      <h1 className="text-white ml-4 my-auto font-optima font-normal mobile:text-xl  ">
                        {data.title}
                      </h1>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <img
                    src={earthImage}
                    alt="Earth"
                    className={`mobile:w-[90%] mobile:h-[100%] sm:w-[80%] sm:h-[70%] flex justify-center relative items-center object-contain rotating-earth ${
                      isHovering ? "" : "relative"
                    }`}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="w-[65%] h-[70%] relative mobile:hidden sm:hidden md:block">
            <div className="w-full h-full ">
              {/* Earth image */}
              <img
                src={getImageSource()}
                alt="Earth"
                className={`w-[90%] h-[100%] flex justify-center relative items-center object-contain rotating-earth ${
                  isHovering ? "" : "relative"
                }`}
              />
              {/* Five h1 tags */}

              {hoveredDiv && (
                <div className="absolute inset-0 flex flex-col justify-between h-[55%] my-auto items-center ">
                  <img
                    src={getLogoSource()}
                    alt=""
                    className="w-[50%] h-[50%] mr-[10%] object-contain"
                  />
                  <p className="text-white font-optima font-normal w-[40%] mt-[5%]  text-center relative mr-[10%]">
                    {getTextContent()}
                  </p>
                </div>
              )}

              <div className="sm:hidden mobile:hidden md:block ">
                <div
                  onMouseEnter={() => setHoveredDiv(1)}
                  onMouseLeave={() => setHoveredDiv(null)}
                  className="position-1 flex cursor-pointer"
                >
                  <p
                    className={`w-7 h-7 border border-white rounded-full text-white ${
                      hoveredDiv === 1 ? "flex  justify-center " : ""
                    }`}
                  >
                    {hoveredDiv === 1 && (
                      <span className="w-[2%] h-[2%] p-1 bg-white rounded-full mt-[35%] animate-scale"></span>
                    )}
                  </p>
                  <h1 className=" text-white font-optima font-normal ml-1.5">
                    A.S Moloobhoy Pvt Ltd
                  </h1>
                </div>

                <div
                  onMouseEnter={() => setHoveredDiv(2)}
                  onMouseLeave={() => setHoveredDiv(null)}
                  className="position-2 text-white flex  cursor-pointer"
                >
                  <Link to="/about">
                    <h1 className="mr-1.5 font-optima font-normal">About</h1>
                  </Link>
                  <p
                    className={`w-7 h-7 border border-white rounded-full text-white ${
                      hoveredDiv === 2 ? "flex  justify-center " : ""
                    }`}
                  >
                    {hoveredDiv === 2 && (
                      <span className="w-[2%] h-[2%] p-1 bg-white rounded-full mt-[35%] animate-scale"></span>
                    )}
                  </p>
                </div>

                <div
                  onMouseEnter={() => setHoveredDiv(3)}
                  onMouseLeave={() => setHoveredDiv(null)}
                  className="position-3 text-white flex  cursor-pointer"
                >
                  <p
                    className={`w-7 h-7 border border-white rounded-full text-white ${
                      hoveredDiv === 3 ? "flex  justify-center  " : ""
                    }`}
                  >
                    {hoveredDiv === 3 && (
                      <span className="w-[2%] h-[2%] p-1 bg-white rounded-full mt-[35%] animate-scale"></span>
                    )}
                  </p>
                  <h1 className="ml-1.5 font-optima font-normal">EMME</h1>
                </div>

                <div
                  onMouseEnter={() => setHoveredDiv(4)}
                  onMouseLeave={() => setHoveredDiv(null)}
                  className="position-4 text-white flex  cursor-pointer"
                >
                  <p
                    className={`w-7 h-7 border border-white rounded-full text-white ${
                      hoveredDiv === 4 ? "flex  justify-center " : ""
                    }`}
                  >
                    {hoveredDiv === 4 && (
                      <span className="w-[2%] h-[2%] p-1 bg-white rounded-full mt-[35%] animate-scale"></span>
                    )}
                  </p>
                  <h1 className="ml-1.5 font-optima font-normal text-white">
                    A.S Moloobhoy & Sons Pvt Ltd
                  </h1>
                </div>

                <div
                  onMouseEnter={() => setHoveredDiv(5)}
                  onMouseLeave={() => setHoveredDiv(null)}
                  className="position-5 text-white flex  cursor-pointer"
                >
                  <p
                    className={`w-6 h-6 border  border-white rounded-full text-white ${
                      hoveredDiv === 5 ? "flex  justify-center " : ""
                    }`}
                  >
                    {hoveredDiv === 5 && (
                      <span className="w-[2%] h-[2%] p-1 bg-white rounded-full mt-[35%] animate-scale"></span>
                    )}
                  </p>
                  <h1 className="ml-1.5 font-optima font-normal text-white">
                    Molobhoy Marine Services LLC
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NumberCountDown setDisplayerath={setDisplayerath} />
      )}
    </>
  );
}

export default LandingPage;
