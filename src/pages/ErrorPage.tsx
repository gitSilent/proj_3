import React from 'react'
import logo from "../media/svg/daizee-logo.svg";

export default function ErrorPage() {
  return (
    <div className="w-full h-full">
      <div>
        <img src={logo} alt="" className="md:max-w-[240px]" />
      </div>
      <div className='flex flex-col justify-center items-center h-full w-full'>
        <h1 className="text-center text-[60px]">Страница не найдена</h1>
        <h2 className="text-center text-[70px] font-bold">404</h2>
      </div>
    </div>
  )
}
