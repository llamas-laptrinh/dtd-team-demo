import { PropertyProps } from "../../../types/common";
const PropertyTypeComponent: React.FC<PropertyProps> = (props) => {
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
            </div>
        </div >

    )
}
export default PropertyTypeComponent;