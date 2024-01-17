import React from "react";
import bg_main from "../media/bg_main.webp";
import world_icon from "../media/svg/world.svg";
import clock_icon from "../media/svg/clock.svg";
import flower_icon from "../media/svg/flower.svg";
import logo from "../media/svg/daizee-logo.svg";
import scroll from "../media/scroll-icon.png";
import { Link as ScrollLink } from 'react-scroll';

export default function MainHeader() {
    return (
        <header className="w-[100%] h-[100vh] relative flex flex-col text-white">
            <img src={bg_main} alt="" className="absolute z-[-1] w-[100%] h-[100%] object-cover" />
            <div className="flex flex-row justify-center lg:justify-between items-center gap-[50px] mx-auto w-full max-w-[1920px] px-[100px] py-[15px]">
                <div>
                    <img src={logo} alt="" className="md:max-w-[240px]" />
                </div>
                <nav className="hidden lg:flex lg:flex-row lg:justify-between lg:max-w-[650px] lg:w-full">

                    <ScrollLink spy={true} smooth={true} offset={-70} duration= {500} to="catalog" className="uppercase text-[20px] w-fit hover:cursor-pointer"> Букеты</ScrollLink>
                    <ScrollLink spy={true} smooth={true} offset={-70} duration= {500} to="about" className="uppercase text-[20px] w-fit hover:cursor-pointer"> О нас</ScrollLink>
                    <ScrollLink spy={true} smooth={true} offset={-70} duration= {500} to="footer" className="uppercase text-[20px] w-fit hover:cursor-pointer"> Контакты</ScrollLink>

                </nav>
            </div>

            <div className="absolute w-full flex flex-col top-[15%] sl:top-[17%] justify-center px-[30px]">
                <div className="max-w-[1320px] w-full mx-auto">
                    <h1 className="text-[23px] ss:text-[27px] sm:text-[33px] mx:text-[45px] md:text-[65px] lg:text-[90px] uppercase font-bold">
                        Незабываемый <span className="text-[#F17F7F]">букет</span>
                    </h1>
                    <h2 className="text-[15px] ss:text-[20px] sm:text-[25px] mx:text-[30px] md:text-[35px] lg:text-[48px] uppercase">
                        Даже <span className="text-[#F17F7F]">без повода</span>
                    </h2>
                </div>
                <div className="flex flex-col gap-[50px] max-w-[1320px] px-[20px] mt-[10%] lg:mt-[3.5%] w-full mx-auto items-start justify-between sl:flex-wrap sl:flex-row">
                    <div className="flex flex-row items-center max-w-[300px] whitespace-nowrap gap-[40px]">
                        <img src={world_icon} alt="" className="w-[50px] lg:w-[80px]" />
                        <span className="block">
                        Самые яркие и  <br /> красочные букеты
                        </span>
                    </div>
                    <div className="flex flex-row items-center max-w-[300px] whitespace-nowrap gap-[40px]">
                        <img src={clock_icon} alt="" className="w-[50px] lg:w-[80px]" />
                        <span className="block">
                            Свежий завоз <br /> раз в сутки
                        </span>
                    </div>
                    <div className="flex flex-row items-center max-w-[300px] whitespace-nowrap gap-[40px]">
                        <img src={flower_icon} alt="" className="w-[50px] lg:w-[80px]" />
                        <span className="block">
                            Большой выбор <br /> на любой вкус
                        </span>
                    </div>
                </div>
            </div>
            <ScrollLink spy={true} smooth={true} offset={70} duration={500} to="catalog" className="absolute bottom-[15%] left-0 right-0 ml-auto mr-auto text-center"> 
                <button className="w-[230px] h-[53px] text-[17px] items-center rounded-[17px] md:w-[320px] md:h-[70px] md:text-[24px] uppercase font-extrabold mt-[70px] text-black bg-[#F17F7F] text-center">В каталог</button>
            </ScrollLink>

         
            <img src={scroll} alt="" className="hidden lx:block h-[70px] w-[15px] absolute bottom-[3%] left-0 right-0 ml-auto mr-auto text-center" />
        </header>
    );
}
