import React, { useState } from 'react'
import card1 from "../media/card1.webp";
import card2 from "../media/card2.webp";
import card3 from "../media/card3.webp";
import ProductImageLoader from './ProductImageLoader';
import InfoCardLoader from './InfoCardLoader';
import InfoLittleCardLoader from './InfoLittleCardLoader';



export default function MainCards() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isLittleLoaded, setIsLittleLoaded] = useState<boolean>(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleLittleImageLoad = () => {
    setIsLittleLoaded(true);
  };
  
  return (
    <section className="flex flex-col m-auto max-w-[1180px]">
      <div className="flex justify-center">
        
        <div className="flex flex-col w-full max-w-[680px] l:flex-row justify-center gap-[20px] mt-[120px] l:max-w-[1180px]">
          {!isLoaded && <InfoCardLoader />}
          <img src={card1} alt="" className="max-w-[680px] max-h-[360px]" style={{ display: isLoaded ? 'block' : 'none' }} onLoad={() => { handleImageLoad() }} />
          <div className="flex flex-col w-full gap-[20px]">
            {!isLittleLoaded && <InfoLittleCardLoader />}
            {!isLittleLoaded && <InfoLittleCardLoader />}
            <img src={card2} alt="" className="w-full l:max-w-[480px] l:max-h-[167px]" style={{ display: isLittleLoaded ? 'block' : 'none' }} onLoad={() => { handleLittleImageLoad() }} />
            <img src={card3} alt="" className="w-full l:max-w-[480px] l:max-h-[167px]" style={{ display: isLittleLoaded ? 'block' : 'none' }} onLoad={() => { handleLittleImageLoad() }} />
          </div>
        </div>
      </div>
    </section>
  )
}
