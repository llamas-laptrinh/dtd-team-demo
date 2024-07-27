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

const flights = [
  {
    from: "HCM",
    to: "HN",
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
function Tbody() {
  const [click, setClick] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [caret, setCaret] = useState(false);
  return (
    <>
      <div className="font-mono">
        <div className="relative bg-[black] ">
          <div className="absolute mt-3 top-[10%] right-[25%] text-[black] bg-[#fff] w-[50%] h-[35vh]  ">
            <form className="flex justify-between items-center mt-3 ">
              <div className="ml-2 w-[47%]">
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
              <FaExchangeAlt className="mt-7 ml-2 w-[6%] text-[#0096ff] text-[25px] cursor-pointer" />
              <div className="ml-2 w-[47%]">
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
            <form className="flex justify-between items-center mt-3 relative ">
              <div className="ml-2 w-[46%]">
                <label className="block mb-1 font-semibold text-[16x] text-[#434343]">
                  Số hành khách
                </label>
                <div
                  onClick={() => setClick(!click)}
                  className="flex items-center border-2 rounded-md border-slate-500 p-[2px] cursor-pointer"
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
                {click ? (
                  <div className="absolute top-12 left-2 w-[46%] bg-[#fff] z-10">
                    <table className="border-2 border-slate-500  w-full border-t-0 shadow-lg shadow-black-400 ">
                      <tbody>
                        <tr className="flex justify-between items-center mt-5 ">
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
              <div className="ml-2 w-[46%] flex justify-between items-center">
                <div className="w-[50%]">
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
                  <div className="w-[50%]">
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
              <div className="flex w-[25%] mt-5 m-auto justify-center items-center mr-5 pr-[15px] font-sans leading-10 pl-[15px] rounded-md border-0 border-slate-500 bg-[#002499] text-[18px] text-[#fff]">
                <FaSearch />

                <button className="ml-1">Tìm chuyến bay</button>
              </div>
            </div>
            <div onClick={() => setCaret(!caret)} className="flex w-full mt-10">
              <h5>Lọc theo:</h5>
              <div className="flex items-center ml-3 text-[#3d3d3d] text-[18px] font-sans">
                <p>Thời gian bay</p>
                <FaCaretDown className="text-[#0fadf6] ml-2 cursor-pointer" />
              </div>
            </div>
            <div className="w-[300px] h-[200px] border-2 border-t-blue-500 ml-10 mt-2">
              <div className="absolute top-[298px] left-[210px]">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Tbody;
