import summary from "../../assets/img/summary.svg";
import logo from "../../assets/img/logo.png";
import user from "../../assets/img/user.svg";
import passenger from "../../assets/img/passenger.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";
import { PiToggleLeftFill } from "react-icons/pi";
import { PiToggleRightFill } from "react-icons/pi";
import { useState } from "react";
export default function Booking() {
  let [searchParams] = useSearchParams();
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const price = searchParams.get("price");
  const dateTo = searchParams.get("dateTo");
  const [chevron, setChevron] = useState(false);
  const [toggle, setToggle] = useState(true);
  return (
    <div className="bg-[#edeef1] w-[100%] xl:h-[100vh]  md:mt-[50px] h-[140vh] mt-[100px]">
      <div className=" flex justify-center items-center">
        <div className="xl:flex :justify-center w-[100%] lg:w-[60%]">
          <div className="bg-[#fff] border-2 w-[100%] xl:w-[70%] h-[50vh] lg:h-[47vh] rounded-lg shadow-2xl ">
            <div className="flex justify-start items-center bg-[#fff] text-[#0064d2] text-[20px] font-bold">
              <img src={user} className="text-[3.3rem]  p-3 mt-5 ml-5" />
              <span className="mt-5 ml-6">Thông tin liên hệ</span>
            </div>
            <div className="w-[100%]">
              <div className="flex items-center w-[100%]">
                <p className="w-[30%] ml-5 mt-5 text-[16px] text-[#8a93a7]">
                  Quý danh
                </p>
                <p className="w-[70%] ml-3 mt-5 text-[16px] text-[#8a93a7]">
                  Họ tên
                </p>
              </div>
              <form className="flex items-center w-[100%] mt-3">
                <select className="w-[30%] border-2 ml-5 mr-5 rounded-md text-[14px] outline-0 min-h-[40px]">
                  <option value="anh">Anh</option>
                  <option value="chi">Chị</option>
                  <option value="ong">Ông</option>
                  <option value="ba">Bà</option>
                </select>
                <div className="flex w-[70%]  mr-5 rounded-md min-h-[40px]">
                  <input
                    className="outline-none rounded-md w-[100%] ml-3 "
                    type="text"
                  />
                </div>
              </form>
              <div className="flex items-center w-[100%]">
                <p className="w-[50%] ml-5 mt-5 text-[16px] text-[#8a93a7]">
                  Email
                </p>
                <p className="w-[50%] ml-3 mt-5 text-[16px] text-[#8a93a7]">
                  Số điện thoại
                </p>
              </div>
              <div className="w-[100%] flex mt-3">
                <input
                  className="border-2 outline-none w-[45%] ml-5 rounded-md min-h-[40px]"
                  type="text"
                />
                <input
                  className="border-2 outline-none w-[46%] ml-8 rounded-md min-h-[40px]"
                  type="text"
                />
              </div>
              <div className="flex items-center w-[100%]">
                <p className="w-[50%] ml-5 mt-5 text-[16px] text-[#8a93a7]">
                  Yêu cầu đặt biệt
                </p>
              </div>
              <div className="w-[100%] mt-3">
                <input
                  className="border-2 outline-none w-[95%] ml-5 rounded-md min-h-[40px]"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#fff]  xl:w-[30%] w-[100%] xl:mt-0 mt-5 h-[40vh] xl:ml-7 p-5 shadow-2xl rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex items-center bg-[#fff] text-[#0064d2] text-[20px] font-bold">
                <img src={summary} />
                <span className="ml-3">Đặt chỗ của bạn</span>
              </div>
              <div className="text-[14px] text-[#22323f] font-semibold hover:underline">
                <a href="#">Chi tiết</a>
              </div>
            </div>
            <div className="bg-[#f5f6fa] text-[#22313f] font-bold w-[100%] flex justify-start items-center leading-10 rounded-md mt-4 text-[14px]">
              <p className="ml-2">{from}</p>

              <FaArrowRightLong className="ml-2 mr-2" />
              <p>{to}</p>
            </div>
            <div className="flex mt-5">
              <img className="w-[7%] h-[20px]" src={logo} />
              <div className="ml-5 font-normal text-[14px]">
                <p>Vietravel Airlines</p>
                <p className="mt-1 mb-1">05:45, {dateTo}</p>
                <p>Sân bay quốc tế Tân Sơn Nhất</p>
              </div>
            </div>
            <hr className="mt-4"></hr>
            {chevron ? (
              <>
                <div className="flex justify-between items-center mt-5">
                  <p>Tổng tiền</p>
                  <div
                    onClick={() => setChevron(!chevron)}
                    className="flex justify-center items-center cursor-pointer"
                  >
                    <p className="text-[#ff5e1f] mr-3 font-bold">{price}</p>

                    <FaChevronUp className="text-[blue]" />
                  </div>
                </div>
                <div className="flex justify-between items-center mt-5 font-light ">
                  <p className="text-[#b3c1cf]">Tổng 1 người lớn</p>
                  <div className="flex justify-center items-center ">
                    <p className=" mr-3 font-bold">{price}</p>
                  </div>
                </div>{" "}
              </>
            ) : (
              <>
                <div className="flex justify-between items-center mt-5">
                  <p>Tổng tiền</p>
                  <div
                    onClick={() => setChevron(!chevron)}
                    className="flex justify-center items-center cursor-pointer"
                  >
                    <p className="text-[#ff5e1f] mr-3 font-bold">
                      1,890,000 VND
                    </p>
                    <FaChevronDown className="text-[blue]" />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center rounded-md w-[100%] xl:w-[60%]">
          <div className="bg-[#fff] xl:w-[80%] lg:w-[60%] w-[100%] border-2 h-[33vh]  xl:mr-[32%]  mt-7 rounded-lg shadow-2xl ">
            <div className="flex justify-start items-center bg-[#fff] text-[#0064d2] text-[20px] font-bold">
              <img src={passenger} className="text-[3.3rem]   p-3 mt-5 ml-5" />
              <span className="mt-5 ml-6">Thông tin liên hệ</span>
            </div>
            {toggle ? (
              <div className="bg-[#f5f6fa] text-[#8a93a7] w-[96%] m-auto flex justify-between items-center leading-10 rounded-md mt-4 text-[16px]">
                <p className="ml-2">Người lớn 1</p>
                <div className="flex items-center">
                  <p>Giống với thông tin liên hệ</p>
                  <PiToggleLeftFill
                    onClick={() => setToggle(!toggle)}
                    className="text-[35px] mr-3 ml-5 cursor-pointer"
                  />
                </div>
              </div>
            ) : (
              <div className="bg-[#f5f6fa] text-[#8a93a7] w-[96%] m-auto flex justify-between items-center leading-10 rounded-md mt-4 text-[16px]">
                <p className="ml-2">Người lớn 1</p>
                <div className="flex items-center">
                  <p>Giống với thông tin liên hệ</p>
                  <PiToggleRightFill
                    onClick={() => setToggle(!toggle)}
                    className="text-[35px] mr-3 ml-5 cursor-pointer text-[blue]"
                  />
                </div>
              </div>
            )}
            <div className="w-[100%]">
              <div className="flex items-center w-[100%]">
                <p className="w-[20%] ml-5 mt-5 text-[16px] text-[#8a93a7]">
                  Quý danh
                </p>
                <p className="w-[80%] ml-4 mt-5 text-[16px] text-[#8a93a7]">
                  Họ tên
                </p>
              </div>
              <form className="flex items-center w-[100%] mt-3">
                <select className="w-[20%] border-2 ml-5 mr-5 rounded-md text-[14px] outline-0 min-h-[40px]">
                  <option value="anh">Anh</option>
                  <option value="chi">Chị</option>
                  <option value="ong">Ông</option>
                  <option value="ba">Bà</option>
                </select>
                <div className="flex w-[80%]  mr-5 rounded-md min-h-[40px]">
                  <input
                    className="outline-none ml-3 w-[100%] rounded-md "
                    type="text"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center w-[100%] lg:w-[80%] xl:w-[60.8%] mt-7">
        <button
          className="bg-[#ff5e1f] ml-20  text-[14px] shadow-xl text-[#fff] border-2 pt-[10px] pb-[10px] pr-[50px] pl-[50px] font-bold rounded-md"
          type="submit"
        >
          Tiếp tục
        </button>
      </div>
    </div>
  );
}
