interface TourProps {
    "ten_tour": string,
    "thanh_pho": string,
    "tinh": string,
    "thoi_gian": string,
    "ngay_di": Date,
    "gia_tien": number
    "image_url": string
    "is_bookmarked": boolean
}

const TourComponent: React.FC<TourProps> = (props) => {
    return (
        <div className="ms-2 w-48 rounded-md  border-2 border-indigo-300 shadow-md hover:ring-2 hover:ring-sky-800">
            <div className='relative h-fit w-full bg-gray-200' >
                <img className="relative z-0 w-full h-32" src={props.image_url} alt="" />
                <div
                    className="absolute top-0 z-10 size-full pt-24 hover:cursor-pointer  hover:bg-black/50">
                </div>
                {/* <div className="absolute inset-2/4 z-10 h-12 w-full text-center font-medium"
                    style={{
                        transform: 'translate(-50%,-50%)'
                    }}>Use this Template
                    <i
                        // eslint-disable-next-line tailwindcss/no-custom-classname
                        className="fa fa-pencil ps-1" aria-hidden="true"></i>
                </div> */}
            </div>
            {/* <p className="mb-3 mt-2 text-center font-bold hover:underline">{props.name}</p> */}
            <div className="mt-3 pb-1 text-sm">
                <p className="mb-1 ms-2"><span className="font-medium">Category:</span> <span className="text-gray-500">{props.gia_tien}</span></p>
            </div>
            <div className="flex items-center justify-between">
                <div className="  ms-2 flex h-12 items-center ">
                    <div className="ms-2 w-24">
                        <p className="one-line text-sm"><span className="text-gray-500">{props.gia_tien}</span></p>
                    </div>

                </div>
                {props.is_bookmarked == false && <i className="fa fa-star-o me-2 hover:cursor-pointer" onClick={() => {

                }} aria-hidden="true"></i>}
                {props.is_bookmarked == true && <i className="fa fa-star me-2 hover:cursor-pointer text-yellow-400" aria-hidden="true"></i>}

            </div>
            {/* <div className="absolute right-0 top-0 bg-white/80 p-2 hover:bg-white/50">
                <i
                    // eslint-disable-next-line tailwindcss/no-custom-classname
                    className="fa fa-ellipsis-h" aria-hidden="true"></i>

            </div> */}
        </div >

    )
}
export default TourComponent;