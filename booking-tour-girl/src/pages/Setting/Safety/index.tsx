import { useState } from "react";
import { Link } from "react-router-dom";

const Safety: React.FC = () => {

    const [isSetting, setIsSetting] = useState(false);

    const [isSettingPassword, setIsSettingPassword] = useState(false);
    const [isSetting2factor, setIsSetting2factor] = useState(false);
    const [isSettingActive, setIsSettingActive] = useState(false);


    const [hoverPersonal, setHoverPersonal] = useState(false);
    const [hoverOptions, setHoverOptions] = useState(false);
    const [hoverSafety, setHoverSafety] = useState(false);
    const [hoverBilling, setHoverBilling] = useState(false);
    const [hoverPrivacy, setHoverPrivacy] = useState(false);
    const [hoverEmail, setHoverEmail] = useState(false);
    const [hoverCompanion, setHoverCompanion] = useState(false);
    return (
        <div className=" py-[16px] flex justify-center" >
            <div className="hidden md:block border-[1px] rounded"
                style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}>
                <Link to="/setting/" onMouseEnter={() => setHoverPersonal(true)} onMouseLeave={() => setHoverPersonal(false)} className="flex justify-start border-b-[1px]  w-[306px] p-[16px] items-center hover:underline decoration-[#006ce4] hover:text-[#006ce4] hover:cursor-pointer">
                    <span className="rounded-full bg-[#f5f5f5] p-[10px]">
                        <svg className="size-[16px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-rtl-flip="true" fill={hoverPersonal ? "#006ce4" : "#000"} ><path d="M22.5 17.25a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0m1.5 0a6.75 6.75 0 1 0-13.5 0 6.75 6.75 0 0 0 13.5 0m-7.5-3v6a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-1.5 0M14.25 18h6a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0 0 1.5M1.5 17.25a6.003 6.003 0 0 1 8.356-5.518.75.75 0 0 0 .588-1.38A7.504 7.504 0 0 0 0 17.25a.75.75 0 0 0 1.5 0m9.375-12.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0m1.5 0a4.875 4.875 0 1 0-9.75 0 4.875 4.875 0 0 0 9.75 0"></path></svg>
                    </span>
                    <span className="ms-2 leading-[20px] text-[14px]" >Personal information</span> </Link>
                <Link to="/setting/Options" onMouseEnter={() => setHoverOptions(true)} onMouseLeave={() => setHoverOptions(false)} className="flex justify-start border-b-[1px]  w-[306px] p-[16px] items-center hover:underline decoration-[#006ce4] hover:text-[#006ce4] hover:cursor-pointer">
                    <span className="rounded-full bg-[#f5f5f5] p-[10px]">
                        <svg className="size-[16px] " fill={hoverOptions ? "#006ce4" : "#000"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-rtl-flip="true"><path d="M.75 4.5h16.34a3.5 3.5 0 1 0 0-1.5H.75a.75.75 0 0 0 0 1.5M20.5 1.75a2 2 0 1 1-2 2 2 2 0 0 1 2-2m2.75 17.75H9.46a3.5 3.5 0 0 0-6.83 0H.75a.75.75 0 0 0 0 1.5h1.88a3.5 3.5 0 0 0 6.83 0h13.79a.75.75 0 0 0 0-1.5m-17.2 2.75a2 2 0 1 1 2-2 2 2 0 0 1-2 2M23.25 11h-7.84a3.49 3.49 0 0 0-6.82 0H.75a.75.75 0 0 0 0 1.5h7.84a3.49 3.49 0 0 0 6.82 0h7.84a.75.75 0 0 0 0-1.5M12 13.75a2 2 0 1 1 2-2 2 2 0 0 1-2 2"></path></svg>
                    </span>
                    <span className="ms-2 leading-[20px] text-[14px]">Options</span></Link>
                <div onMouseEnter={() => setHoverSafety(true)} onMouseLeave={() => setHoverSafety(false)} className="flex justify-start border-b-[1px]  w-[306px] p-[16px] items-center hover:underline decoration-[#006ce4]text-[#006ce4] hover:cursor-pointer">
                    <span className="rounded-full bg-[#f5f5f5] p-[10px]">
                        <svg className="size-[16px] " fill="#006ce4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.5 16.5v5.25a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75v-10.5a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 .75.75zm1.5 0v-5.25A2.25 2.25 0 0 0 18.75 9H5.25A2.25 2.25 0 0 0 3 11.25v10.5A2.25 2.25 0 0 0 5.25 24h13.5A2.25 2.25 0 0 0 21 21.75zM7.5 9.75V6a4.5 4.5 0 0 1 9 0v3.75a.75.75 0 0 0 1.5 0V6A6 6 0 0 0 6 6v3.75a.75.75 0 0 0 1.5 0M12 15a1.125 1.125 0 1 0 .004 0h-.006a.75.75 0 0 0 .004 1.5H12a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5"></path></svg>
                    </span>
                    <span className="ms-2 text-[#006ce4] leading-[20px] text-[14px]">Safety and Security</span></div >
                <Link to='/setting/Billing'
                    onMouseEnter={() => setHoverBilling(true)} onMouseLeave={() => setHoverBilling(false)} className="flex justify-start border-b-[1px]  w-[306px] p-[16px] items-center hover:underline decoration-[#006ce4] hover:text-[#006ce4] hover:cursor-pointer">
                    <span className="rounded-full bg-[#f5f5f5] p-[10px]">
                        <svg className="size-[16px] " fill={hoverBilling ? "#006ce4" : "#000"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" data-rtl-flip="true"><path d="M116 0H28c-6.627 0-12 5.373-12 12v20a4 4 0 0 0 8 0h96v40a4 4 0 0 0 8 0V12c0-6.627-5.373-12-12-12M24 24V12a4 4 0 0 1 4-4h88a4 4 0 0 1 4 4v12zm76 20H12C5.373 44 0 49.373 0 56v60c0 6.627 5.373 12 12 12h88c6.627 0 12-5.373 12-12V56c0-6.627-5.373-12-12-12m-88 8h88a4 4 0 0 1 4 4v12H8V56a4 4 0 0 1 4-4m88 68H12a4 4 0 0 1-4-4V76h96v40a4 4 0 0 1-4 4M89.14 84.25h-23A5.88 5.88 0 0 0 60 89.859v12.261a5.88 5.88 0 0 0 6.09 5.63h23a5.89 5.89 0 0 0 6.1-5.63V89.88a5.89 5.89 0 0 0-6.05-5.63m-1.9 15.5H68v-7.5h19.24zM36 96a4 4 0 0 1-4 4H20a4 4 0 0 1 0-8h12a4 4 0 0 1 4 4"></path></svg>
                    </span>
                    <span className="ms-2 leading-[20px] text-[14px]">Billing Information</span></Link>
                <Link to='/setting/Privacy'
                    onMouseEnter={() => setHoverPrivacy(true)} onMouseLeave={() => setHoverPrivacy(false)}
                    className="flex justify-start border-b-[1px]  w-[306px] p-[16px] items-center hover:underline decoration-[#006ce4] hover:text-[#006ce4] hover:cursor-pointer">
                    <span className="rounded-full bg-[#f5f5f5] p-[10px]">
                        <svg className="size-[16px] " fill={hoverPrivacy ? "#006ce4" : "#000"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m23.883 23.317.1-1.122a3.75 3.75 0 0 0-2.921-4l-3.651-.81.587.732v-5.742a2.627 2.627 0 0 0-2.628-2.626c-.05 0-.05 0-.098.002-1.373-.008-2.517 1.125-2.524 2.53 0 .064 0 .064.003.13l-.001 9.165 1.2-.6-1.477-1.108a2.283 2.283 0 0 0-3.197 3.194l.476.634a.75.75 0 0 0 1.2-.9l-.475-.633a.782.782 0 0 1 1.097-1.094l1.476 1.107a.75.75 0 0 0 1.2-.6v-9.2l-.002-.088a1.043 1.043 0 0 1 1.048-1.038l.075-.001c.622 0 1.127.504 1.127 1.126v5.742a.75.75 0 0 0 .587.732l3.651.811a2.25 2.25 0 0 1 1.753 2.4l-.1 1.123a.75.75 0 1 0 1.494.134M6.75 18.57h-4.5a.75.75 0 0 1-.75-.75V2.25a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 .75.75V7.5a.75.75 0 0 0 1.5 0V2.25A2.25 2.25 0 0 0 15.75 0H2.25A2.25 2.25 0 0 0 0 2.25v15.57a2.25 2.25 0 0 0 2.25 2.25h4.5a.75.75 0 0 0 0-1.5m4.125-12.195a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0m1.5 0a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0m-1.027 3.17A5.3 5.3 0 0 0 8.998 9a5.235 5.235 0 0 0-4.93 3.502 5.3 5.3 0 0 0-.306 1.744.75.75 0 0 0 1.5.008c.002-.427.077-.85.22-1.252a3.74 3.74 0 0 1 3.52-2.502 3.8 3.8 0 0 1 1.684.39.75.75 0 0 0 .662-1.345M4.5 15h6a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0 0 1.5"></path></svg>
                    </span>
                    <span className="ms-2 leading-[20px] text-[14px]">Privacy</span></Link >
                <Link to='/setting/Email'
                    onMouseEnter={() => setHoverEmail(true)} onMouseLeave={() => setHoverEmail(false)} className="flex justify-start border-b-[1px]  w-[306px] p-[16px] items-center hover:underline decoration-[#006ce4] hover:text-[#006ce4] hover:cursor-pointer">
                    <span className="rounded-full bg-[#f5f5f5] p-[10px]">
                        <svg className="size-[16px] " fill={hoverEmail ? "#006ce4" : "#000"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.28 21.961a2.837 2.837 0 0 0 5.445 0 .75.75 0 1 0-1.44-.422 1.337 1.337 0 0 1-2.565 0 .75.75 0 1 0-1.44.422M12.75 3V.75a.75.75 0 0 0-1.5 0V3a.75.75 0 0 0 1.5 0m-.75.75a6.75 6.75 0 0 1 6.75 6.75c0 3.154.29 5.436.785 6.994.323 1.02.684 1.59.995 1.84L21 18H3l.59 1.212c.248-.315.572-.958.88-2 .49-1.66.78-3.872.78-6.712A6.75 6.75 0 0 1 12 3.75m0-1.5a8.25 8.25 0 0 0-8.25 8.25c0 2.702-.272 4.772-.72 6.288-.254.864-.493 1.336-.62 1.5A.75.75 0 0 0 3 19.5h18c.708 0 1.022-.892.47-1.335.019.016-.008-.015-.07-.113-.14-.223-.29-.553-.435-1.012-.443-1.396-.715-3.529-.715-6.54A8.25 8.25 0 0 0 12 2.25"></path></svg>
                    </span>
                    <span className="ms-2 leading-[20px] text-[14px]">Email notification</span></Link >
                <Link to="/setting/Companion"
                    onMouseEnter={() => setHoverCompanion(true)} onMouseLeave={() => setHoverCompanion(false)} className="flex justify-start border-b-[1px]  w-[306px] p-[16px] items-center hover:underline decoration-[#006ce4] hover:text-[#006ce4] hover:cursor-pointer">
                    <span className="rounded-full bg-[#f5f5f5] p-[10px]">
                        <svg className="size-[16px] " fill={hoverCompanion ? "#006ce4" : "#000"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-rtl-flip="true"><path d="M10.875 7.875a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0m1.5 0a4.875 4.875 0 1 0-9.75 0 4.875 4.875 0 0 0 9.75 0M1.5 20.25a6 6 0 0 1 12 0 .75.75 0 0 0 1.5 0 7.5 7.5 0 0 0-15 0 .75.75 0 0 0 1.5 0m18.852-10.125a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0m1.5 0a4.125 4.125 0 1 0-8.25 0 4.125 4.125 0 0 0 8.25 0m-5.78 5.647A4.776 4.776 0 0 1 22.5 20.25a.75.75 0 0 0 1.5 0 6.276 6.276 0 0 0-8.446-5.886.75.75 0 1 0 .518 1.408"></path></svg>
                    </span>
                    <span className="ms-2 leading-[20px] text-[14px]">Companion</span></Link >
            </div >
            <div className="max-w-[808px] ms-5"
                style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}>
                <div className="text-[32px] leading-[40px] font-[700] ">Safety and Security</div>
                <div className="text-[16px] leading-[24px] text-[#595959] my-2 pb-2 ">
                    Change your security settings, set up additional authentication, or delete your account.
                </div>
                <div className="mb-10">
                    {
                        !isSettingPassword && <div className="border-t-[1px] border-gray-900/20 py-4 md:flex md:items-center md:grid md:grid-cols-5">
                            <div className="leading-[20px] text-[16px] text-[#1a1a1a] ms-4">Password</div>
                            <div className="col-span-3 leading-[16px] text-[14px] text-[#1a1a1a] ms-4 md:ms-0" >Change your password regularly to keep your account secure.</div>
                            <div onClick={() => {
                                if (!isSetting) {
                                    setIsSettingPassword(true)
                                    setIsSetting(true)
                                }
                            }} className={isSetting ? "me-4 md:me-0 md:text-center text-end text-[14px] font-[500] leading-[20px] text-[#a2a2a2] hover:cursor-not-allowed" : "me-4 md:me-0 md:text-center text-end text-[14px] font-[500] leading-[20px] text-[#006ce4] hover:underline decoration-[#006ce4] hover:cursor-pointer"}>Reset</div>
                        </div>
                    }

                    {isSettingPassword && <div className="border-t-[1px] border-gray-900/20 py-4 md:flex md:grid md:grid-cols-5">
                        <div className="leading-[20px] text-[16px] text-[#1a1a1a] ms-4">Password</div>
                        <div className="col-span-3  pb-[50px] grid grid-cols-2" >
                            <div className="md:ms-0 ms-4 col-span-3 leading-[16px] text-[14px] text-[#595959]" >To change your password, we need to send a password reset link to your email address.</div>
                        </div>
                        <div className="flex justify-between ms-4 md:ms-0 md:justify-center md:content-between md:grid  h-full">
                            <div onClick={() => {
                                setIsSettingPassword(false)
                                setIsSetting(false)
                            }} className="flex justify-center text-[14px] font-[500] leading-[20px] text-[#006ce4] hover:underline decoration-[#006ce4] hover:cursor-pointer">Cancel</div>
                            <div className="flex justify-center ">
                                <span className="text-center rounded px-[12px] py-[4px] hover:cursor-pointer text-[14px] font-[500] leading-[20px] text-white bg-[#006ce4]">Send email</span>
                            </div>
                        </div>
                    </div>
                    }

                    {
                        !isSetting2factor && <div className="border-t-[1px] border-gray-900/20 py-4 md:flex md:grid grid-cols-5">
                            <div className="leading-[20px] text-[16px] text-[#1a1a1a] ms-4 ">2-factor authentication</div>
                            <div className="col-span-3 leading-[16px] text-[14px] text-[#1a1a1a] ms-4 md:ms-0" >Increase account security by setting up two-factor authentication.</div>
                            <div onClick={() => {
                                if (!isSetting) {
                                    setIsSetting2factor(true)
                                    setIsSetting(true)
                                }
                            }} className={isSetting ? "me-4 md:me-0 md:text-center text-end text-[14px] font-[500] leading-[20px] text-[#a2a2a2] hover:cursor-not-allowed" : "me-4 md:me-0 md:text-center text-end text-[14px] font-[500] leading-[20px] text-[#006ce4] hover:underline decoration-[#006ce4] hover:cursor-pointer"}>Establish</div>
                        </div>
                    }

                    {isSetting2factor && <div className="border-t-[1px] border-gray-900/20 py-4 md:flex md:grid md:grid-cols-5">
                        <div className="leading-[20px] text-[16px] text-[#1a1a1a] ms-4 ">2-factor authentication</div>
                        <div className="col-span-3  pb-[50px]" >
                            <div className="col-span-3 leading-[16px] text-[14px] text-[#1a1a1a] mb-2 ms-4 md:ms-0 " >1. Download the authenticator app</div>
                            <div className="col-span-3 leading-[16px] text-[14px] text-[#595959] ms-4 md:ms-0 me-2 md:me-0 " >If you don't have an authenticator app, please download one. We recommend using Google Authenticator or Microsoft Authenticator.</div>
                        </div>
                        <div className="flex justify-between ms-4 md:ms-0 md:justify-center md:content-between md:grid  h-full">
                            <div onClick={() => {
                                setIsSetting2factor(false)
                                setIsSetting(false)
                            }} className="flex justify-center text-[14px] font-[500] leading-[20px] text-[#006ce4] hover:underline decoration-[#006ce4] hover:cursor-pointer">Cancel</div>
                            <div className="flex justify-center ">
                                <span className="text-center rounded px-[12px] py-[4px] hover:cursor-pointer text-[14px] font-[500] leading-[20px] text-white bg-[#006ce4]">Next</span>
                            </div>
                        </div>
                    </div>
                    }

                    <div className="border-t-[1px] border-gray-900/20 py-4 md:flex md:grid md:grid-cols-5">
                        <div className="leading-[20px] text-[16px] text-[#1a1a1a] ms-4">Active sessions</div>
                        <div className="col-span-3 leading-[16px] text-[14px] text-[#1a1a1a]" >
                            <div className="mb-2 ms-4 md:ms-0 me-2 md:me-0 ">When you select "Sign Out", you will be signed out of all devices except this one, and it may take up to 10 minutes.</div>
                        </div>
                        <div onClick={() => {
                            if (!isSetting) {
                                setIsSettingActive(true)
                                setIsSetting(true)
                            }
                        }} className={isSetting ? "me-4 md:me-0 md:text-center text-end text-[14px] font-[500] leading-[20px] text-[#a2a2a2] hover:cursor-not-allowed" : "me-4 md:me-0 md:text-center text-end text-[14px] font-[500] leading-[20px] text-[#006ce4] hover:underline decoration-[#006ce4] hover:cursor-pointer"}>Log out </div>
                    </div>

                    <div className="border-t-[1px] border-gray-900/20 py-4 md:flex md:grid md:grid-cols-5">
                        <div className="leading-[20px] text-[16px] text-[#1a1a1a] ms-4">Delete the account</div>
                        <div className="col-span-3 leading-[16px] text-[14px] text-[#1a1a1a]" >
                            <div className="mb-2 ms-4 md:ms-0">Delete Booking.com account permanently</div>
                        </div>
                        <div onClick={() => {
                            if (!isSetting) {
                                setIsSettingActive(true)
                                setIsSetting(true)
                            }
                        }} className={isSetting ? "me-4 md:me-0 md:text-center text-end text-[14px] font-[500] leading-[20px] text-[#a2a2a2] hover:cursor-not-allowed" : "me-4 md:me-0 md:text-center text-end text-[14px] font-[500] leading-[20px] text-[#006ce4] hover:underline decoration-[#006ce4] hover:cursor-pointer"}>Delete the account</div>
                    </div>

                </div>

            </div>
        </div>)

}
export default Safety;


