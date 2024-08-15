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
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa6";
// import "../App.css";
import logo from "../../assets/img/logo_VU.png";
import { FaChevronRight } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaPlane } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const flights = [
  {
    from: "Hồ Chí Minh",
    to: "Hà Nội",
    customer: "1 người lớn,0 trẻ em, 0 em bé",
    dateTo: "12/12/2023",
    dayAbout: "02/05/2024",
    price: "1,890,000 VND",
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
export default function ChuyenDi() {
  const [toggle, setToggle] = useState(true);
  const [caret, setCaret] = useState(false);
  const [caret1, setCaret1] = useState(false);
  const [caret2, setCaret2] = useState(false);
  const [caret3, setCaret3] = useState(false);
  let [searchParams] = useSearchParams();
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const customer = searchParams.get("customer");
  const dateTo = searchParams.get("dateTo");
  const dayAbout = searchParams.get("dayAbout");
  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState(false);
  const handleClick = () => {
    setTimeout(() => {
      setClick(!click);
    }, 1000);
  };

  return (
    <>
      {click ? (
        <>
          <div className="bg-[#fff] xl:h-[52vh] h-[100vh] w-full  pt-[50px] pb-[50px]">
            <div className="lg:flex lg:justify-center items-center w-full">
              <div>
                <div className="flex xl:flex xl:justify-center justify-center items-center text-[20px] text-[#000] font-semibold font-sans">
                  <p className="text-[20px] ">{from}, Việt Nam</p>
                  <FaExchangeAlt className="mr-2 ml-2" />
                  <p>
                    {" "}
                    {to} <span>, Việt Nam</span>
                  </p>
                </div>
                <div className="text-[18px] text-center text-[#3d3d3d] mt-[5px] mb-[5px] font-normal">
                  <p>
                    Ngày đi: <span>{dateTo}</span> - Ngày về:{" "}
                    <span>{dayAbout}</span>
                  </p>
                </div>
                <div className="text-[18px] text-center text-[#3d3d3d] font-normal">
                  <p>
                    Số hành khách: <span>{customer}</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-center w-[50%] items-center border-2 rounded-md bg-[#024feb] lg:w-[200px] leading-10 text-[#fff] text-[18px] font-normal ml-10">
                <Link
                  to={`/Chuyen-Di?from=${from}&to=${to}&customer=${customer}&dateTo=${dateTo}&dayAbout=${dayAbout}`}
                  onClick={() => handleClick()}
                  type="submit"
                >
                  Thay đổi chuyến bay
                </Link>
                <FaChevronRight className="ml-1" />
              </div>
            </div>
            {/* nháp */}
            <div className="font-mono">
              <div className="relative bg-[black] ">
                <div className="absolute mt-3 top-[10%]  lg:right-[25%] left-50 text-[black] w-[100%] bg-[#fff] lg:w-[50%] h-[35vh]  ">
                  <form className="xl:flex xl:justify-between items-center mt-3 ">
                    <div className="ml-2 xl:w-[47%] w-[90%] ">
                      <label className="block mb-1 font-semibold text-[16x] text-[#434343]">
                        Điểm khởi hành
                      </label>
                      <div className="flex items-center border-2 rounded-md border-slate-500 p-[2px]">
                        <FaMapMarkerAlt className="text-[#ccc] p-[0.1rem] border-r-2" />
                        <input
                          value={flight.from}
                          className=" w-full  outline-transparent ml-2  "
                          type="text"
                          placeholder="Hồ Chí Minh,Việt Nam(SGN)"
                        />
                      </div>
                    </div>
                    <FaExchangeAlt className="mt-7 ml-2 w-[100%] xl:w-[6%] text-[#0096ff] text-[25px] cursor-pointer" />
                    <div className="ml-2 xl:w-[47%] w-[90%]">
                      <label className="block mb-1 font-semibold text-[16x] text-[#434343]">
                        Điểm đến
                      </label>
                      <div className="flex items-center border-2 rounded-md border-slate-500 p-[2px] mr-2">
                        <FaMapMarkerAlt className="text-[#ccc] p-[0.1rem] border-r-2" />
                        <input
                          value={flight.to}
                          className=" w-full  outline-transparent ml-2  "
                          type="text"
                          placeholder="Hà Nội,Việt Nam (HAN)"
                        />
                      </div>
                    </div>
                  </form>
                  <form className="xl:flex xl:justify-between items-center mt-3 relative ">
                    <div className="ml-2 xl:w-[46%] w-[90%]">
                      <label className="block mb-1 font-semibold text-[16x] text-[#434343]">
                        Số hành khách
                      </label>
                      <div
                        onClick={() => setClick1(!click1)}
                        className="flex items-center  border-2 rounded-md border-slate-500 p-[2px] cursor-pointer"
                      >
                        <LuUsers2 className="text-[#ccc] p-[1px] border-r-2" />
                        <input
                          value={flight.customer}
                          className=" w-full z-20  outline-transparent ml-2 cursor-pointer "
                          type="text"
                          placeholder="1 người lớn, 0 trẻ em, 0 em bé"
                        />
                        <AiOutlineCaretDown className="mr-2" />
                      </div>
                      {click1 ? (
                        <div className="absolute top-12 left-2 xl:w-[46%] w-[90%] bg-[#fff] z-10">
                          <table className="border-2 border-slate-500  w-full border-t-0 shadow-lg shadow-black-400 ">
                            <tbody>
                              <tr className="flex justify-between items-center xl:mt-5 mt-10 ">
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
                                  <span className="ml-9">
                                    Em bé (dưới 2 tuổi))
                                  </span>
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
                    <div className="ml-2 xl:w-[46%] w-[100%] xl:flex xl:justify-between items-center">
                      <div className="xl:w-[50%] w-[90%]">
                        <label className="block mb-1 font-semibold text-[16x] text-[#434343]">
                          Ngày khởi hành
                        </label>
                        <div className="flex items-center border-2 rounded-md border-slate-500 p-[2px] mr-2">
                          <MdCalendarMonth className="text-[#ccc] text-[16px]  border-r-2" />
                          <input
                            className=" w-[100%]  outline-transparent ml-2  "
                            type="date"
                            placeholder="Hà Nội,Việt Nam (HAN)"
                          />
                        </div>
                      </div>
                      {toggle ? (
                        <div className="w-[50%] mb-8">
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
                        <div className="xl:w-[50%] w-[90%]">
                          <div className="flex items-center">
                            <label className="block mb-1 font-semibold text-[16x] text-[#434343]">
                              Ngày về
                            </label>
                            <BiSolidToggleRight
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
                    <div className="flex 2xl:w-[25%]  w-[50%] mt-5 m-auto justify-center items-center mr-5 pr-[15px] font-sans leading-10 pl-[15px] rounded-md border-0 border-slate-500 bg-[#002499] text-[18px] text-[#fff]">
                      <FaSearch />

                      <button className="ml-1" type="submit ">
                        Tìm chuyến bay
                      </button>
                    </div>
                  </div>
                  {/* /// */}
                  <div className="xl:flex  w-full mt-10">
                    <h5 className="ml-5 xl:ml-[0]">Lọc theo:</h5>
                    <div className="flex items-center ml-5 text-[#3d3d3d] text-[18px] font-sans">
                      <p className="mt-2 xl:mt-0">Thời gian bay</p>
                      <FaCaretDown
                        onClick={() => setCaret(!caret)}
                        className="text-[#0fadf6] ml-2 cursor-pointer"
                      />
                    </div>

                    <div className="flex items-center  ml-5 text-[#3d3d3d] text-[18px] font-sans">
                      <p className="mt-2 xl:mt-[0]">Hãng hàng không</p>
                      <FaCaretDown
                        onClick={() => setCaret1(!caret1)}
                        className="text-[#0fadf6] ml-2 cursor-pointer"
                      />
                    </div>
                    <div className="flex items-center ml-5 text-[#3d3d3d] text-[18px] font-sans">
                      <p className="mt-2 xl:mt-[0]">Chế độ hiện thị</p>
                      <FaCaretDown
                        onClick={() => setCaret2(!caret2)}
                        className="text-[#0fadf6] ml-2 cursor-pointer"
                      />
                    </div>
                    <div className="flex items-center ml-5 text-[#3d3d3d] text-[18px] font-sans">
                      <p className="mt-2 xl:mt-[0]">Sắp xếp</p>
                      <FaCaretDown
                        onClick={() => setCaret3(!caret3)}
                        className="text-[#0fadf6] ml-2 cursor-pointer"
                      />
                    </div>
                    <div>
                      <a
                        className="ml-5 text-[blue] text-[18px] mt-2 xl:mt-[0]"
                        href="#"
                      >
                        Xem ngày khác
                      </a>
                    </div>
                  </div>
                  {caret ? (
                    <div className="w-[300px]  xl:mt-3 2xl:top-[320px] xl:top-[340px] z-10 absolute top-[175%] bg-[#fff] h-[200px] border-2 border-t-blue-500 ml-20 mt-2 ">
                      <div className="absolute 2xl-left-[120px] top-[-11px] left-[50px]">
                        <FaCaretUp className="text-[#0fadf6]" />
                      </div>
                      <div className="flex justify-center items-center text-[16px] text-[#3d3d3d] mb-[10px] mt-2">
                        <p className="ml-2">Thời gian cất cánh</p>
                        <p>Thời gian hạ cánh</p>
                      </div>
                      <div className="flex justify-center items-center">
                        <div className="flex items-center text-[#787878] text-[15px] cursor-pointer font-light">
                          <input type="checkbox" />
                          <p className="ml-2">06:00 - 12:00</p>
                        </div>
                        <div className="flex items-center text-[#787878] text-[15px] cursor-pointer font-light ml-3">
                          <input type="checkbox" />
                          <p className="ml-2">06:00 - 12:00</p>
                        </div>
                      </div>
                      <div className="flex justify-center items-center mt-2">
                        <div className="flex items-center text-[#787878] text-[15px] cursor-pointer font-light">
                          <input type="checkbox" />
                          <p className="ml-2">00:00 - 06:00</p>
                        </div>
                        <div className="flex items-center text-[#787878] text-[15px] cursor-pointer font-light ml-3">
                          <input type="checkbox" />
                          <p className="ml-2">00:00 - 06:00</p>
                        </div>
                      </div>
                      <div className="flex justify-center items-center mt-2">
                        <div className="flex items-center text-[#787878] text-[15px] cursor-pointer font-light">
                          <input type="checkbox" />
                          <p className="ml-2">12:00 - 18:00</p>
                        </div>
                        <div className="flex items-center text-[#787878] text-[15px] cursor-pointer font-light ml-3">
                          <input type="checkbox" />
                          <p className="ml-2">12:00 - 18:00</p>
                        </div>
                      </div>
                      <div className="flex justify-center items-center mt-2">
                        <div className="flex items-center text-[#787878] text-[15px] cursor-pointer font-light">
                          <input type="checkbox" />
                          <p className="ml-2">18:00 - 18:00</p>
                        </div>
                        <div className="flex items-center text-[#787878] text-[15px] cursor-pointer font-light ml-3">
                          <input type="checkbox" />
                          <p className="ml-2">18:00 - 18:00</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                  {caret1 ? (
                    <div className="w-[300px] 2xl:ml-[200px] ml-10 xl:top-[330px]  h-[170px]  bg-[#fff] z-10 border-2 border-t-blue-500  mt-2 absolute top-[185%] ">
                      <div className="absolute xl:left-[200px] top-[-12px] left-[120px]">
                        <FaCaretUp className="text-[#0fadf6]" />
                      </div>
                      <div>
                        <div className="flex justify-start items-center text-[18px] text-[#787878] cursor-pointer font-normal mt-3 ml-2">
                          <input className="mr-3" type="checkbox" />
                          <p>Bamboo Airlines</p>
                        </div>
                        <div className="flex justify-start items-center text-[18px] text-[#787878] cursor-pointer font-normal mt-3 ml-2">
                          <input className="mr-3" type="checkbox" />
                          <p> Vietjet Air</p>
                        </div>
                        <div className="flex justify-start items-center text-[18px] text-[#787878] cursor-pointer font-normal mt-3 ml-2">
                          <input className="mr-3" type="checkbox" />
                          <p> Vietnam Airlines</p>
                        </div>
                        <div className="flex justify-start items-center text-[18px] text-[#787878] cursor-pointer font-normal mt-3 ml-2">
                          <input className="mr-3" type="checkbox" />
                          <p> Vietravel Airlines</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                  {caret2 ? (
                    <div className="w-[300px] 2xl:ml-[400px] xl:top-[100%] xl:ml-[300px] h-[90px] z-10 border-2 bg-[#fff] border-t-blue-500 ml-20 mt-2 absolute top-[195%] ">
                      <div className="absolute xl:left-[120px] top-[-12px] left-[55px]">
                        <FaCaretUp className="text-[#0fadf6]" />
                      </div>
                      <div className="flex justify-start items-center text-[18px] text-[#787878] cursor-pointer font-normal mt-3 ml-2">
                        <input className="mr-3" type="checkbox" />
                        <p> Giá cơ bản cho 1 người lớn</p>
                      </div>
                      <div className="flex justify-start items-center text-[18px] text-[#787878] cursor-pointer font-normal mt-3 ml-2">
                        <input className="mr-3" type="checkbox" />
                        <p> Giá đã bao gồm thuế và phí</p>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                  {caret3 ? (
                    <div className="w-[300px] 2xl:ml-[550px] xl:ml-[420px]  xl:top-[100%]   lg:ml-[2px] lg:top-[205%] h-[250px] z-10 border-2 bg-[#fff] border-t-blue-500 ml-19 mt-2 absolute top-[205%] ">
                      <div className="absolute xl:left-[120px] top-[-12px] left-[80px]">
                        <FaCaretUp className="text-[#0fadf6]" />
                      </div>
                      <div className="flex justify-start items-center text-[18px] text-[#787878] cursor-pointer font-normal mt-3 ml-2">
                        <input className="mr-3" type="checkbox" />
                        <p> Giá thấp nhất</p>
                      </div>
                      <div className="flex justify-start items-center text-[18px] text-[#787878] cursor-pointer font-normal mt-3 ml-2">
                        <input className="mr-3" type="checkbox" />
                        <p> Khởi hành sớm nhất</p>
                      </div>
                      <div className="flex justify-start items-center text-[18px] text-[#787878] cursor-pointer font-normal mt-3 ml-2">
                        <input className="mr-3" type="checkbox" />
                        <p> Khởi hành muộn nhất</p>
                      </div>
                      <div className="flex justify-start items-center text-[18px] text-[#787878] cursor-pointer font-normal mt-3 ml-2">
                        <input className="mr-3" type="checkbox" />
                        <p> Hạ cánh sớm nhất</p>
                      </div>
                      <div className="flex justify-start items-center text-[18px] text-[#787878] cursor-pointer font-normal mt-3 ml-2">
                        <input className="mr-3" type="checkbox" />
                        <p> Hạ cánh muộn nhất</p>
                      </div>
                      <div className="flex justify-start items-center text-[18px] text-[#787878] cursor-pointer font-normal mt-3 ml-2">
                        <input className="mr-3" type="checkbox" />
                        <p> Thời gian ngắn nhất</p>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            {/* nháp */}
          </div>
        </>
      ) : (
        <>
          <div className="bg-[#fff] w-full   pt-[50px] pb-[50px] ">
            <div className="lg:flex lg:justify-center lg:ml-[200px] items-center w-full xl:ml-[500px]">
              <div>
                <div className="flex lg:justify-end   justify-center items-center text-[20px] t-[#000] font-semibold font-sans">
                  <p className="text-[20px] ">{from}, Việt Nam</p>
                  <FaExchangeAlt className="mr-2 ml-2" />
                  <p> {to}, Việt Nam</p>
                </div>
                <div className="text-[18px] text-center text-[#3d3d3d] mt-[5px] mb-[5px] font-normal">
                  <p>
                    Ngày đi: <span>{dateTo}</span> - Ngày về:{" "}
                    <span>{dayAbout}</span>
                  </p>
                </div>
                <div className="text-[18px] text-center text-[#3d3d3d] font-normal">
                  <p>
                    Số hành khách: <span>{customer}</span>
                  </p>
                </div>
              </div>
              <div
                onClick={() => handleClick()}
                className="flex justify-center w-[90%] m-auto items-center border-2 rounded-md bg-[#024feb] lg:w-[200px] leading-10 text-[#fff] text-[18px] font-normal lg:ml-10"
              >
                <Link
                  to={`/Chuyen-Di?from=${from}&to=${to}&customer=${customer}&dateTo=${dateTo}&dayAbout=${dayAbout}`}
                >
                  Thay đổi chuyến bay
                </Link>
                <FaChevronRight className="ml-1" />
              </div>
            </div>
            {/* nháp */}
            <div className="font-mono">
              <div className="relative 2xl:ml-[200px]  w-[100%] h-[60vh] ">
                <div className="absolute mt-3 top-[5%]  left-[10%] text-[black] bg-[#fff] w-[90%] lg:w-[100%] h-[100vh] lg:h-[35vh]  ">
                  <div className="lg:flex w-full mt-10">
                    <h5 className="ml-5 lg:ml-[0px]">Lọc theo:</h5>
                    <div className="flex items-center ml-5 text-[#3d3d3d] text-[18px] font-sans">
                      <p className="mt-2 lg:mt-[0px]">Thời gian bay</p>
                      <FaCaretDown
                        onClick={() => setCaret(!caret)}
                        className="text-[#0fadf6] ml-2 cursor-pointer"
                      />
                    </div>

                    <div className="flex items-center ml-5 text-[#3d3d3d] text-[18px] font-sans">
                      <p className="mt-2 lg:mt-[0px]">Hãng hàng không</p>
                      <FaCaretDown
                        onClick={() => setCaret1(!caret1)}
                        className="text-[#0fadf6] ml-2 cursor-pointer"
                      />
                    </div>
                    <div className="flex items-center ml-5 text-[#3d3d3d] text-[18px] font-sans">
                      <p className="mt-2 lg:mt-[0px]">Chế độ hiện thị</p>
                      <FaCaretDown
                        onClick={() => setCaret2(!caret2)}
                        className="text-[#0fadf6] ml-2 cursor-pointer"
                      />
                    </div>
                    <div className="flex items-center ml-5 text-[#3d3d3d] text-[18px] font-sans">
                      <p className="mt-2 lg:mt-[0px]">Sắp xếp</p>
                      <FaCaretDown
                        onClick={() => setCaret3(!caret3)}
                        className="text-[#0fadf6] ml-2 cursor-pointer"
                      />
                    </div>
                    <div>
                      <a
                        className="ml-5  lg:mt-[0px] text-[blue] text-[18px]"
                        href="#"
                      >
                        Xem ngày khác
                      </a>
                    </div>
                  </div>
                  {caret ? (
                    <div className="w-[300px]  lg:top-[20%] bg-[#fff] absolute z-10 top-[10%] h-[200px] border-2 border-t-blue-500 ml-10 mt-2 ">
                      <div className="absolute lg:left-[160px] top-[-12px] left-[90px]">
                        <FaCaretUp className="text-[#0fadf6]" />
                      </div>
                      <div className="flex justify-center items-center text-[16px] text-[#3d3d3d] mb-[10px] mt-2">
                        <p className="ml-2">Thời gian cất cánh</p>
                        <p>Thời gian hạ cánh</p>
                      </div>
                      <div className="flex justify-center items-center">
                        <div className="flex items-center text-[#787878] text-[15px] cursor-pointer font-light">
                          <input type="checkbox" />
                          <p className="ml-2">06:00 - 12:00</p>
                        </div>
                        <div className="flex items-center text-[#787878] text-[15px] cursor-pointer font-light ml-3">
                          <input type="checkbox" />
                          <p className="ml-2">06:00 - 12:00</p>
                        </div>
                      </div>
                      <div className="flex justify-center items-center mt-2">
                        <div className="flex items-center text-[#787878] text-[15px] cursor-pointer font-light">
                          <input type="checkbox" />
                          <p className="ml-2">00:00 - 06:00</p>
                        </div>
                        <div className="flex items-center text-[#787878] text-[15px] cursor-pointer font-light ml-3">
                          <input type="checkbox" />
                          <p className="ml-2">00:00 - 06:00</p>
                        </div>
                      </div>
                      <div className="flex justify-center items-center mt-2">
                        <div className="flex items-center text-[#787878] text-[15px] cursor-pointer font-light">
                          <input type="checkbox" />
                          <p className="ml-2">12:00 - 18:00</p>
                        </div>
                        <div className="flex items-center text-[#787878] text-[15px] cursor-pointer font-light ml-3">
                          <input type="checkbox" />
                          <p className="ml-2">12:00 - 18:00</p>
                        </div>
                      </div>
                      <div className="flex justify-center items-center mt-2">
                        <div className="flex items-center text-[#787878] text-[15px] cursor-pointer font-light">
                          <input type="checkbox" />
                          <p className="ml-2">18:00 - 18:00</p>
                        </div>
                        <div className="flex items-center text-[#787878] text-[15px] cursor-pointer font-light ml-3">
                          <input type="checkbox" />
                          <p className="ml-2">18:00 - 18:00</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                  {caret1 ? (
                    <div className="w-[300px] lg:ml-[200px] lg:mt-[30px] h-[170px] border-2 border-t-blue-500 bg-[#fff] ml-10 mt-2 absolute top-[14%] ">
                      <div className="absolute lg:left-[195px] top-[-12px] left-[120px]">
                        <FaCaretUp className="text-[#0fadf6]" />
                      </div>
                      <div>
                        <div className="flex justify-start items-center text-[18px] text-[#787878] cursor-pointer font-normal mt-3 ml-2">
                          <input className="mr-3" type="checkbox" />
                          <p>Bamboo Airlines</p>
                        </div>
                        <div className="flex justify-start items-center text-[18px] text-[#787878] cursor-pointer font-normal mt-3 ml-2">
                          <input className="mr-3" type="checkbox" />
                          <p> Vietjet Air</p>
                        </div>
                        <div className="flex justify-start items-center text-[18px] text-[#787878] cursor-pointer font-normal mt-3 ml-2">
                          <input className="mr-3" type="checkbox" />
                          <p> Vietnam Airlines</p>
                        </div>
                        <div className="flex justify-start items-center text-[18px] text-[#787878] cursor-pointer font-normal mt-3 ml-2">
                          <input className="mr-3" type="checkbox" />
                          <p> Vietravel Airlines</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                  {caret2 ? (
                    <div className="w-[300px] lg:mt-[28px] lg:ml-[400px] h-[90px] border-2 border-t-blue-500  bg-[#fff] ml-10 mt-2 absolute top-[17.5%] ">
                      <div className="absolute lg:left-[160px] top-[-12px] left-[100px]">
                        <FaCaretUp className="text-[#0fadf6]" />
                      </div>
                      <div className="flex justify-start items-center text-[18px] text-[#787878] cursor-pointer font-normal mt-3 ml-2">
                        <input className="mr-3" type="checkbox" />
                        <p> Giá cơ bản cho 1 người lớn</p>
                      </div>
                      <div className="flex justify-start items-center text-[18px] text-[#787878] cursor-pointer font-normal mt-3 ml-2">
                        <input className="mr-3" type="checkbox" />
                        <p> Giá đã bao gồm thuế và phí</p>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                  {caret3 ? (
                    <div className="w-[300px] lg:ml-[550px] h-[240px] border-2 border-t-blue-500 bg-[#fff] ml-10 mt-2 absolute top-[21%] ">
                      <div className="absolute lg:left-[120px] top-[-12px] left-[40px]">
                        <FaCaretUp className="text-[#0fadf6]" />
                      </div>
                      <div className="flex justify-start items-center text-[18px] text-[#787878] cursor-pointer font-normal mt-3 ml-2">
                        <input className="mr-3" type="checkbox" />
                        <p> Giá thấp nhất</p>
                      </div>
                      <div className="flex justify-start items-center text-[18px] text-[#787878] cursor-pointer font-normal mt-3 ml-2">
                        <input className="mr-3" type="checkbox" />
                        <p> Khởi hành sớm nhất</p>
                      </div>
                      <div className="flex justify-start items-center text-[18px] text-[#787878] cursor-pointer font-normal mt-3 ml-2">
                        <input className="mr-3" type="checkbox" />
                        <p> Khởi hành muộn nhất</p>
                      </div>
                      <div className="flex justify-start items-center text-[18px] text-[#787878] cursor-pointer font-normal mt-3 ml-2">
                        <input className="mr-3" type="checkbox" />
                        <p> Hạ cánh sớm nhất</p>
                      </div>
                      <div className="flex justify-start items-center text-[18px] text-[#787878] cursor-pointer font-normal mt-3 ml-2">
                        <input className="mr-3" type="checkbox" />
                        <p> Hạ cánh muộn nhất</p>
                      </div>
                      <div className="flex justify-start items-center text-[18px] text-[#787878] cursor-pointer font-normal mt-3 ml-2">
                        <input className="mr-3" type="checkbox" />
                        <p> Thời gian ngắn nhất</p>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            {/* nháp */}
          </div>
        </>
      )}
      <div className="bg-[#e6eaed] absolute md:top-[100%] top-[130%] w-[100%] md:h-[70vh] h-[100vh] ">
        <div>
          <div className="border-2 w-[100%]  lg:flex lg:justify-between lg:items-center border-solid p-[25px] min-h-[180px] hover:border-blue-700  rounded-md bg-[#fff] h-[50vh] lg:h-[20vh]  m-auto mt-5 border-slate-400">
            <div className="flex justify-between items-center w-[80%]">
              <div className="ml-5 ">
                <img className="mr-20" src={logo} />
                <span className="text-[16px] block text-[#8f8f8f] mt-[10px]">
                  VU750
                </span>
                <div className="mt-[90px] sm:mt-10 text-[#1065f2] mb-2 ">
                  <a href="#">Chi tiết chuyến bay</a>
                </div>
              </div>
              <div>
                <span className="text-[24px] block text-center font-bold text-[#434343]">
                  05:45
                </span>
                <p className="text-[16px] text-[#434343] p-[10px] font-medium">
                  {from}
                </p>
                <div className="mt-10 w-[100%] text-[#1065f2] mb-4">
                  <a href="#">Thông tin giá vé</a>
                </div>
              </div>
              <div>
                <span className="text-[20px] block text-center text-[#8f8f8f] font-light">
                  02h 5m
                </span>
                <div className=" relative w-[200px]">
                  <div className="border-t-2 border-black"></div>
                  <FaPlane className=" absolute top-[-7px] right-0" />
                </div>
                <span className="text-[20px] block text-center text-[#8f8f8f] font-light">
                  Bay thẳng
                </span>
                <div className="mt-10 w-[100%] text-[#1065f2] ">
                  <a href="#">Điều kiện hành lý vé</a>
                </div>
              </div>
              <div className="lg:mb-[75px] mb-[150px]  mr-4">
                <span className="text-[24px] block text-center font-bold text-[#434343]">
                  07:50
                </span>
                <p className="text-[16px] text-[#434343] p-[10px] font-medium">
                  {to}
                </p>
              </div>
            </div>
            <div className="border-l-2 border-dashed sm:w-[50%] w-[100%] lg:w-[20%] h-[194px] ml-3">
              <div className="text-[20px] text-[#434343] font-bold text-center ml-5 mt-5">
                ECONOMY
              </div>
              <div className="text-[26px] w-[100%] text-[#ff9000] font-bold text-center mt-2 ml-5">
                1,890,000 VND
              </div>
              <div className=" pt-[5px] ml-[48px] mt-3 pb-[5px] pr-[34px] pl-[34px] font-bold w-[70%] flex justify-center items-center border-2 text-[#fff] bg-[#ff9000] text-[18px] rounded-[25px]">
                <Link
                  to={`/booking?from=${from}&to=${to}&price=${flight.price}&dateTo=${dateTo}`}
                >
                  Chọn
                </Link>
                <FaArrowRight className="ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
