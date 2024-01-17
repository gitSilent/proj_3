import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./swiperStyles.css";
import { Pagination } from "swiper/modules";
import { IProduct } from "../api/models";
import { addMinutes } from "../service/addMinutes";
import { isFlood } from "../service/isFloodReq";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ym from 'react-yandex-metrika';
import ProductImageLoader from "./ProductImageLoader";

interface IProps extends IProduct{
    id: string
}

export default function ProductCard({ description, photos, price, title, id }: IProps) {

    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [ isShowedMore, setIsShowedMore ] = useState<boolean>(false)

    function handleClick() {
        if (!isFlood()) {
            ym('reachGoal', 'buy-btn-click')
            let currentDate = new Date();
            let cookie = `flood=true; expires=${addMinutes(currentDate, 1)}`;
            document.cookie = cookie;
            window.open(`https://wa.me/79208992500?text=Здравствуйте! Хочу приобрести ${title}`, "_blank");
            return;
        } else {
            toast("Слишком частые запросы. Пожалуйста, подождите 1 минуту", { position: "top-center", autoClose: 2000 })
            return;
        }
    }

    const handleImageLoad = () => {
        setIsLoaded(true);
    };


    return (
        <div className="max-h-[870px] min-w-[250px] mx-auto ssx:mx-0 h-full bg-white max-w-[270px] w-full p-[15px] ss:p-[10px] sm:p-[15px] flex flex-col shadow-lg rounded-[25px]">
            <ToastContainer />
            <Swiper pagination={photos.length > 1 ? { clickable: true, el: `.${id}` } : false} modules={[Pagination]} loop={true} className="swiper-card">
                {photos.map((item, idx) => {
                    return (
                        <SwiperSlide key={idx}>
                            <div className="">
                                {!isLoaded && <ProductImageLoader />}
                                <img
                                    src={item.image}
                                    alt=""
                                    className="absolute object-cover top-0 left-0 w-full h-full"
                                    onLoad={() => { handleImageLoad() }}
                                    style={{ display: isLoaded ? 'block' : 'none' }}
                                />
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className={`${id} swiper-pagination`}></div>
            <span className={`text-[14px]/[14px] ${photos.length > 1 ? "mt-[5px]" :"mt-[18px]"}  mb-[3px] font-semibold tracking-tighter`}>{title}</span>
            <span className="text-[9px] sm:text-[12px] font-medium text-gray-500 tracking-tighter">{description}</span>
            {/* {
                isShowedMore 
                ? <span className="text-[9px] sm:text-[12px] font-medium text-gray-500 tracking-tighter">{longDesc}  <span onClick={()=>{setIsShowedMore(false)}} className="text-black underline hover:cursor-pointer"><br/>скрыть</span></span>
                : <span className="text-[9px] sm:text-[12px] font-medium text-gray-500 tracking-tighter">
                    {longDesc.length > 30 ? longDesc.slice(0,35) + "... " : longDesc }
                    {longDesc.length > 30 ? <span onClick={()=>{setIsShowedMore(true)}} className="text-black underline hover:cursor-pointer">раскрыть</span> : <></>}
                  </span>
            } */}
            
           
            <span className="text-[20px] sm:text-[25px] font-semibold mt-[10px]">{price} ₽</span>
            <button onClick={handleClick} className="h-[63px] text-[18px] ss:text-[14px] sm:text-[18px] tracking-tighter items-center w-full rounded-[10px] font-semibold text-black bg-[#F17F7F] hover:bg-[#D06565] text-center mx-auto">
                Заказать
            </button>
        </div>
    );
}

