import { CityProps } from "../../../types/common";
const CityComponent: React.FC<CityProps> = (props) => {
    return (
        <div className="ms-2 w-48">
            <div className='relative h-fit w-full' >
                <img className="rounded-[10px] relative z-0 w-full h-32" src={props.image_url} alt="" />
                <div
                    className="absolute top-0 z-10 size-full pt-24 hover:cursor-pointer">
                </div>
            </div>
            <div className="mt-3 pb-1 text-sm">
                <p className="text-[16px] leading-[24px] font-[700]"
                    style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }
                    }>{props.name}</p>
            </div>
            <div className="flex items-center justify-between">
                <div className=" flex items-center ">
                    <div className="">
                        <p className="text-[14px] leading-[20px] text-[#595959]"
                            style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
                        >{props.properties} properties</p>
                    </div>

                </div>
            </div>
            {/* <div className="absolute right-0 top-0 bg-white/80 p-2 hover:bg-white/50">
                <i
                    // eslint-disable-next-line tailwindcss/no-custom-classname
                    className="fa fa-ellipsis-h" aria-hidden="true"></i>

            </div> */}
        </div >

    )
}
export default CityComponent;