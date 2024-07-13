import { OfferProps } from "../../../types/common";

const OfferComponent: React.FC<OfferProps> = (props) => {
    return (
        <div className="h-36 relative" style={{
            backgroundImage: 'URL(' + props.image_url + ')',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }}>
            <div className="relative size-full bg-gray-900/70  px-4 py-4"
                style={{ fontFamily: 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}
            >
                <div className="text-white text-[20px] font-[700] leading-[28px]"
                    style={{ fontFamily: '"Blue Sans",BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}>{props.name}</div>
                <div className="mt-1 w-96 text-white text-[14px] leading-[20px] mb-2">{props.short_description}</div>
                <span className="hover:cursor-pointer text-white bg-[#006ce4]  leading-[2-px] font-medium text-[14px] rounded-[3px] px-[12px] py-[4px]">Find Getaway Deals</span>
            </div>

        </div>


    )
}
export default OfferComponent;