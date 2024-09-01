import { RiUserVoiceLine } from "react-icons/ri";
import { BiGridAlt } from "react-icons/bi";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { SlPlane } from "react-icons/sl";
import { FaChild } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useState } from "react";
import { LuUsers2 } from "react-icons/lu";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { FaMale } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { BiSolidToggleLeft } from "react-icons/bi";
import { BiSolidToggleRight } from "react-icons/bi";
import { Link } from "react-router-dom";
// import "../App.css";

const flights = [
  {
    from: "Hồ Chí Minh",
    to: "Hà Nội",
    customer: "1 người lớn,0 trẻ em, 0 em bé",
    dateTo: "12/12/2023",
    dayAbout: "02/05/2024",
  },
  {
    from: "HN",
    to: "HCM",
    customer: "1 người lớn,1 trẻ em, 0 em bé",
  },
  {
    from: "HCM",
    to: "ĐN",
    customer: "1 người lớn,0 trẻ em, 1 em bé",
  },
];

const [flight] = flights;

function BookTickets() {
  const [click, setClick] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [customer, setCustomer] = useState("");
  // const [news, setNews] = useState([]);
  // useEffect(() => {
  //   const newsData = "http://127.0.0.1:8000/api/news";
  //   const response = fetch(newsData);
  //   const responseJson = response.json();
  //   console.log(responseJson);
  // }, []);
  return (
    <>
      <div className="font-mono md:h-[80vh] h-[90vh]">
        <div>
          <ul className=" flex justify-center items-center  bg-[#000] text-[#fff] p-3 text-[0.875rem] ">
            <li>
              <a className="flex items-center mr-3" href="#">
                <RiUserVoiceLine className="mr-[2px] text-[#0767d3]" />
                Trung tâm trợ giúp
              </a>
            </li>
            <li>
              <a className="flex items-center mr-3" href="#">
                <LiaHandsHelpingSolid className="mr-[2px] text-[#0767d3]" />
                Hợp tác với chúng tôi
              </a>
            </li>
            <li>
              <a className="flex items-center mr-3" href="#">
                <BiGridAlt className="mr-[2px] text-[#0767d3]" />
                App Vietnam Booking
              </a>
            </li>
            <li>
              <a className="flex items-center mr-3" href="#">
                Tìm kiếm
              </a>
            </li>
          </ul>
        </div>
        <div className="relative bg-[black]">
          <div className="bg-[#1759d9] w-[100%] h-[6vh]"></div>
          <div className="absolute mt-3 top-[10%] right-[10%] text-[black] bg-[#fff] w-[80%] h-[70vh] lg:h-[45vh] rounded-md shadow-2xl shadow-slate-300">
            <div className="flex justify-start items-center p-5 bg-[#f6f9ff] text-[#00a1fe] rounded-md">
              <SlPlane className="mr-3 ml-2 bg-[#00a1fe] text-[#fff] w-[2rem] h-[2rem] rounded-md p-1" />
              <h6>Đặt vé máy banh trực tuyến</h6>
            </div>
            <form className="lg:flex lg:justify-between items-center mt-3 ">
              <div className="ml-2 lg:w-[47%] w-[90%]">
                <label className="block mb-1 font-semibold text-[16x] text-[#434343]">
                  Điểm khởi hành
                </label>
                <div className="flex items-center border-2  rounded-md border-slate-500 p-[2px]">
                  <FaMapMarkerAlt className="text-[#ccc] p-[0.1rem] border-r-2" />
                  <input
                    onChange={(e) => setFrom(e.target.value)}
                    value={flight.from || from}
                    className=" w-full  outline-transparent ml-2  "
                    type="text"
                    placeholder="Hồ Chí Minh,Việt Nam(SGN)"
                  />
                </div>
              </div>
              <FaExchangeAlt className="mt-7 w-[100%] text-center ml-2 lg:w-[6%] text-[#0096ff] text-[30px] lg:text-[25px] cursor-pointer" />
              <div className="ml-2 lg:w-[47%] w-[90%]">
                <label className="block mb-1 font-semibold text-[16x] text-[#434343]">
                  Điểm đến
                </label>
                <div className="flex items-center border-2 rounded-md border-slate-500 p-[2px] mr-2">
                  <FaMapMarkerAlt className="text-[#ccc] p-[0.1rem] border-r-2" />
                  <input
                    onChange={(e) => setTo(e.target.value)}
                    value={flight.to || to}
                    className=" w-full  outline-transparent ml-2  "
                    type="text"
                    placeholder="Hà Nội,Việt Nam (HAN)"
                  />
                </div>
              </div>
            </form>
            <form className="lg:flex lg:justify-between items-center mt-3 relative ">
              <div className="ml-2 lg:w-[46%] w-[90%]">
                <label className="block mb-1 font-semibold text-[16x] text-[#434343]">
                  Số hành khách
                </label>
                <div
                  onClick={() => setClick(!click)}
                  className="flex items-center border-2 rounded-md border-slate-500 p-[2px] cursor-pointer"
                >
                  <LuUsers2 className="text-[#ccc] p-[1px] border-r-2" />
                  <input
                    onChange={(e) => setCustomer(e.target.value)}
                    value={flight.customer || customer}
                    className=" w-full z-20  outline-transparent ml-2 cursor-pointer "
                    type="text"
                    placeholder="1 người lớn, 0 trẻ em, 0 em bé"
                  />
                  <AiOutlineCaretDown className="mr-2" />
                </div>
                {click ? (
                  <div className="absolute top-12 left-2  lg:w-[46%] w-[90%] bg-[#fff]">
                    <table className="border-2  border-slate-500  w-full border-t-0 shadow-lg shadow-black-400 ">
                      <tbody>
                        <tr className="flex justify-between items-center lg:mt-5 mt-10 ">
                          <td className="flex items-center text-[#9e9e9e] font-normal font-sans w-[70%] ">
                            <FaMale className="mr-2 ml-2" />
                            <span>Người lớn (từ 12 tuổi)</span>
                          </td>
                          <td className="w-[30%] flex justify-end items-center ">
                            <button className=" font-black bg-[#dedede] text-[red] text-[20px] pt-[0.5px] pb-[0.5px] pr-[10px] pl-[10px] rounded-sm">
                              -
                            </button>
                            <span className="mr-3 ml-3">1</span>
                            <button className="font-black mr-2  bg-[#dedede] text-[green] text-[20px] pt-[0.5px] pb-[0.5px] pr-[10px] pl-[10px] rounded-sm">
                              +
                            </button>
                          </td>
                        </tr>
                        <tr className="flex justify-between items-center mt-5 ">
                          <td className="flex items-center text-[#9e9e9e] font-normal font-sans w-[70%] ">
                            <FaChild className="mr-2 ml-2" />
                            <span>Trẻ em (từ 2 - 11 tuổi)</span>
                          </td>
                          <td className="w-[30%] flex justify-end items-center ">
                            <button className=" font-black bg-[#dedede] text-[red] text-[20px] pt-[0.5px] pb-[0.5px] pr-[10px] pl-[10px] rounded-sm">
                              -
                            </button>
                            <span className="mr-3 ml-3">1</span>
                            <button className="font-black mr-2  bg-[#dedede] text-[green] text-[20px] pt-[0.5px] pb-[0.5px] pr-[10px] pl-[10px] rounded-sm">
                              +
                            </button>
                          </td>
                        </tr>
                        <tr className="flex justify-between items-center mt-5 mb-5 ">
                          <td className="flex items-center text-[#9e9e9e] font-normal font-sans w-[70%] ">
                            <span className="ml-9">Em bé (dưới 2 tuổi))</span>
                          </td>
                          <td className="w-[30%] flex justify-end items-center ">
                            <button className=" font-black bg-[#dedede] text-[red] text-[20px] pt-[0.5px] pb-[0.5px] pr-[10px] pl-[10px] rounded-sm">
                              -
                            </button>
                            <span className="mr-3 ml-3">1</span>
                            <button className="font-black mr-2  bg-[#dedede] text-[green] text-[20px] pt-[0.5px] pb-[0.5px] pr-[10px] pl-[10px] rounded-sm">
                              +
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="ml-2 lg:w-[46%] w-[90%] lg:flex lg:justify-between items-center">
                <div className="lg:w-[50%] w-[100%]">
                  <label className="block mb-1 font-semibold text-[16x] text-[#434343]">
                    Ngày khởi hành
                  </label>
                  <div className="flex items-center border-2 rounded-md border-slate-500 p-[2px] mr-2">
                    <MdCalendarMonth className="text-[#ccc] text-[16px]  border-r-2" />
                    <input
                      value={flight.dateTo}
                      className=" w-[100%]  outline-transparent ml-2  "
                      type="date"
                    />
                  </div>
                </div>
                {toggle ? (
                  <div className="lg:w-[50%] w-[100%] mb-8">
                    <div className="flex items-center">
                      <label className="block  font-semibold text-[16x] text-[#434343]">
                        Ngày về
                      </label>
                      <BiSolidToggleLeft
                        onClick={() => setToggle(!toggle)}
                        className=" ml-10 text-[25px] cursor-pointer text-[#ccc]"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="lg:w-[50%] w-[100%]">
                    <div className="flex items-center">
                      <label className="block mb-1 font-semibold text-[16x] text-[#434343]">
                        Ngày về
                      </label>
                      <BiSolidToggleRight
                        // value={flight.dayAbout}
                        onClick={() => setToggle(!toggle)}
                        className=" ml-10 text-[25px] cursor-pointer text-[#14c038]"
                      />
                    </div>
                    <div className="flex items-center border-2 rounded-md border-slate-500 p-[2px] mr-2">
                      <MdCalendarMonth className="text-[#ccc]  border-r-2" />
                      <input
                        className=" w-full  outline-transparent ml-2  "
                        type="date"
                        placeholder="Hà Nội,Việt Nam (HAN)"
                      />
                    </div>
                  </div>
                )}
              </div>
            </form>

            <div className=" w-full ">
              <div className="flex xl:w-[20%] lg:w-[30%] w-[100%] mt-5 m-auto justify-center items-center mr-5 pr-[15px] font-sans leading-10 pl-[15px] rounded-md border-0 border-slate-500 bg-[#002499] text-[18px] text-[#fff]">
                <FaSearch />

                <Link
                  to={`/Chuyen-Di?from=${flight.from}&to=${flight.to}&customer=${flight.customer}&dateTo=${flight.dateTo}&dayAbout=${flight.dayAbout}`}
                  className="ml-1"
                  type="submit "
                >
                  Tìm chuyến bay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookTickets;
