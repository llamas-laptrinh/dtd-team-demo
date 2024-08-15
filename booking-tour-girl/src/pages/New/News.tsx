import { FaMapMarkerAlt } from "react-icons/fa";
import tourism from "../../assets/img/tp-hcm.jpg";
import DN from "../../assets/img/da-nang.jpg";
import { FaArrowRight } from "react-icons/fa6";
import home from "../../assets/img/home.png";
import pay from "../../assets/img/pay.png";
import bank from "../../assets/img/bank.png";
import tour from "../../assets/img/tancuong.png";
import iconBank from "../../assets/img/iconbank.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa";
("use client");

import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
export default function News() {
  const [arrow, setArrow] = useState(false);
  const [arrow1, setArrow1] = useState(false);
  const [arrow2, setArrow2] = useState(false);
  const [month, setMonth] = useState(false);
  const [year, setYear] = useState(false);
  // const news = [
  //   {
  //     img: tourism,
  //     title: "Lễ hội sông nước TP.HCM 2024 chính thức khởi động",
  //     content:
  //       "TP.HCM quyết định tổ chức Lễ hội sông nước TP.HCM lần thứ 2 năm 2024 tại cảng Sài Gòn, cảng Hiệp Phước. Đây được xem là lần tổ chức thứ hai sau thành công của chương trình nghệ thuật chủ đề “Dòng sông kể chuyện” diễn ra vào năm ngoái, năm 2023.",
  //   },
  //   {
  //     img: DN,
  //     title: "Lễ hội sông nước TP.HCM 2024 chính thức khởi động",
  //     content:
  //       "TP.HCM quyết định tổ chức Lễ hội sông nước TP.HCM lần thứ 2 năm 2024 tại cảng Sài Gòn, cảng Hiệp Phước. Đây được xem là lần tổ chức thứ hai sau thành công của chương trình nghệ thuật chủ đề “Dòng sông kể chuyện” diễn ra vào năm ngoái, năm 2023.",
  //   },
  //   {
  //     img: DN,
  //     title: "Lễ hội sông nước TP.HCM 2024 chính thức khởi động",
  //     content:
  //       "TP.HCM quyết định tổ chức Lễ hội sông nước TP.HCM lần thứ 2 năm 2024 tại cảng Sài Gòn, cảng Hiệp Phước. Đây được xem là lần tổ chức thứ hai sau thành công của chương trình nghệ thuật chủ đề “Dòng sông kể chuyện” diễn ra vào năm ngoái, năm 2023.",
  //   },
  //   {
  //     img: DN,
  //     title: "Lễ hội sông nước TP.HCM 2024 chính thức khởi động",
  //     content:
  //       "TP.HCM quyết định tổ chức Lễ hội sông nước TP.HCM lần thứ 2 năm 2024 tại cảng Sài Gòn, cảng Hiệp Phước. Đây được xem là lần tổ chức thứ hai sau thành công của chương trình nghệ thuật chủ đề “Dòng sông kể chuyện” diễn ra vào năm ngoái, năm 2023.",
  //   },
  //   {
  //     img: DN,
  //     title: "Lễ hội sông nước TP.HCM 2024 chính thức khởi động",
  //     content:
  //       "TP.HCM quyết định tổ chức Lễ hội sông nước TP.HCM lần thứ 2 năm 2024 tại cảng Sài Gòn, cảng Hiệp Phước. Đây được xem là lần tổ chức thứ hai sau thành công của chương trình nghệ thuật chủ đề “Dòng sông kể chuyện” diễn ra vào năm ngoái, năm 2023.",
  //   },
  //   {
  //     img: DN,
  //     title: "Lễ hội sông nước TP.HCM 2024 chính thức khởi động",
  //     content:
  //       "TP.HCM quyết định tổ chức Lễ hội sông nước TP.HCM lần thứ 2 năm 2024 tại cảng Sài Gòn, cảng Hiệp Phước. Đây được xem là lần tổ chức thứ hai sau thành công của chương trình nghệ thuật chủ đề “Dòng sông kể chuyện” diễn ra vào năm ngoái, năm 2023.",
  //   },
  //   {
  //     img: DN,
  //     title: "Lễ hội sông nước TP.HCM 2024 chính thức khởi động",
  //     content:
  //       "TP.HCM quyết định tổ chức Lễ hội sông nước TP.HCM lần thứ 2 năm 2024 tại cảng Sài Gòn, cảng Hiệp Phước. Đây được xem là lần tổ chức thứ hai sau thành công của chương trình nghệ thuật chủ đề “Dòng sông kể chuyện” diễn ra vào năm ngoái, năm 2023.",
  //   },
  //   {
  //     img: DN,
  //     title: "Lễ hội sông nước TP.HCM 2024 chính thức khởi động",
  //     content:
  //       "TP.HCM quyết định tổ chức Lễ hội sông nước TP.HCM lần thứ 2 năm 2024 tại cảng Sài Gòn, cảng Hiệp Phước. Đây được xem là lần tổ chức thứ hai sau thành công của chương trình nghệ thuật chủ đề “Dòng sông kể chuyện” diễn ra vào năm ngoái, năm 2023.",
  //   },
  // ];
  const [data, setDate] = useState([]);

  useEffect(() => {
    async function getData() {
      const newData = "http://127.0.0.1:8000/api/news";
      const response = await fetch(newData);
      const data = await response.json();
      console.log(data);
      setDate(data);
    }
    getData();
  }, []);
  return (
    <div className="bg-[#fff] w-[100%] h-[530vh] md:h-[390vh] lg:h-[380vh] mt-20">
      <div className="max-sm-w-[640px] md:w-[768px] lg:w-[1024px] h-[30vh] bg-[#fff] xl:h-[47vh] border-2 m-auto rounded-md shadow-2xl pt-[30px] pb-[30px] pr-[30px] pl-[30px]">
        <p className="text-[20px] text-[#1dacfe] font-bold mb-[15px]">
          Du lịch 5 châu, không đâu rẻ bằng
        </p>
        <div>
          <p className="text-[18px] font-bold text-[#434343] ">
            Nhập địa điểm bạn muốn đến
          </p>
          <div className=" flex items-center border-2 w-[100%] rounded-md mt-2">
            <FaMapMarkerAlt className=" text-[30px] border-r-2 p-2 text-[#ccc]" />

            <input
              className="outline-none w-[100%] h-[40px] ml-3"
              type="text"
              placeholder="Quốc gia, thành phố, địa điểm du lịch"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="border-2 w-[180px]  leading-10 shadow-none text-[#fff] bg-[#f98e04] tex-[18px] rounded-md mt-[20px]"
            type="submit"
          >
            Tìm Kiếm
          </button>
        </div>
      </div>
      <div className="w-[90%] lg:w-[50%] lg:h-[70vh] h-[50vh] m-auto mt-10">
        <h1 className="xl:text-center lg:text-start xl:ml-[120px]  w-[640px] text-[36px] text-[#000] pb-[5px] mb-[20px] font-bold">
          Tin tức tour nổi bật
        </h1>
        <Carousel className="w-[100%] lg:h-[100vh] h-[80vh]  ">
          {data &&
            data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="lg:h-[90vh] h-[70vh]  w-[100%] border-2 shadow-2xl rounded-md cursor-default"
                >
                  <img
                    className="w-[100%]  rounded-md "
                    src={`../../assets/img/${item.banner_url}`}
                    alt="..."
                  />
                  <p className="w-[100%] mt-5 ml-2 font-medium ">
                    {item.title}
                  </p>
                  <p className="w-[95%] mt-5 ml-2">{item.description}</p>
                  <div className="flex justify-end items-center mt-10 cursor-pointer text-[13px]">
                    <p>Xem chi tiết</p>
                    <FaArrowRight className="text-[blue] mr-3 ml-3 cursor-pointer text-[20px]" />
                  </div>
                </div>
              );
            })}
        </Carousel>
      </div>
      <div className="w-[90%] h-[100vh] m-auto mt-[400px]">
        <div className="flex justify-between w-[100%] ">
          <div className="w-[70%]">
            <h3 className="text-[24px] text-[#0066d9] mb-3 font-semibold">
              Tin tức tour
            </h3>
            <hr className="mb-3"></hr>
            <div>
              {data.map((item, index) => {
                console.log(item.banner_url);
                return (
                  <div className="mt-10" key={index}>
                    <a className="text-[23px] hover:underline" href="#">
                      {item.title}
                    </a>
                    <div className="md:flex justify-start items-start w-[100%] mt-3">
                      {" "}
                      <img
                        className="w-[90%] md:w-[30%] cursor-pointer"
                        src={`../../assets/img/${item.banner_url}`}
                      />
                      <div className="w-[90%] md:mt-0 mt-2  relative">
                        <p className="text-[15px] font-normal ml-3">
                          {item.description}
                        </p>
                        <button className="border-blue-500 md:mt-0 mt-2 mr-3 hover:bg-[#0066d9] hover:text-[#fff] absolute bottom--10 right-0 border-2 text-[#0066d9] text-[16px] pt-[1px] pb-[1px] pr-[8px] pl-[8px] rounded-md">
                          Xem chi tiết
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-[30%]">
            <div className="border-2">
              <button className="w-[100%] font-semibold cursor-default  pt-[10px] bg-[#0066d9] pb-[10px] text-[#fff] lg:text-[22px] text-[15px]  text-[center]">
                Tổng đài tư vấn
              </button>
              <div className="pt-[15px] pb-[15px] pl-[15px] pr-[15px] text-[14px] mb-[20px] text-[#565656]">
                <p className="text-[#1e2325] md:text-[15px] text-[12px]  font-bold">
                  Mọi thắc mắc của Quý khách
                </p>
                <p className="mt-2 md:text-[18px]  text-[15px] ">
                  vui lòng gọi:
                  <span className="md:text-[22px] text-[14px] text-[#0066d9] font-bold ">
                    1900 3398
                  </span>
                </p>
                <p className="mt-2">Chúng tôi hỗ trợ 24/7</p>
              </div>
            </div>
            <div className="mt-[20px]">
              <h3 className="lg:text-[1.5rem] pt-[10px] pb-[10px] bg-[#0066d9] text-center text-[#fff]">
                Hình thức thanh toán
              </h3>
              <div className="pt-[15px] pb-[15px] pr-[15px] pl-[15px] border-2 text-[#565656]">
                {arrow ? (
                  <>
                    <div
                      onClick={() => setArrow(!arrow)}
                      className="rounded-t-md border-2  p-3 cursor-pointer "
                    >
                      <div className="flex justify-between items-center">
                        <div className="md:flex">
                          <img src={home} />
                          <p className="md:ml-2 w-[100%]  font-medium">
                            Thanh toán tại nhà
                          </p>
                        </div>
                        <IoIosArrowDown className="text-[1.3rem]" />
                      </div>
                    </div>
                    <div className="border-2  border-t-0 p-3">
                      <p>
                        Vietnam Booking sẽ hỗ trợ giao vé miễn phí và thanh toán
                        tại nhà cho những Quý khách hàng nào ở trong nội thành
                        Hà Nội, Đà Nẵng Và TP. Hồ Chí Minh.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      onClick={() => setArrow(!arrow)}
                      className="rounded-t-md border-2 p-3 cursor-pointer "
                    >
                      <div className="flex justify-between items-center">
                        <div className="md:flex">
                          <img src={home} />
                          <p className="md:ml-2 font-medium">
                            Thanh toán tại nhà
                          </p>
                        </div>
                        <IoIosArrowForward className="text-[1.3rem]" />
                      </div>
                    </div>
                  </>
                )}
                {arrow1 ? (
                  <>
                    <div
                      onClick={() => setArrow1(!arrow1)}
                      className="rounded-t-md border-2  p-3 cursor-pointer mt-1 "
                    >
                      <div className="flex justify-between items-center">
                        <div className="md:flex">
                          <img className="w-[30px]" src={pay} />
                          <p className="md:ml-2 font-medium">
                            Tại văn phòng chúng tôi
                          </p>
                        </div>
                        <IoIosArrowDown className="text-[1.3rem]" />
                      </div>
                    </div>
                    <div className="border-2 border-t-0 p-3">
                      <p className="font-medium text-[1.1rem]">Hồ Chí Minh</p>
                      <span className="mt-2 block w-[100%]">
                        - 164 Lê Thánh Tôn, Bến Thành, Q. 1
                      </span>
                      <span className="mt-2 block">
                        - 190 Trần Quý, Phường 6, Q. 11
                      </span>
                      <span className="mt-2 block">
                        - 192 Trần Quý, Phường 6, Q. 11
                      </span>
                      <p className="font-medium text-[1.1rem] mt-2">Hà Nội</p>
                      <span className="mt-2 block">
                        - 30 Phan Chu Trinh, , Q. Hoàn Kiếm
                      </span>
                      <p className="font-medium text-[1.1rem] mt-2">Đà Nẵng</p>
                      <span className="mt-2 block">
                        - 12 Phạm Phú Thứ, , Q. Hải Châu
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      onClick={() => setArrow1(!arrow1)}
                      className="rounded-t-md border-2  p-3 cursor-pointer mt-1 "
                    >
                      <div className="flex justify-between items-center">
                        <div className="md:flex">
                          <img className="w-[30px]" src={pay} />
                          <p className="md:ml-2 font-medium">
                            Tại văn phòng chúng tôi
                          </p>
                        </div>
                        <IoIosArrowForward className="text-[1.3rem]" />
                      </div>
                    </div>
                  </>
                )}
                {arrow2 ? (
                  <>
                    <div
                      onClick={() => setArrow2(!arrow2)}
                      className="rounded-t-md border-2  p-3 cursor-pointer mt-1 "
                    >
                      <div className="flex justify-between items-center">
                        <div className="md:flex">
                          <img className="w-[30px]" src={bank} />
                          <p className="md:ml-2 font-medium">
                            Chuyển khoản ngân hàng
                          </p>
                        </div>
                        <IoIosArrowDown className="text-[1.3rem]" />
                      </div>
                    </div>
                    <div className="border-2 border-t-0 p-3">
                      <img src={iconBank} />
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      onClick={() => setArrow2(!arrow2)}
                      className="rounded-t-md border-2  p-3 cursor-pointer mt-1 "
                    >
                      <div className="flex justify-between items-center">
                        <div className="md:flex">
                          <img className="w-[30px]" src={bank} />
                          <p className="md:ml-2 font-medium">
                            Chuyển khoản ngân hàng
                          </p>
                        </div>
                        <IoIosArrowForward className="text-[1.3rem]" />
                      </div>
                    </div>
                  </>
                )}
              </div>
              <h3 className="md:text-[1.5rem] mt-4 pt-[10px] pb-[10px] bg-[#0066d9] text-center text-[#fff]">
                Top bài viết theo nhiều nhất
              </h3>
              <div className=" mt-3 text-[#0066d9] cursor-pointer ">
                <div className=" md:flex gap-5">
                  <p className="hover:border-2 hover:border-b-0 p-2 hover:rounded-t-md hover:text-[black]  ">
                    Tuần
                  </p>
                  <p
                    onClick={() => setMonth(!month)}
                    className="hover:border-2 hover:border-b-0 p-2 hover:rounded-t-md hover:text-[black] "
                  >
                    Tháng
                  </p>
                  <p
                    onClick={() => setYear(!year)}
                    className="hover:border-2 hover:border-b-0 p-2 hover:rounded-t-md hover:text-[black]  "
                  >
                    Năm
                  </p>
                </div>
                {month ? (
                  <>
                    <div className=" border-2 border-b-0 p-5 relative">
                      <div className="flex items-center">
                        <p className="text-[1.7rem]">1.</p>
                        <p className="text-[0.9rem] ml-2">
                          Lịch bắn pháo hoa quốc tế Đà Nẵng 2024 chính thức mới
                          nhất (DIFF)
                        </p>
                      </div>
                      <p className="text-[#fff] bg-[#ccc] inline-block p-1 text-[10px] rounded-es-2xl absolute top-0 right-0">
                        2791 lượt xem
                      </p>
                    </div>
                    <div className=" border-2 border-b-0 p-5 relative">
                      <div className="flex items-center">
                        <p className="text-[1.7rem]">2.</p>
                        <p className="text-[0.9rem] ml-2">
                          Lịch bắn pháo hoa quốc tế Đà Nẵng 2024 chính thức mới
                          nhất (DIFF)
                        </p>
                      </div>
                      <p className="text-[#fff] bg-[#ccc] inline-block p-1 text-[10px] rounded-es-2xl absolute top-0 right-0">
                        2791 lượt xem
                      </p>
                    </div>
                    <div className=" border-2 border-b-0 p-5 relative">
                      <div className="flex items-center">
                        <p className="text-[1.7rem]">3.</p>
                        <p className="text-[0.9rem] ml-2">
                          Lịch bắn pháo hoa quốc tế Đà Nẵng 2024 chính thức mới
                          nhất (DIFF)
                        </p>
                      </div>
                      <p className="text-[#fff] bg-[#ccc] inline-block p-1 text-[10px] rounded-es-2xl absolute top-0 right-0">
                        2791 lượt xem
                      </p>
                    </div>
                    <div className=" border-2 border-b-0 p-5 relative">
                      <div className="flex items-center">
                        <p className="text-[1.7rem]">4.</p>
                        <p className="text-[0.9rem] ml-2">
                          Lịch bắn pháo hoa quốc tế Đà Nẵng 2024 chính thức mới
                          nhất (DIFF)
                        </p>
                      </div>
                      <p className="text-[#fff] bg-[#ccc] inline-block p-1 text-[10px] rounded-es-2xl absolute top-0 right-0">
                        2791 lượt xem
                      </p>
                    </div>
                    <div className=" border-2 border-b-0 p-5 relative">
                      <div className="flex items-center">
                        <p className="text-[1.7rem]">5.</p>
                        <p className="text-[0.9rem] ml-2">
                          Lịch bắn pháo hoa quốc tế Đà Nẵng 2024 chính thức mới
                          nhất (DIFF)
                        </p>
                      </div>
                      <p className="text-[#fff] bg-[#ccc] inline-block p-1 text-[10px] rounded-es-2xl absolute top-0 right-0">
                        2791 lượt xem
                      </p>
                    </div>
                    <div className=" border-2 border-b-0 p-5 relative">
                      <div className="flex items-center">
                        <p className="text-[1.7rem]">6.</p>
                        <p className="text-[0.9rem] ml-2">
                          Lịch bắn pháo hoa quốc tế Đà Nẵng 2024 chính thức mới
                          nhất (DIFF)
                        </p>
                      </div>
                      <p className="text-[#fff] bg-[#ccc] inline-block p-1 text-[10px] rounded-es-2xl absolute top-0 right-0">
                        2791 lượt xem
                      </p>
                    </div>
                    <div className=" border-2  p-5 relative">
                      <div className="flex items-center">
                        <p className="text-[1.7rem]">7.</p>
                        <p className="text-[0.9rem] ml-2">
                          Lịch bắn pháo hoa quốc tế Đà Nẵng 2024 chính thức mới
                          nhất (DIFF)
                        </p>
                      </div>
                      <p className="text-[#fff] bg-[#ccc] inline-block p-1 text-[10px] rounded-es-2xl absolute top-0 right-0">
                        2791 lượt xem
                      </p>
                    </div>
                  </>
                ) : (
                  <></>
                )}
                {year ? (
                  <>
                    <div className=" border-2 border-b-0 p-5 relative">
                      <div className="flex items-center">
                        <p className="text-[1.7rem]">1.</p>
                        <p className="text-[0.9rem] ml-2">
                          Lịch bắn pháo hoa quốc tế Đà Nẵng 2024 chính thức mới
                          nhất (DIFF)
                        </p>
                      </div>
                      <p className="text-[#fff] bg-[#ccc] inline-block p-1 text-[10px] rounded-es-2xl absolute top-0 right-0">
                        2791 lượt xem
                      </p>
                    </div>
                    <div className=" border-2 border-b-0 p-5 relative">
                      <div className="flex items-center">
                        <p className="text-[1.7rem]">2.</p>
                        <p className="text-[0.9rem] ml-2">
                          Lịch bắn pháo hoa quốc tế Đà Nẵng 2024 chính thức mới
                          nhất (DIFF)
                        </p>
                      </div>
                      <p className="text-[#fff] bg-[#ccc] inline-block p-1 text-[10px] rounded-es-2xl absolute top-0 right-0">
                        2791 lượt xem
                      </p>
                    </div>
                    <div className=" border-2 border-b-0 p-5 relative">
                      <div className="flex items-center">
                        <p className="text-[1.7rem]">3.</p>
                        <p className="text-[0.9rem] ml-2">
                          Lịch bắn pháo hoa quốc tế Đà Nẵng 2024 chính thức mới
                          nhất (DIFF)
                        </p>
                      </div>
                      <p className="text-[#fff] bg-[#ccc] inline-block p-1 text-[10px] rounded-es-2xl absolute top-0 right-0">
                        2791 lượt xem
                      </p>
                    </div>
                    <div className=" border-2 border-b-0 p-5 relative">
                      <div className="flex items-center">
                        <p className="text-[1.7rem]">4.</p>
                        <p className="text-[0.9rem] ml-2">
                          Lịch bắn pháo hoa quốc tế Đà Nẵng 2024 chính thức mới
                          nhất (DIFF)
                        </p>
                      </div>
                      <p className="text-[#fff] bg-[#ccc] inline-block p-1 text-[10px] rounded-es-2xl absolute top-0 right-0">
                        2791 lượt xem
                      </p>
                    </div>
                    <div className=" border-2 border-b-0 p-5 relative">
                      <div className="flex items-center">
                        <p className="text-[1.7rem]">5.</p>
                        <p className="text-[0.9rem] ml-2">
                          Lịch bắn pháo hoa quốc tế Đà Nẵng 2024 chính thức mới
                          nhất (DIFF)
                        </p>
                      </div>
                      <p className="text-[#fff] bg-[#ccc] inline-block p-1 text-[10px] rounded-es-2xl absolute top-0 right-0">
                        2791 lượt xem
                      </p>
                    </div>
                    <div className=" border-2 border-b-0 p-5 relative">
                      <div className="flex items-center">
                        <p className="text-[1.7rem]">6.</p>
                        <p className="text-[0.9rem] ml-2">
                          Lịch bắn pháo hoa quốc tế Đà Nẵng 2024 chính thức mới
                          nhất (DIFF)
                        </p>
                      </div>
                      <p className="text-[#fff] bg-[#ccc] inline-block p-1 text-[10px] rounded-es-2xl absolute top-0 right-0">
                        2791 lượt xem
                      </p>
                    </div>
                    <div className=" border-2 border-b-0 p-5 relative">
                      <div className="flex items-center">
                        <p className="text-[1.7rem]">7.</p>
                        <p className="text-[0.9rem] ml-2">
                          Lịch bắn pháo hoa quốc tế Đà Nẵng 2024 chính thức mới
                          nhất (DIFF)
                        </p>
                      </div>
                      <p className="text-[#fff] bg-[#ccc] inline-block p-1 text-[10px] rounded-es-2xl absolute top-0 right-0">
                        2791 lượt xem
                      </p>
                    </div>
                    <div className=" border-2 border-b-0 p-5 relative">
                      <div className="flex items-center">
                        <p className="text-[1.7rem]">8.</p>
                        <p className="text-[0.9rem] ml-2">
                          Lịch bắn pháo hoa quốc tế Đà Nẵng 2024 chính thức mới
                          nhất (DIFF)
                        </p>
                      </div>
                      <p className="text-[#fff] bg-[#ccc] inline-block p-1 text-[10px] rounded-es-2xl absolute top-0 right-0">
                        2791 lượt xem
                      </p>
                    </div>
                    <div className=" border-2 border-b-0 p-5 relative">
                      <div className="flex items-center">
                        <p className="text-[1.7rem]">9.</p>
                        <p className="text-[0.9rem] ml-2">
                          Lịch bắn pháo hoa quốc tế Đà Nẵng 2024 chính thức mới
                          nhất (DIFF)
                        </p>
                      </div>
                      <p className="text-[#fff] bg-[#ccc] inline-block p-1 text-[10px] rounded-es-2xl absolute top-0 right-0">
                        2791 lượt xem
                      </p>
                    </div>
                    <div className=" border-2 border-b-0 p-5 relative">
                      <div className="flex items-center">
                        <p className="text-[1.7rem]">10.</p>
                        <p className="text-[0.9rem] ml-2">
                          Lịch bắn pháo hoa quốc tế Đà Nẵng 2024 chính thức mới
                          nhất (DIFF)
                        </p>
                      </div>
                      <p className="text-[#fff] bg-[#ccc] inline-block p-1 text-[10px] rounded-es-2xl absolute top-0 right-0">
                        2791 lượt xem
                      </p>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="mt-[20px]">
              <div>
                <h3 className="md:text-[20px] pb-[10px] border-b-4 inline-block border-[#0066d4] text-[#15284a] font-bold">
                  Liên hệ tư vấn viên
                </h3>
                <div className="mt-7">
                  <div className="bg-[#fff] mt-3 text-[#585858] font-semibold rounded-[5px] border-2 border-[#dcdcdc] md:flex items-center pt-[15px] md:pb-[15px] pl-[20px] pr-[20px] text-[18px] ">
                    <FaPhoneVolume className="text-[30px] text-[#00b874] md:ml-2" />
                    <div className="md:ml-5 text-[14px]">
                      <h3 className="mb-2">Mr.Nghiệp(Tour Đoàn)</h3>
                      <p className="text-[14px] mb-3">0935 334 174</p>
                    </div>
                  </div>
                  <div className="bg-[#fff] mt-3 text-[#585858] font-semibold rounded-[5px] border-2 border-[#dcdcdc] md:flex items-center pt-[15px] md:pb-[15px] pl-[20px] pr-[20px] text-[18px] ">
                    <FaPhoneVolume className="text-[30px] text-[#00b874] md:ml-2" />
                    <div className="md:ml-5">
                      <h3 className="md:mb-2 text-[14px]">
                        Mr.Nghiệp(Tour Đoàn)
                      </h3>
                      <p className="text-[14px] mb-3">0935 334 174</p>
                    </div>
                  </div>
                  <div className="bg-[#fff] mt-3 text-[#585858] font-semibold rounded-[5px] border-2 border-[#dcdcdc] md:flex items-center pt-[15px] md:pb-[15px] pl-[20px] pr-[20px] text-[18px] ">
                    <FaPhoneVolume className="text-[30px] text-[#00b874] md:ml-2" />
                    <div className="md:ml-5">
                      <h3 className="md:mb-2 text-[14px]">
                        Mr.Nghiệp(Tour Đoàn)
                      </h3>
                      <p className="text-[14px] mb-3">0935 334 174</p>
                    </div>
                  </div>
                  <div className="bg-[#fff] mt-3 text-[#585858] font-semibold rounded-[5px] border-2 border-[#dcdcdc] md:flex items-center pt-[15px] md:pb-[15px] pl-[20px] pr-[20px] text-[18px] ">
                    <FaPhoneVolume className="text-[30px] text-[#00b874] md:ml-2" />
                    <div className="md:ml-5">
                      <h3 className="md:mb-2 text-[14px]">
                        Mr.Nghiệp(Tour Đoàn)
                      </h3>
                      <p className="text-[14px] mb-3">0935 334 174</p>
                    </div>
                  </div>
                  <div className="bg-[#fff] mt-3 text-[#585858] font-semibold rounded-[5px] border-2 border-[#dcdcdc] md:flex items-center pt-[15px] md:pb-[15px] pl-[20px] pr-[20px] text-[18px] ">
                    <FaPhoneVolume className="text-[30px] text-[#00b874] md:ml-2" />
                    <div className="md:ml-5">
                      <h3 className="md:mb-2 text-[14px]">
                        Mr.Nghiệp(Tour Đoàn)
                      </h3>
                      <p className="text-[14px] mb-3">0935 334 174</p>
                    </div>
                  </div>
                  <div className="bg-[#fff] mt-3 text-[#585858] font-semibold rounded-[5px] border-2 border-[#dcdcdc] md:flex items-center pt-[15px] md:pb-[15px] pl-[20px] pr-[20px] text-[18px] ">
                    <FaPhoneVolume className="text-[30px] text-[#00b874] md:ml-2" />
                    <div className="md:ml-5">
                      <h3 className="md:mb-2 text-[14px]">
                        Mr.Nghiệp(Tour Đoàn)
                      </h3>
                      <p className="text-[14px] mb-3">0935 334 174</p>
                    </div>
                  </div>
                  <div className="bg-[#fff] mt-3 text-[#585858] font-semibold rounded-[5px] border-2 border-[#dcdcdc] md:flex items-center pt-[15px] md:pb-[15px] pl-[20px] pr-[20px] text-[18px] ">
                    <FaPhoneVolume className="text-[30px] text-[#00b874] md:ml-2" />
                    <div className="md:ml-5">
                      <h3 className="md:mb-2 text-[14px]">
                        Mr.Nghiệp(Tour Đoàn)
                      </h3>
                      <p className="text-[14px] mb-3">0935 334 174</p>
                    </div>
                  </div>
                  <div className="bg-[#fff] mt-3 text-[#585858] font-semibold rounded-[5px] border-2 border-[#dcdcdc] md:flex items-center pt-[15px] pb-[15px] pl-[20px] pr-[20px] text-[18px] ">
                    <FaPhoneVolume className="text-[30px] text-[#00b874] md:ml-2" />
                    <div className="md:ml-5">
                      <h3 className="md:mb-2 text-[14px]">
                        Mr.Nghiệp(Tour Đoàn)
                      </h3>
                      <p className="text-[14px] mb-3">0935 334 174</p>
                    </div>
                  </div>
                </div>
                <div className="mt-7">
                  <h3 className="text-[20px] pb-[10px] border-b-4 inline-block border-[#0066d4] text-[#15284a] font-bold">
                    Tour Đang Hot!@
                  </h3>
                  <div className="mt-10">
                    <img className="cursor-pointer" src={tour} />
                    <p className="text-[14px] w-[90%]  text-[#333] font-bold mt-[12px] cursor-pointer">
                      Tour du lịch Tân Cương Trung Quốc 9 ngày 9 đêm – Con đường
                      tơ lụa: Khám phá thảo nguyên ngày hè
                    </p>
                    <p className="line-through text-[18px] mt-3 text-[#bcbfc4]">
                      53,740,000 VND
                    </p>
                    <div className="flex relative">
                      <p className="md:text-[24px] font-bold">42,990,000 VND</p>
                      <span className="bg-[red] pl-1 pr-1 md:text-[16px] text-[14px] font-bold text-[#fff] rounded-[3px] absolute top-[-5px]  xl:right-[35%] right-[-30px]">
                        20%
                      </span>
                    </div>
                    <button className="p-2.5 mt-3 bg-[red] text-[#fff] text-[14px] rounded-[5px] font-medium">
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
