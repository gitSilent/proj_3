import React from "react";
import logo from "../media/svg/daizee-logo.svg";
import vkLogo from "../media/svg/vk-whiteLogo.svg";
import tgLogo from "../media/svg/tg-whiteLogo.svg";
import phone from "../media/svg/phone.svg";

export default function Footer() {
  return (
    <footer id="footer" className="absolute left-0 bottom-0 w-full px-[37px] pt-[37px] pb-5 bg-[#181818]">

        <div className="flex flex-col gap-[15px] sx:gap-[50px] md:flex-row md:items-center md:w-[100%] md:justify-between">
          <img src={logo} alt="" className="w-[200px] hover:cursor-pointer" />
          <div className="flex gap-[35px]">
            <a href="tel:+79208992500">
              <img src={phone} alt="" className="w-[41px] hover:cursor-pointer" />
            </a>
            <a href="https://vk.link/dandelion.buket">
              <img src={vkLogo} alt="" className="w-[41px] hover:cursor-pointer" />
            </a>
            <a href="#">
              <img src={tgLogo} alt="" className="w-[41px] hover:cursor-pointer" />
            </a>
          </div>
        </div>

      <span className="block text-gray-400 mt-[20px] text-center">Kisulkens 2023 © Все права защищены</span>
    </footer>
  );
}