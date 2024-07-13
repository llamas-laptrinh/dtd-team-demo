import { DealProps } from "../../../types/common";

const DealComponent: React.FC<DealProps> = (props) => {
    return (
        <div className="w-[263px]  rounded-md  border-2 drop-shadow-lg">
            <div className='relative h-[210px] w-full bg-gray-200' >
                <img className="relative z-0 w-full h-full" src={props.image_url} alt="" />
                <div
                    className="absolute top-0 z-10 size-full pt-24 hover:cursor-pointer">
                </div>
            </div>
            <div className="mt-1 mb-1 h-[16px] w-[46px] text-white pb-1 text-sm">
                {props.is_genius &&
                    <p className="flex justify-center items-center ms-2 bg-[#004cb8] px-[2px] rounded"><span className=" text-[10px]">Genius</span></p>}
            </div>
            <p className="mb-1 ms-2"><span className="font-medium">{props.name}</span></p>
            <p className="one-line text-sm ms-2 mb-1"><span className="text-gray-500">{props.address}</span></p>
            <div className="flex items-center gap-2 ms-2">
                <span className="flex justify-center items-center rounded bg-[#003b95] text-white text-[12px] leading-[18px]  w-[24px] h-[24px]"
                    style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                >{props.score}</span>
                {props.score >= 9 && <span
                    className="text-[#1a1a1a]  text-[12px] leading-[18px]"
                    style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                >Wonderful</span>}
                {props.score < 9 && props.score >= 8 && <span
                    className="text-[#1a1a1a]  text-[12px] leading-[18px]"
                    style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                >Excellent</span>}
                {props.score < 8 && props.score >= 7 && <span
                    className="text-[#1a1a1a]  text-[12px] leading-[18px]"
                    style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                >Very Good</span>}
                {props.score < 7 && props.score >= 6 && <span
                    className="text-[#1a1a1a]  text-[12px] leading-[18px]"
                    style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                >Good</span>}
                {props.score < 6 && props.score >= 5 && <span
                    className="text-[#1a1a1a]  text-[12px] leading-[18px]"
                    style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                >Average</span>}
                {props.score < 5 && props.score >= 4 && <span
                    className="text-[#1a1a1a]  text-[12px] leading-[18px]"
                    style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                >Below Average</span>}
                {props.score < 4 && props.score >= 3 && <span
                    className="text-[#1a1a1a]  text-[12px] leading-[18px]"
                    style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                >Poor</span>}
                {props.score < 3 && props.score >= 2 && <span
                    className="text-[#1a1a1a]  text-[12px] leading-[18px]"
                    style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                >Very Poor</span>}
                {props.score < 2 && props.score >= 1 && <span
                    className="text-[#1a1a1a]  text-[12px] leading-[18px]"
                    style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                >Terrible</span>}
                {props.score < 1 && props.score >= 0 && <span
                    className="text-[#1a1a1a]  text-[12px] leading-[18px]"
                    style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                >Awful</span>}
                <span
                    className="text-[#595959]  text-[12px] leading-[18px]"
                    style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                > · {props.review_number} reviews</span>
            </div>
            <div className="text-[12px] leading-[18px] mt-12 me-2 pb-3"
                style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}>
                <div className="flex justify-end gap-1">
                    <span>{props.night_number} <span>nights</span></span>
                    <span className="line-through text-[14px] leading-[20px] text-[#d4111e]">VND <span className="">{props.real_price}.000</span></span>
                </div>
                <div className="flex justify-end text-[16px] leading-[24px] font-[700]">
                    VND {props.discount_price}.000
                </div>
            </div>

        </div >

    )
}
export default DealComponent;