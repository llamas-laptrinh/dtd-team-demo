const Header: React.FC = () => {
    return (
        <div className="w-full bg-[#003B95] flex justify-center ">
            <div className="py-2 w-11/12 max-w-[1108px]">
                <div className="flex justify-between text-white">
                    <div className="font-semibold text-[25px] hover:cursor-pointer px-[16px] py-[8px]"
                        style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}>
                        Booking tour
                    </div>
                    <div className="block md:flex md:items-center font-medium md:gap-2 "
                        style={{ fontFamily: 'BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}
                    >
                        <button data-tooltip-target="tooltip-currency" data-tooltip-placement="bottom" type="button" className="hidden md:block flex items-center hover:bg-gray-100/20 px-[12px] py-[8px] hover:cursor-pointer rounded">
                            VND
                        </button>

                        <div id="tooltip-currency" style={{ fontFamily: 'BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }} role="tooltip" className="hidden md:block ease-in-out font-normal leading-[20px] text-[14] duration-1000 absolute z-10 invisible inline-block px-3 py-1 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Select your currency
                        </div>
                        <button data-tooltip-target="tooltip-language" data-tooltip-placement="bottom" type="button" className=" flex items-center hover:bg-gray-100/20 px-[12px] py-[8px] hover:cursor-pointer rounded">
                            <img className="size-6 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMF-Ly3Re3LxcOi4Bz61Rqj9iR2_DAX4EanQ&s" alt="" />
                        </button>
                        <div id="tooltip-language" style={{ fontFamily: 'BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }} role="tooltip" className="ease-in-out font-normal leading-[20px] text-[14] duration-1000 absolute z-10 invisible inline-block px-3 py-1 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700 ">
                            Select your language
                        </div>
                        <button data-tooltip-target="tooltip-contact" data-tooltip-placement="bottom" type="button" className="hidden md:block flex items-center hover:bg-gray-100/20 px-[12px] py-[8px] hover:cursor-pointer rounded">
                            <i className=" text-[24px] font-thin  fa fa-question-circle-o" aria-hidden="true"></i>
                        </button>
                        <div id="tooltip-contact" style={{ fontFamily: 'BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }} role="tooltip" className="ease-in-out font-normal leading-[20px] text-[14] duration-1000 absolute z-10 invisible inline-block px-3 py-1 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Contact Customer Service
                        </div>
                        <div className=" hidden md:block flex items-center hover:bg-gray-100/20 px-[12px] py-[8px] hover:cursor-pointer rounded">
                            List your property
                        </div>
                        <div className="hidden md:block flex items-center justify-center font-medium box-border text-[14px] py-1  hover:opacity-95 px-[12px]  bg-white text-[#006CE4] border-[1px] border-[#006CE4] hover:cursor-pointer rounded">
                            <span className="">Register</span>
                        </div>
                        <div className="hidden md:block flex items-center justify-center font-medium box-border text-[14px] py-1 hover:opacity-95 px-[12px]  bg-white text-[#006CE4] border-[1px] border-[#006CE4] hover:cursor-pointer rounded">
                            <span className="">Sign in</span>
                        </div>
                    </div>

                </div>
            </div>
        </div >

    )
}
export default Header;