import { useState } from "react";
import dc5 from "../../assets/img/dc5.jpg";
import image from "../../assets/img/image.webp";
import resort from "../../assets/img/resort.webp";
import resort1 from "../../assets/img/resort1.jpg";
import resort2 from "../../assets/img/resort2.jpeg";
import kkc from "../../assets/img/kkc.png";
import avatar from "../../assets/img/avatar.jpg";
import { FaPlaneDeparture } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { AiOutlineDown } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { FaHouseUser } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineStar } from "react-icons/md";
import { BsRecordFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
export default function Index() {
  const [button, setButton] = useState("false");
  const [user, setUser] = useState("false");
  const [menu, setMenu] = useState("false");
  const [arrow, setArrow] = useState("false");
  const [arrow1, setArrow1] = useState("false");
  return (
    <>
      <div>
        <div>
          <div
            className="bg-cover relative m-auto w-[100%] h-[80vh]  mt-10 rounded-t-2xl sm:w-[90%] lg:w-[90%]  text-[#fff] text-[1.2rem] sm:flex sm:justify-around flex"
            style={{
              backgroundImage: `url(${dc5})`,
            }}
          >
            <div className="mt-5 flex justify-center  font-bold ">
              <FaPlaneDeparture className="text-[2rem] block text-[#003b95] " />
              <p className="text-[2rem] ml-2 text-[red]">TRAVEL</p>
            </div>
            <div className="sm:mt-5">
              <div className="text-[#fff] sm:block lg:block hidden">
                <a className=" sm:mr-10  mr-2" href="#">
                  Discover
                </a>
                <a className=" sm:mr-10 mr-2" href="#">
                  Destinations
                </a>
                <a className=" sm:mr-10 mr-2" href="#">
                  About
                </a>
                <a className=" sm:mr-10 mr-2 " href="#">
                  Contact
                </a>
              </div>
              <AiOutlineMenu
                onClick={() => setMenu(!menu)}
                className=" cursor-pointer ml-[80px] mt-7 text-[2rem] text-[#003b95] lg:hidden sm:hidden"
              />
              <div className="text-[#fff] hidden">
                <a className=" sm:mr-10  mr-2" href="#">
                  Discover
                </a>
                <a className=" sm:mr-10 mr-2" href="#">
                  Destinations
                </a>
                <a className=" sm:mr-10 mr-2" href="#">
                  About
                </a>
                <a className=" sm:mr-10 mr-2 " href="#">
                  Contact
                </a>
              </div>
              {menu ? (
                <div className="text-[#fff] hidden">
                  <a className=" sm:mr-10  mr-2" href="#">
                    Discover
                  </a>
                  <a className=" sm:mr-10 mr-2" href="#">
                    Destinations
                  </a>
                  <a className=" sm:mr-10 mr-2" href="#">
                    About
                  </a>
                  <a className=" sm:mr-10 mr-2 " href="#">
                    Contact
                  </a>
                </div>
              ) : (
                <div className="text-[#fff]  text-[end] ml-[60px] grid mt-3">
                  <a className=" sm:mr-10   mr-2" href="#">
                    Discover
                  </a>
                  <a className=" sm:mr-10  mr-2" href="#">
                    Destinations
                  </a>
                  <a className=" sm:mr-10  mr-2" href="#">
                    About
                  </a>
                  <a className=" sm:mr-10  mr-2 " href="#">
                    Contact
                  </a>
                </div>
              )}
            </div>

            <div className="sm:mt-5">
              <div className="hidden sm:block lg:block">
                {button ? (
                  <>
                    <button
                      onClick={() => setButton(!button)}
                      className=" mr-5"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => setButton(!button)}
                      className=" border-2 outline-transparent border-[#003b95] outline-0 bg-[#003b95] pr-5 pl-5 pt-1 pb-1 rounded-2xl"
                    >
                      Register
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => setButton(!button)}
                      className="  border-2 outline-transparent border-[#003b95] outline-0 bg-[#003b95] pr-5 pl-5 pt-1 pb-1 rounded-2xl"
                    >
                      Login
                    </button>
                    <button className="ml-5" onClick={() => setButton(!button)}>
                      Register
                    </button>
                  </>
                )}
              </div>
              <FaHouseUser
                onClick={() => setUser(!user)}
                className="ml-[100px] sm:hidden lg:hidden cursor-pointer mt-7 text-[2rem] text-[#003b95]"
              />
              {user ? (
                <div className="hidden">
                  {button ? (
                    <>
                      <button
                        onClick={() => setButton(!button)}
                        className=" mr-5"
                      >
                        Login
                      </button>
                      <button
                        onClick={() => setButton(!button)}
                        className=" border-2 outline-transparent border-[#003b95] outline-0 bg-[#003b95] pr-5 pl-5 pt-1 pb-1 rounded-2xl"
                      >
                        Register
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => setButton(!button)}
                        className="  border-2 outline-transparent border-[#003b95] outline-0 bg-[#003b95] pr-5 pl-5 pt-1 pb-1 rounded-2xl"
                      >
                        Login
                      </button>
                      <button
                        className="ml-5"
                        onClick={() => setButton(!button)}
                      >
                        Register
                      </button>
                    </>
                  )}
                </div>
              ) : (
                <div className="ml-[35px]">
                  {button ? (
                    <>
                      <button
                        onClick={() => setButton(!button)}
                        className=" mr-5"
                      >
                        Login
                      </button>
                      <button
                        onClick={() => setButton(!button)}
                        className=" border-2 outline-transparent border-[#003b95] outline-0 bg-[#003b95] pr-5 pl-5 pt-1 pb-1 rounded-2xl"
                      >
                        Register
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => setButton(!button)}
                        className="  border-2 outline-transparent border-[#003b95] outline-0 bg-[#003b95] pr-5 pl-5 pt-1 pb-1 rounded-2xl"
                      >
                        Login
                      </button>
                      <button
                        className="ml-5"
                        onClick={() => setButton(!button)}
                      >
                        Register
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
          {/* ////media*/}
          <div className=" absolute top-[25%] right-[40%]  font-bold text-[2rem] text-[#fff] lg:right-[68%]">
            <h1 className="sm:text-[2rem] lg:text-[2rem] xl:text-[3rem]  ">
              Let's Plan An
            </h1>
            <h1>
              <span className="text-[#003b95]">Adventure </span>Trip.
            </h1>
          </div>
          <p className="text-[1.2rem] absolute top-[37%] left-[13%] lg:top-[50%] sm:left-[8%] w-[70%] text-[#fff] font-normal">
            Discover Your Dream Destinations With Our Exclusice Travel
            Experiences.
          </p>
          <div className="text-[1.2rem] absolute top-[64%] h-[20vh] lg:h-[15vh] sm:h-[15vh] sm:left-[8%] xl:w-[60vh] lg:left-[8%] left-0 w-[100%] lg:w-[65%]  sm:w-[80%] flex p-3 rounded-md bg-[#fff] text-[#fff] font-normal border-2">
            <div className="border-r-2 p-3 mr-5">
              <div className="flex items-center">
                <LuMapPin className="text-[#003b95] mr-1" />
                <p className="text-[#4b4949] ">Location</p>
              </div>
              <div className="flex items-center text-[black]">
                <p className="mr-1">Bangladesh</p>
                <AiOutlineDown />
              </div>
            </div>
            <div className="border-r-2 p-3 mr-5">
              <div className="flex items-center">
                <FaRegUser className="text-[#003b95] mr-1" />
                <p className="text-[#4b4949] ">Person</p>
              </div>
              <div className="flex items-center text-[black]">
                <p className="mr-1">4 Male</p>
                <AiOutlineDown />
              </div>
            </div>
            <div className=" p-3 mr-5">
              <div className="flex items-center">
                <MdDateRange className="text-[#003b95] mr-1" />
                <p className="text-[#4b4949] ">Date</p>
              </div>
              <div className="flex items-center text-[black]">
                <p className="mr-1">12 Jan 2024</p>
                <AiOutlineDown />
              </div>
            </div>
            <button className="border-2 bg-[#003b95] sm:h-[12vh] h-[15vh] lg:pr-10 lg:pl-10 pr-2 pl-2 rounded-md">
              Find Now
            </button>
          </div>
        </div>
        {/* ///// */}
        <div className=" w-[100%] lg:w-[90%] sm:w-[90%]   border-2 border-[#ccc] bg-[#ccc] h-[15vh] m-auto"></div>
        {/* //// */}
        <div className="lg:w-[90%] sm:w-[90%] w-[100%] relative h-[60vh]  border-[#ccc] sm:h-[60vh]  lg:h-[60vh] m-auto">
          <div className="w-[90%] h-[50vh] m-auto mt-20">
            <div className="flex font-bold">
              <img className="w-[50%] h-[50vh] rounded-tr-[10%]" src={image} />
              <div className="ml-10">
                <a className="text-[#003b95] text-[1.1rem]" href="#">
                  Why Chose Us?
                </a>
                <h1 className="lg:text-[2rem] xl-text-[3rem] sm:text-[1rem] text-[1rem] w-[70%]">
                  We Help To Find Your Dream Vacation
                </h1>
                <p className="w-[100%] lg:w-[70%] sm:w-[70%] font-normal">
                  Aparthotel Maargick is situated in the Podgórze district in
                  Kraków, 1.1 km from Kazimierz Jewish District and ICE Kraków
                  Congress Centre, and 2 km from Wawel Royal Castle.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* //// */}
        <div className="w-[90%] lg:h-[30vh] h-[20vh]  border-[#ccc] top-[145%]  absolute lg:top-[140%] right-[-30%] flex  m-auto">
          <img
            className="w-[25%] border-[15px] border-[#fff]   rounded-tl-[20%]"
            src={image}
          />
          <div>
            <div className="flex justify-between  lg:w-[100%] ml-10 w-[10%]">
              <div className="w-[100%] lg:w-[100%] ">
                <p className="lg:text-[2rem] text-[1rem] font-bold text-[#003b95]">
                  80K
                </p>
                <p className="font-light text-[1rem]">Active Traveller</p>
              </div>
              <div className="w-[100%] ml-10 ">
                <p className="lg:text-[2rem] text-[1rem] font-bold text-[#003b95]">
                  120+
                </p>
                <p className="font-light text-[1rem]">Holiday package</p>
              </div>
            </div>
            <div className="flex justify-between lg:w-[100%] w-[10%] ml-10 mt-10">
              <div className="w-[100%] ">
                <p className="lg:text-[2rem] text-[1rem] font-bold text-[#003b95]">
                  25+
                </p>
                <p className="font-light text-[1rem]">Elite Airlines</p>
              </div>
              <div className="w-[100%] ml-10 ">
                <p className="lg:text-[2rem] text-[1rem] font-bold text-[#003b95]">
                  240+
                </p>
                <p className="font-light text-[1rem]">Travel Destination</p>
              </div>
            </div>
          </div>
        </div>
        {/* /// */}
        <div className="w-[90%] h-[90vh] sm:h-[110vh] bg-[#d9eee3] m-auto mt-10">
          <div className="flex justify-between w-[85%] m-auto p-10 items-center">
            <p className="text-[1.3rem] sm:text-[2rem] text-[black] font-bold">
              Explore Top <span className="text-[#003b95]">Destination</span>
            </p>
            {arrow ? (
              <div className="flex  cursor-pointer">
                <FaArrowLeftLong
                  onClick={() => setArrow(!arrow)}
                  className=" border-2 rounded-2xl text-[40px] sm:text-[50px] pl-2 pr-2 border-[#003b95] bg-[#003b95] text-[#fff]"
                />
                <FaArrowRightLong
                  onClick={() => setArrow(!arrow)}
                  className="ml-10 mr-5 border-2 rounded-2xl text-[40px] sm:text-[50px] pl-2 pr-2 border-[#003b95] bg-[#fff] text-[#003b95]"
                />
              </div>
            ) : (
              <div className="flex  cursor-pointer">
                <FaArrowLeftLong
                  onClick={() => setArrow(!arrow)}
                  className=" border-2 rounded-2xl text-[40px] sm:text-[50px] pl-2 pr-2 border-[#003b95] bg-[#fff] text-[#003b95]"
                />
                <FaArrowRightLong
                  onClick={() => setArrow(!arrow)}
                  className="ml-10 mr-5 border-2 rounded-2xl text-[40px] sm:text-[50px] pl-2 pr-2 border-[#003b95] bg-[#003b95] text-[#fff]"
                />
              </div>
            )}
          </div>
          <div className="sm:w-[85%] h-[100vh] w-[100%] m-auto p-10">
            <div className="flex justify-between w-[100%] gap-5">
              <img
                className=" sm:w-[60%] w-[50%] h-[30vh] rounded-2xl sm:h-[40vh]"
                src={resort}
              />
              <img
                className="sm:w-[40%] w-[50%] h-[30vh]  rounded-2xl sm:h-[40vh]"
                src={resort1}
              />
            </div>
            <div className="flex justify-between gap-5 w-[100%] mt-5">
              <img
                className="w-[50%] h-[30vh]  rounded-2xl sm:h-[40vh]"
                src={resort2}
              />
              <img
                className="w-[50%] h-[30vh] rounded-2xl sm:h-[40vh]"
                src={kkc}
              />
            </div>
          </div>
        </div>
        {/* ///// */}
        <div className="sm:w-[90%] w-[100%] h-[65vh] m-auto mt-10">
          <p className="text-center sm:text-[3rem] text-[2rem] font-bold">
            What Our <span className="text-[#003b95]">Customers</span> Say.
          </p>
          <p className="text-start w-[100%] ml-[10px] sm:w-[50%] sm:ml-[25%] mt-5 font-extralight">
            Nằm ở Kê Gà, cách Hải đăng Mũi Kê Gà 5.7 km, Hola Beach - Beach Club
            & Eco Glamping Resort cung cấp chỗ nghỉ có
            <span className="mr-[25%]">
              {" "}
              khu vườn, chỗ đậu xeriêng miễn phí, nhà hàng và quầy bar.
            </span>
          </p>
          <div className="sm:w-[80%] w-[100%] m-auto flex justify-between mt-10">
            <div className=" w-[40%]">
              <div className="flex items-center hover:border-2 hover:border-[#fff] hover:shadow-2xl hover:rounded-md ">
                <img
                  className="rounded-[50%] lg:w-[20%] sm:w-[40%]  w-[30%] p-2"
                  src={avatar}
                />
                <div className="flex justify-between items-center w-[10%] ml-3">
                  <p>Masum Bhuiyan</p>
                  <p>UI/UX Designer</p>
                </div>
              </div>
              <div className="flex items-center hover:border-2 hover:border-[#fff] hover:shadow-2xl hover:rounded-md mt-5">
                <img
                  className="rounded-[50%] lg:w-[20%] sm:w-[40%] w-[30%] p-2"
                  src={avatar}
                />
                <div className="flex justify-between items-center w-[10%] ml-3">
                  <p>Masum Bhuiyan</p>
                  <p>UI/UX Designer</p>
                </div>
              </div>
              <div className="flex items-center hover:border-2 hover:border-[#fff] hover:shadow-2xl hover:rounded-md mt-5">
                <img
                  className="rounded-[50%] lg:w-[20%] sm:w-[40%] w-[30%] p-2"
                  src={avatar}
                />
                <div className="flex justify-between items-center w-[10%] ml-3">
                  <p>Masum Bhuiyan</p>
                  <p>UI/UX Designer</p>
                </div>
              </div>
              <div className="flex items-center hover:border-2 hover:border-[#fff] hover:shadow-2xl hover:rounded-md mt-5">
                <img
                  className="rounded-[50%] lg:w-[20%] sm:w-[40%] w-[30%] p-2"
                  src={avatar}
                />
                <div className="flex justify-between items-center w-[10%] ml-3">
                  <p>Masum Bhuiyan</p>
                  <p>UI/UX Designer</p>
                </div>
              </div>
            </div>
            <div className="w-[40%] mr-10 sm:mt-10 mt-2">
              <p className="text-[0.9rem] sm:text-[1rem]">
                Nằm ở Kê Gà, cách Hải đăng Mũi Kê Gà 5.7 km, Hola Beach - Beach
                Club & Eco Glamping Resort cung cấp chỗ nghỉ có khu vườn, chỗ
                đậu xe riêng miễn phí, nhà hàng và quầy bar.Nằm ở Kê Gà, cách
                Hải đăng Mũi Kê Gà 5.7 km, Hola Beach - Beach Club & Eco
                Glamping Resort cung cấp chỗ nghỉ có khu vườn, chỗ đậu xe riêng
                miễn phí, nhà hàng và quầy bar.
              </p>
              <div className="flex  text-[#003b95] mt-6">
                <MdOutlineStar />
                <MdOutlineStar className="ml-2" />
                <MdOutlineStar className="ml-2" />
                <MdOutlineStar className="ml-2" />
                <MdOutlineStar className="ml-2" />
              </div>
              <div className="mt-4">
                <p className="ren font-semibold">Masum Bhuiyan</p>
                <p>UI/UX Designer</p>
              </div>
              <div className="mt-4 text-[#ccc]">
                <p className="text-[2rem]">4.5 Out of 5</p>
                <p>Overall Rating</p>
              </div>
            </div>
          </div>
        </div>
        {/* //// */}
        <div className="sm:w-[72%] w-[90%] sm:mt-[150px] mt-[50px] m-auto text-[#003b95] font-bold cursor-pointer">
          Recent Blogs
        </div>
        {/* //// */}
        <div className="sm:w-[100%] w-[100%] mt-[150px] sm:mt-[200px] lg:mt-10">
          <div className="flex justify-between items-center">
            <p className="sm:text-[2rem] text-[2rem] ml-[10px] sm:ml-[100px] font-bold text-[#003b95]">
              Featured Articles
            </p>
            {arrow1 ? (
              <div className="flex  cursor-pointer">
                <FaArrowLeftLong
                  onClick={() => setArrow1(!arrow1)}
                  className=" border-2 rounded-2xl text-[40px] sm:text-[50px] pl-2 pr-2 border-[#003b95] bg-[#003b95] text-[#fff]"
                />
                <FaArrowRightLong
                  onClick={() => setArrow1(!arrow1)}
                  className="ml-10 mr-5 border-2 rounded-2xl text-[40px] sm:text-[50px] pl-2 pr-2 border-[#003b95] bg-[#fff] text-[#003b95]"
                />
              </div>
            ) : (
              <div className="flex  cursor-pointer">
                <FaArrowLeftLong
                  onClick={() => setArrow1(!arrow1)}
                  className=" border-2 rounded-2xl text-[40px] sm:text-[50px] pl-2 pr-2 border-[#003b95] bg-[#fff] text-[#003b95]"
                />
                <FaArrowRightLong
                  onClick={() => setArrow1(!arrow1)}
                  className="ml-10 mr-5 border-2 rounded-2xl text-[40px] sm:text-[50px] pl-2 pr-2 border-[#003b95] bg-[#003b95] text-[#fff]"
                />
              </div>
            )}
          </div>
        </div>
        {/* //// */}
        <div className="sm:w-[72%] w-[100%] sm:h-[55vh] h-[55vh] m-auto flex justify-between">
          <div className=" h-[50vh] w-[30%] mt-10 shadow-2xl rounded-b-2xl">
            <img className=" rounded-t-2xl" src={kkc} />
            <p className="lg:text-[1.3rem] sm:text-[1rem] text-[1rem] sm:w-[100%] lg:w-[70%] w-[100%] font-semibold p-2">
              Dream Destination to Visit In Miami Beach.
            </p>
            <p className="w-[100%] text-[0.9rem] lg:text-[1rem] sm:text-[0.9rem] p-2">
              Aparthotel Maargick is situated in the Podgórze district in
              Kraków, 1.1 km from Kazimierz Jewish District and ICE Kraków
              Congress Centre, and 2 km from Wawel Royal Castle.
            </p>
          </div>
          <div className=" h-[50vh] w-[30%] mt-10 shadow-2xl rounded-b-2xl">
            <img className=" rounded-t-2xl" src={kkc} />
            <p className="lg:text-[1.3rem] sm:text-[1rem] text-[1rem] sm:w-[100%] lg:w-[70%] w-[100%] font-semibold p-2">
              Dream Destination to Visit In Miami Beach.
            </p>
            <p className="w-[100%] text-[0.9rem] lg:text-[1rem] sm:text-[0.9rem] p-2">
              Aparthotel Maargick is situated in the Podgórze district in
              Kraków, 1.1 km from Kazimierz Jewish District and ICE Kraków
              Congress Centre, and 2 km from Wawel Royal Castle.
            </p>
          </div>
          <div className=" h-[50vh] w-[30%] mt-10 shadow-2xl rounded-b-2xl">
            <img className=" rounded-t-2xl" src={kkc} />
            <p className="lg:text-[1.3rem] sm:text-[1rem] text-[1rem] sm:w-[100%] lg:w-[70%] w-[100%] font-semibold p-2">
              Dream Destination to Visit In Miami Beach.
            </p>
            <p className="w-[100%] text-[0.9rem] lg:text-[1rem] sm:text-[0.9rem] p-2">
              Aparthotel Maargick is situated in the Podgórze district in
              Kraków, 1.1 km from Kazimierz Jewish District and ICE Kraków
              Congress Centre, and 2 km from Wawel Royal Castle.
            </p>
          </div>
        </div>

        {/* /// */}
        <div className="flex justify-center text-[#ccc] mt-5 cursor-pointer ">
          <BsRecordFill className="hover:text-[#003b95]" />
          <BsRecordFill className="ml-2 hover:text-[#003b95]" />
          <BsRecordFill className="ml-2 hover:text-[#003b95]" />
          <BsRecordFill className="ml-2 hover:text-[#003b95]" />
        </div>
        {/* /// */}
        <div
          className="w-[90%] h-[50vh] m-auto bg-cover mt-10 rounded-md "
          style={{ backgroundImage: `url(${resort})` }}
        >
          <div className="ml-[150px] w-[100%] mt-[20px] p-[50px]">
            <p className="text-[1.2rem]  text-[#003b95] font-bold">
              Are You Ready To Travel?
            </p>
            <p className="lg:text-[3rem] text-[2rem] mt-5 w-[70%] text-[#003b95]">
              Let's Explore The Beauty Of The World.
            </p>
            <p className="lg:w-[30%] w-[70%] text-[#fff] mt-5">
              Aparthotel Maargick is situated in the Podgórze district in
              Kraków, 1.1 km from Kazimierz Jewish District and.
            </p>
            <button className="p-3 bg-[#003b95] mt-5 rounded-md text-[#fff]">
              Get Started
            </button>
          </div>
        </div>
        {/* //// */}
        <div
          className="w-[90%] h-[50vh] lg:flex lg:justify-between rounded-2xl m-auto mt-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="w-[100%] lg:ml-10 lg:mt-10 ml-2 mt-2 ">
            <div className="mt-5 flex font-bold">
              <FaPlaneDeparture className="text-[2rem]  text-[#003b95]" />
              <p className="text-[2rem]  ml-2 text-[red]">TRAVEL</p>
            </div>
            <p className="lg:mt-10 mt-2">Get in Touch Via Email</p>
            <div className="flex items-center mt-3  text-[1.2rem] cursor-pointer font-bold text-[#fff] bg-[#003b95] xl:w-[35%] lg:w-[50%] w-[50%] p-2 rounded-2xl">
              <CiMail />
              <p className=" ml-1">HoiDanIt@gmail.com</p>
            </div>
          </div>
          <div className="lg:w-[60%] w-[100%] mt-10 flex justify-between mb-10  ">
            <div className="cursor-pointer text-[1.1rem] mt-5 ml-5 lg:w-[20%]">
              <h2 className="text-[1.2rem] font-bold">Quick Links</h2>
              <p className="mt-2 font-sans  text-[#fff] ">Home</p>
              <p className="mt-2  font-sans text-[#fff] ">Destination</p>
              <p className="mt-2 font-sans text-[#fff] ">About</p>
              <p className="mt-2 font-sans text-[#fff] ">Contact</p>
            </div>
            <div className="cursor-pointer text-[1.1rem] ml-5 mt-5 lg:w-[20%] mr-10">
              <h2 className="text-[1.2rem] font-bold">Quick Links</h2>
              <p className="mt-2 font-sans text-[#fff]">Home</p>
              <p className="mt-2  font-sans text-[#fff]">Destination</p>
              <p className="mt-2 font-sans text-[#fff]">About</p>
              <p className="mt-2 font-sans text-[#fff]">Contact</p>
            </div>
            <div className="cursor-pointer text-[1.1rem] mt-5 lg:w-[20%] mr-20">
              <h2 className="text-[1.2rem] font-bold">Quick Links</h2>
              <p className="mt-2 font-sans text-[#fff]">Home</p>
              <p className="mt-2  font-sans text-[#fff]">Destination</p>
              <p className="mt-2 font-sans text-[#fff]">About</p>
              <p className="mt-2 font-sans text-[#fff]">Contact</p>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
    </>
  );
}
