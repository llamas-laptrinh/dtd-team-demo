const Footer: React.FC = () => {
    return (
        <div className="bg-[#f5f5f5] m-auto max-w-[1140px]" style={{ fontFamily: "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif" }}>
            <div className="flex px-[32px] py-[16px] text-[14px] leading-[20px]">
                <div>
                    About Booking.com
                </div>
                <div className="px-1">.</div>
                <div>
                    Terms and condition
                </div>
                <div className="px-1">.</div>

                <div>
                    How we work
                </div>
                <div className="px-1">.</div>

                <div>
                    Privacy & Cookie Policy
                </div>

                <div className="px-1">.</div>
                <div>
                    Help Center
                </div>
            </div>
            <div className="px-[32px] py-[16px] text-[12px] leading-[18px]">
                Copyright © 1996–2024 Booking.com™. All rights reserved.
            </div>
        </div >

    )
}
export default Footer;