import { useEffect, useState } from "react";
import PropertyTypeComponent from "./PropertyTypeComponent";
import { Carousel } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { OfferProps } from "../../types/common";
import OfferComponent from "./OfferComponent";
import { CityProps } from "../../types/common";
import CityComponent from "./CItyComponent";
import { PropertyProps } from "../../types/common";
import { DealProps } from "../../types/common";
import DealComponent from "./DealComponent";
import { ComboProps } from "../../types/common";
import ComboComponent from "./ComboComponent";

// interface TourProps {
//     "id": number
//     "ten_tour": string,
//     "thanh_pho": string,
//     "tinh": string,
//     "thoi_gian": string,
//     "ngay_di": Date,
//     "gia_tien": number
//     "image_url": string
//     "is_bookmarked": boolean
// }
const customTheme: CustomFlowbiteTheme["carousel"] = {
    // "control": {
    //     "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 group-hover:bg-gray-200 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    //     "icon": "h-5 w-5 text-black dark:text-black sm:h-6 sm:w-6"
    // },
    "indicators": {
        "active": {
            "off": "bg-gray-500 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
            "on": "bg-gray-800 dark:bg-gray-800"
        },
        "base": "h-3 w-3 rounded-full",
        "wrapper": "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
    },

}

const Intro: React.FC = () => {
    const [destinationTab, setDestinationTab] = useState('Beach')
    // const [tourData, setTourData] = useState<TourProps[][]>([]);
    const [flightToVN, setFlightToVN] = useState<PropertyProps[][]>([]);
    const [comboData, setComboData] = useState<ComboProps[][]>([]);
    const [visaData, setVisaData] = useState<PropertyProps[][]>([]);
    const [flightFromVN, setFlightFromVN] = useState<PropertyProps[][]>([]);
    const [cityData, setCityData] = useState<CityProps[][]>([]);
    const [dealData, setDealData] = useState<DealProps[][]>([]);

    const [cityOriginData, setCityOriginData] = useState<CityProps[]>([]);
    const [propertyData, setPropertyData] = useState<PropertyProps[][]>([]);
    const [offerData, setOfferData] = useState<OfferProps[]>([]);
    function chunkArray(array: any, chunkSize: number) {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            const chunk = array.slice(i, i + chunkSize);
            result.push(chunk);
        }
        return result;
    }
    const getData = () => {
        // fetch('/src/pages/Intro/tour.json'
        //     , {
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Accept': 'application/json'
        //         }
        //     }
        // )
        //     .then(function (response) {
        //         console.log(response)
        //         return response.json();
        //     })
        //     .then(function (myJson) {
        //         console.log(myJson);
        //         setTourData(chunkArray(myJson, 4));
        //         // setTourData(myJson)
        //         console.log('--------------------', chunkArray(myJson, 4));

        //     });
        fetch('/src/pages/Intro/offers.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                // setTourData(chunkArray(myJson, 4));
                setOfferData(myJson)
                // console.log('--------------------', chunkArray(myJson, 4));
            });
        fetch('/src/pages/Intro/city.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setCityOriginData(myJson);
                setCityData(chunkArray(myJson, 6));
                // setCityData(myJson)
                // console.log('--------------------', chunkArray(myJson, 4));
            });

        fetch('/src/pages/Intro/property.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setPropertyData(chunkArray(myJson, 4));
                // setCityData(myJson)
                // console.log('--------------------', chunkArray(myJson, 4));
            });

        fetch('/src/pages/Intro/deals.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setDealData(chunkArray(myJson, 4));
            });
        fetch('/src/pages/Intro/flightToVN.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setFlightToVN(chunkArray(myJson, 4));
                // setCityData(myJson)
                // console.log('--------------------', chunkArray(myJson, 4));
            });
        fetch('/src/pages/Intro/flightFromVN.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setFlightFromVN(chunkArray(myJson, 4));
                // setCityData(myJson)
                // console.log('--------------------', chunkArray(myJson, 4));
            });

        fetch('/src/pages/Intro/Visa.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setVisaData(chunkArray(myJson, 4));
                // setCityData(myJson)
                // console.log('--------------------', chunkArray(myJson, 4));
            });
        fetch('/src/pages/Intro/combo.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setComboData(chunkArray(myJson, 4));
                // setCityData(myJson)
                // console.log('--------------------', chunkArray(myJson, 4));
            });
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div className="">
            {/* <div >
                <div className="h-56 sm:h-72 xl:h-80 2xl:h-96 mt-10">
                    <Carousel theme={customTheme}>
                        {tourData?.map((chunk, index) => {
                            return (<div key={"chunk" + index} className="flex h-full items-center justify-center ">
                                {
                                    chunk.map((tour) => {
                                        return (
                                            <TourComponent
                                                key={"tour" + tour.id}
                                                ten_tour={tour.ten_tour}
                                                gia_tien={tour.gia_tien}
                                                image_url={tour.image_url}
                                                is_bookmarked={tour.is_bookmarked}
                                                ngay_di={tour.ngay_di}
                                                thanh_pho={tour.thanh_pho}
                                                thoi_gian={tour.thoi_gian}
                                                tinh={tour.tinh}></TourComponent>)
                                    }
                                    )
                                }
                            </div>)
                        })}
                    </Carousel>
                </div>

            </div> */}
            <div className="px-[103px] mt-24">
                <div className="text-[24px] leading-[32px] font-[700]"
                    style={{ fontFamily: '"Blue Sans",BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                >Offers</div>
                <div className="text-[14px] leading-[20px] mt-2 text-[#595959] mb-5"
                    style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                >Promotions, deals, and special offers for you</div>
                <Carousel theme={customTheme}>
                    {offerData.map((offer) => (<OfferComponent image_url={offer.image_url} name={offer.name} short_description={offer.short_description}></OfferComponent>))}
                </Carousel>
            </div>

            <div className="px-[103px] mt-12">
                <div className="text-[24px] leading-[32px] font-[700]"
                    style={{ fontFamily: '"Blue Sans",BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                >Explore Vietnam</div>
                <div className="text-[14px] leading-[20px] mt-2 text-[#595959] mb-5"
                    style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                >These popular destinations have a lot to offer</div>
                <div className="h-64">
                    <Carousel theme={customTheme}>
                        {cityData?.map((chunk, index) => {
                            return (<div key={"cityChunk" + index} className={chunk.length < 4 ? "flex items-center justify-start gap-2" : "flex items-center justify-between gap-2"}>
                                {
                                    chunk.map((city) => {
                                        return (
                                            <CityComponent image_url={city.image_url} name={city.name} properties={city.properties}></CityComponent>
                                        )
                                    }
                                    )
                                }
                            </div>)
                        })}
                    </Carousel>
                </div>
            </div>

            <div className="px-[103px]">
                <div className="text-[24px] leading-[32px] font-[700] mb-5"
                    style={{ fontFamily: '"Blue Sans",BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                >Browse by property type</div>
                <div className="h-72">
                    <Carousel theme={customTheme}>
                        {propertyData?.map((chunk, index) => {
                            return (<div key={"propertyChunk" + index} className={chunk.length < 4 ? "flex items-center justify-start gap-2" : "flex items-center justify-between gap-2"}>
                                {
                                    chunk.map((city) => {
                                        return (
                                            <PropertyTypeComponent image_url={city.image_url} name={city.name}></PropertyTypeComponent>
                                        )
                                    }
                                    )
                                }
                            </div>)
                        })}
                    </Carousel>
                </div>
            </div>

            <div className="px-[103px]">
                <div className="text-[24px] leading-[32px] font-[700]"
                    style={{ fontFamily: '"Blue Sans",BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                >Trending destinations</div>
                <div className="text-[14px] leading-[20px] mt-2 text-[#595959] mb-5"
                    style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                >Most popular choices for travelers from Vietnam</div>
                <div className="grid grid-cols-2 gap-2">
                    {cityOriginData.slice(0, 2).map((city) => (
                        <div className="relative hover:cursor-pointer">
                            <img className="w-[540px] h-[270px] rounded" src={city.image_url} alt="" />
                            <div className="ms-[16px] mt-[24px] absolute drop-shadow-md top-0 leading-[32px] text-[24px] text-white font-[700]"
                                style={{ fontFamily: '"Blue Sans",BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                            >{city.name}</div>
                        </div>
                    ))}

                </div>
                <div className="mt-[16px] grid grid-cols-3 gap-2">
                    {cityOriginData.slice(2, 5).map((city) => (
                        <div className="relative hover:cursor-pointer">
                            <img className="w-[354px] h-[265px] rounded" src={city.image_url} alt="" />
                            <div className="ms-[16px] mt-[24px] absolute drop-shadow-md top-0 leading-[32px] text-[24px] text-white font-[700]"
                                style={{ fontFamily: '"Blue Sans",BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                            >{city.name}</div>
                        </div>
                    ))}

                </div>
            </div>
            <div className="px-[103px] mt-5">
                <div className="text-[24px] leading-[32px] font-[700]"
                    style={{ fontFamily: '"Blue Sans",BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                >Quick and easy trip planner</div>
                <div className="text-[14px] leading-[20px] mt-2 text-[#595959] mb-5"
                    style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                >Pick a vibe and explore the top destinations in Vietnam</div>
                <div className="flex text-black text-[14px] mt-[8px] gap-2 font-[400]"
                    style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}>
                    <div onClick={() => {
                        setDestinationTab('Beach')
                    }} className={destinationTab == 'Beach' ? 'text-[#006ce4] hover:cursor-pointer flex items-center py-[11px] px-[16px] rounded-[30px] border-[1px] bg-[rgba(0,108,228,0.06)]  border-[#006ce4]' : 'hover:bg-[rgba(0,108,228,0.06)] hover:cursor-pointer flex items-center py-[11px] px-[16px] rounded-[30px]'}>
                        <i className="text-[20px] pe-2 fa fa-umbrella" aria-hidden="true"></i>
                        Beach
                    </div>
                    <div
                        onClick={() => {
                            setDestinationTab('Outdoors')
                        }}
                        className={destinationTab == 'Outdoors' ? 'text-[#006ce4] hover:cursor-pointer flex items-center py-[11px] px-[16px] rounded-[30px] border-[1px] bg-[rgba(0,108,228,0.06)]  border-[#006ce4]' : 'hover:bg-[rgba(0,108,228,0.06)] hover:cursor-pointer flex items-center py-[11px] px-[16px] rounded-[30px]'}>
                        <i className="text-[20px] pe-2 fa fa-motorcycle" aria-hidden="true"></i>
                        Outdoors
                    </div>
                    <div
                        onClick={() => {
                            setDestinationTab('City')
                        }}
                        className={destinationTab == 'City' ? 'text-[#006ce4] hover:cursor-pointer flex items-center py-[11px] px-[16px] rounded-[30px] border-[1px] bg-[rgba(0,108,228,0.06)]  border-[#006ce4]' : 'hover:bg-[rgba(0,108,228,0.06)] hover:cursor-pointer flex items-center py-[11px] px-[16px] rounded-[30px]'}>
                        {/* <i className="text-[20px] pe-2 fa fa-id-card" aria-hidden="true"></i> */}
                        <i className="text-[20px] pe-2 fa fa-building" aria-hidden="true"></i>
                        City
                    </div>
                    <div
                        onClick={() => {
                            setDestinationTab('Romance')
                        }}
                        className={destinationTab == 'Romance' ? 'text-[#006ce4] hover:cursor-pointer flex items-center py-[11px] px-[16px] rounded-[30px] border-[1px] bg-[rgba(0,108,228,0.06)]  border-[#006ce4]' : 'hover:bg-[rgba(0,108,228,0.06)] hover:cursor-pointer flex items-center py-[11px] px-[16px] rounded-[30px]'}>
                        {/* <i className="text-[20px] pe-2 fa fa-bandcamp" aria-hidden="true"></i>
                         */}
                        <i className="text-[20px] pe-2 fa fa-heart" aria-hidden="true"></i>
                        Romance
                    </div>
                    <div
                        onClick={() => {
                            setDestinationTab('Relax')
                        }}
                        className={destinationTab == 'Relax' ? 'text-[#006ce4] hover:cursor-pointer flex items-center py-[11px] px-[16px] rounded-[30px] border-[1px] bg-[rgba(0,108,228,0.06)]  border-[#006ce4]' : 'hover:bg-[rgba(0,108,228,0.06)] hover:cursor-pointer flex items-center py-[11px] px-[16px] rounded-[30px]'}>
                        {/* <i className="text-[20px] pe-2 fa fa-compress" aria-hidden="true"></i> */}
                        <i className="text-[20px] pe-2 fa fa-grav" aria-hidden="true"></i>
                        Relax
                    </div>
                </div>
                <div className="h-72">
                    <Carousel theme={customTheme}>
                        {propertyData?.map((chunk, index) => {
                            return (<div key={"propertyChunk" + index} className={chunk.length < 4 ? "flex items-center justify-start gap-2" : "flex items-center justify-between gap-2"}>
                                {
                                    chunk.map((city) => {
                                        return (
                                            <PropertyTypeComponent image_url={city.image_url} name={city.name}></PropertyTypeComponent>
                                        )
                                    }
                                    )
                                }
                            </div>)
                        })}
                    </Carousel>
                </div>
            </div>
            <div className="px-[103px]">
                <div className="text-[24px] leading-[32px] font-[700]"
                    style={{ fontFamily: '"Blue Sans",BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                >Deals for the weekend</div>
                <div className="text-[14px] leading-[20px] mt-2 text-[#595959]"
                    style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                >Save on stays for July 12 - July 14</div>

                <div className="h-[500px]">
                    <Carousel theme={customTheme}>
                        {dealData?.map((chunk, index) => {
                            return (<div key={"dealChunk" + index} className={chunk.length < 4 ? "flex items-center justify-start gap-2" : "flex items-center justify-between gap-2"}>
                                {
                                    chunk.map((deal) => {
                                        return (
                                            <DealComponent image_url={deal.image_url} address={deal.address} discount_price={deal.discount_price} is_genius={deal.is_genius} name={deal.name} night_number={deal.night_number} real_price={deal.real_price} review_number={deal.review_number} score={deal.score} special_deal={deal.special_deal}></DealComponent>
                                        )
                                    }
                                    )
                                }
                            </div>)
                        })}
                    </Carousel>
                </div>
            </div>
            <div className="px-[103px] mt-5">
                <div className="text-[24px] leading-[32px] font-[700]"
                    style={{ fontFamily: '"Blue Sans",BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                >Hotel + Flight Combo Special Offers</div>
                <div className="text-[14px] leading-[20px] mt-2 text-[#595959]"
                    style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                >Documentation required for exiting and entering a country legally.</div>
                <div className="h-96">
                    <Carousel theme={customTheme}>
                        {comboData?.map((chunk, index) => {
                            return (<div key={"comboChunk" + index} className={chunk.length < 4 ? "flex items-center justify-start gap-2" : "flex items-center justify-between gap-2"}>
                                {
                                    chunk.map((combo) => {
                                        return (
                                            <ComboComponent price={combo.price} image_url={combo.image_url} name={combo.name}></ComboComponent>
                                        )
                                    }
                                    )
                                }
                            </div>)
                        })}
                    </Carousel>
                </div>
            </div>
            <div className="px-[103px] mt-5">
                <div className="text-[24px] leading-[32px] font-[700]"
                    style={{ fontFamily: '"Blue Sans",BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                >Exit Visa & Entry Permit Letter</div>
                <div className="text-[14px] leading-[20px] mt-2 text-[#595959] mb-5"
                    style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                >Documentation required for exiting and entering a country legally.</div>
                <div className="h-80">
                    <Carousel theme={customTheme}>
                        {visaData?.map((chunk, index) => {
                            return (<div key={"propertyChunk" + index} className={chunk.length < 4 ? "flex items-center justify-start gap-2" : "flex items-center justify-between gap-2"}>
                                {
                                    chunk.map((visa) => {
                                        return (
                                            <PropertyTypeComponent image_url={visa.image_url} name={visa.name}></PropertyTypeComponent>
                                        )
                                    }
                                    )
                                }
                            </div>)
                        })}
                    </Carousel>
                </div>
            </div>
            <div className="px-[103px] mt-5">
                <div className="text-[24px] leading-[32px] font-[700]"
                    style={{ fontFamily: '"Blue Sans",BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                >International Flights Tickets to Vietnam</div>
                <div className="text-[14px] leading-[20px] mt-2 text-[#595959] mb-5"
                    style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                >Book affordable international flights to Vietnam with ease and convenience.</div>
                <div className="h-80">
                    <Carousel theme={customTheme}>
                        {flightToVN?.map((chunk, index) => {
                            return (<div key={"propertyChunk" + index} className={chunk.length < 4 ? "flex items-center justify-start gap-2" : "flex items-center justify-between gap-2"}>
                                {
                                    chunk.map((flight) => {
                                        return (
                                            <PropertyTypeComponent image_url={flight.image_url} name={flight.name}></PropertyTypeComponent>
                                        )
                                    }
                                    )
                                }
                            </div>)
                        })}
                    </Carousel>
                </div>
            </div>
            <div className="px-[103px] my-5">
                <div className="text-[24px] leading-[32px] font-[700]"
                    style={{ fontFamily: '"Blue Sans",BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                >Vietnam International Flights Tickets</div>
                <div className="text-[14px] leading-[20px] mt-2 text-[#595959] mb-5"
                    style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                >Affordable international flights from Vietnam to global destinations with seamless booking and exceptional service.</div>
                <div className="h-80">
                    <Carousel theme={customTheme}>
                        {flightFromVN?.map((chunk, index) => {
                            return (<div key={"propertyChunk" + index} className={chunk.length < 4 ? "flex items-center justify-start gap-2" : "flex items-center justify-between gap-2"}>
                                {
                                    chunk.map((flight) => {
                                        return (
                                            <PropertyTypeComponent image_url={flight.image_url} name={flight.name}></PropertyTypeComponent>
                                        )
                                    }
                                    )
                                }
                            </div>)
                        })}
                    </Carousel>
                </div>
            </div>

        </div>
    )
}
export default Intro;