import { useState } from "react"

const Header: React.FC = () => {
    const [tab, setTab] = useState('Flights')

    return (
        <div className="">
            <div className="bg-[#003B95] pt-[8px]">

                <div className="flex justify-between text-white px-[103px] ">
                    <div className="font-semibold text-[25px] hover:cursor-pointer px-[16px] py-[8px]"
                        style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}>
                        Booking tour
                    </div>
                    <div className="flex items-center font-medium gap-2 "
                        style={{ fontFamily: 'BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}
                    >
                        <button data-tooltip-target="tooltip-currency" data-tooltip-placement="bottom" type="button" className="flex items-center hover:bg-gray-100/20 px-[12px] py-[8px] hover:cursor-pointer rounded">
                            VND
                        </button>

                        <div id="tooltip-currency" style={{ fontFamily: 'BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }} role="tooltip" className="ease-in-out font-normal leading-[20px] text-[14] duration-1000 absolute z-10 invisible inline-block px-3 py-1 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Select your currency
                        </div>
                        <button data-tooltip-target="tooltip-language" data-tooltip-placement="bottom" type="button" className="flex items-center hover:bg-gray-100/20 px-[12px] py-[8px] hover:cursor-pointer rounded">
                            <img className="size-6 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMF-Ly3Re3LxcOi4Bz61Rqj9iR2_DAX4EanQ&s" alt="" />
                        </button>
                        <div id="tooltip-language" style={{ fontFamily: 'BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }} role="tooltip" className="ease-in-out font-normal leading-[20px] text-[14] duration-1000 absolute z-10 invisible inline-block px-3 py-1 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Select your language
                        </div>
                        <button data-tooltip-target="tooltip-contact" data-tooltip-placement="bottom" type="button" className="flex items-center hover:bg-gray-100/20 px-[12px] py-[8px] hover:cursor-pointer rounded">
                            <i className="text-[24px] font-thin  fa fa-question-circle-o" aria-hidden="true"></i>
                        </button>
                        <div id="tooltip-contact" style={{ fontFamily: 'BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }} role="tooltip" className="ease-in-out font-normal leading-[20px] text-[14] duration-1000 absolute z-10 invisible inline-block px-3 py-1 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Contact Customer Service
                        </div>
                        <div className="flex items-center hover:bg-gray-100/20 px-[12px] py-[8px] hover:cursor-pointer rounded">
                            List your property
                        </div>
                        <div className="flex items-center justify-center font-medium box-border text-[14px] h-[36px]  hover:opacity-95 px-[12px]  bg-white text-[#006CE4] border-[1px] border-[#006CE4] hover:cursor-pointer rounded">
                            <span className="">Register</span>
                        </div>
                        <div className="flex items-center justify-center font-medium box-border text-[14px] h-[36px] hover:opacity-95 px-[12px]  bg-white text-[#006CE4] border-[1px] border-[#006CE4] hover:cursor-pointer rounded">
                            <span className="">Sign in</span>
                        </div>
                    </div>

                </div>
                <div className="flex text-white text-[14px] mt-[8px] px-[103px] gap-2 font-[400]"
                    style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}>
                    <div onClick={() => {
                        setTab('Flights')
                    }} className={tab == 'Flights' ? 'hover:cursor-pointer flex items-center py-[11px] px-[16px] rounded-[30px] border-[1px] bg-sky-600/30  border-white' : 'hover:bg-sky-600/30 hover:cursor-pointer flex items-center py-[11px] px-[16px] rounded-[30px]'}>
                        <i className="text-[20px] pe-2 fa fa-plane" aria-hidden="true"></i>
                        Flights
                    </div>
                    <div
                        onClick={() => {
                            setTab('Hotels')
                        }}
                        className={tab == 'Hotels' ? 'hover:cursor-pointer flex items-center py-[11px] px-[16px] rounded-[30px] border-[1px] bg-sky-600/30  border-white' : 'hover:bg-sky-600/30 hover:cursor-pointer flex items-center py-[11px] px-[16px] rounded-[30px]'}>
                        <i className="text-[20px] pe-2 fa fa-bed" aria-hidden="true"></i>
                        Hotels
                    </div>
                    <div
                        onClick={() => {
                            setTab('Visa')
                        }}
                        className={tab == 'Visa' ? 'hover:cursor-pointer flex items-center py-[11px] px-[16px] rounded-[30px] border-[1px] bg-sky-600/30  border-white' : 'hover:bg-sky-600/30 hover:cursor-pointer flex items-center py-[11px] px-[16px] rounded-[30px]'}>
                        <i className="text-[20px] pe-2 fa fa-id-card" aria-hidden="true"></i>
                        Visa
                    </div>
                    <div
                        onClick={() => {
                            setTab('Tour')
                        }}
                        className={tab == 'Tour' ? 'hover:cursor-pointer flex items-center py-[11px] px-[16px] rounded-[30px] border-[1px] bg-sky-600/30  border-white' : 'hover:bg-sky-600/30 hover:cursor-pointer flex items-center py-[11px] px-[16px] rounded-[30px]'}>
                        <i className="text-[20px] pe-2 fa fa-bandcamp" aria-hidden="true"></i>
                        Tour
                    </div>
                    <div
                        onClick={() => {
                            setTab('Combo')
                        }}
                        className={tab == 'Combo' ? 'hover:cursor-pointer flex items-center py-[11px] px-[16px] rounded-[30px] border-[1px] bg-sky-600/30  border-white' : 'hover:bg-sky-600/30 hover:cursor-pointer flex items-center py-[11px] px-[16px] rounded-[30px]'}>
                        <i className="text-[20px] pe-2 fa fa-compress" aria-hidden="true"></i>
                        Combo
                    </div>
                </div>
                <div className="px-[103px] pt-[64px]">
                    {tab == 'Flights' &&
                        <div className="relative">
                            <div className="text-white font-bold text-4xl pt-8 pb-2 leading-[62px] text-[48px] font-[800]"
                                style={{ fontFamily: 'Blue Sans", BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}>
                                Find your next flights</div>
                            <div className="text-white leading-[32px] text-[24px]"
                                style={{ fontFamily: 'Blue Sans", BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}>Search for flights with departure, destination and time</div>
                            <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="flex translate-y-2/4 w-full">
                                <div className="grid grid-cols-11 w-full">
                                    <div className="col-span-4 border-t-4 border-b-4 border-l-4 border-[#ffb700] rounded-md relative w-full">
                                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        </div>
                                        <input type="search" id="search" className=" block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                                    </div>
                                    <div className="col-span-3 border-4 border-[#ffb700] flex items-center bg-white text-sm text-gray-900 w-full px-4 py-3 rounded-md">
                                        <div className="pe-3">
                                            <i className="fa fa-calendar" aria-hidden="true"></i>
                                        </div>
                                        <div>
                                            Departure day - Return day
                                        </div>
                                    </div>
                                    <div className="col-span-3 border-t-4 border-b-4 border-[#ffb700] flex items-center bg-white text-sm text-gray-900 w-full px-4 py-3 rounded-md">
                                        <div className=" pe-3">
                                            <i className="fa fa-calendar" aria-hidden="true"></i>
                                        </div>
                                        <div>
                                            Departure day - Return day
                                        </div>
                                    </div>
                                    <div className="hover-cursor-pointer flex justify-center items-center border-4 border-[#ffb700] font-medium text-white bg-[#006ce4] rounded px-4 py-3">
                                        Search
                                    </div>

                                </div>
                            </div>
                        </div>}
                    {tab == 'Hotels' && <div>Hotels</div>}
                    {tab == 'Visa' && <div>Visa</div>}
                    {tab == 'Tour' && <div>Tour</div>}
                    {tab == 'Combo' && <div>Combo</div>}

                </div>
            </div>
        </div >

    )
}
export default Header;