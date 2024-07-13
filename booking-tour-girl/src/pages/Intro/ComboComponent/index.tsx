import { ComboProps } from "../../../types/common";
const ComboComponent: React.FC<ComboProps> = (props) => {
    return (
        <div className="w-64 rounded-md">
            <div className='relative h-fit w-full bg-gray-200' >
                <img className="rounded relative z-0 w-full h-48" src={props.image_url} alt="" />
                <div
                    className="absolute top-0 z-10 size-full pt-24 hover:cursor-pointer">
                </div>
            </div>
            <div className="mt-3 pb-1 text-sm">
                <p className="text-[16px] leading-[24px] font-[700] two-lines"
                    style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }
                    }>{props.name}</p>
                <div className="flex justify-between items-center text-[16px] pb-2 leading-[24px] mt-2 font-[500]">
                    <span className="text-[#006ce4]">VND {props.price}</span>
                    <span className="bg-[#004cb8] text-white px-2 py-1 rounded hover:cursor-pointer hover:bg-[#004cb8]/80">View details</span>
                </div>
            </div>
        </div >

    )
}
export default ComboComponent;