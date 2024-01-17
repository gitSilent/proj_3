import React from "react";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import MainCards from "../components/MainCards";
import MainProducts from "../components/MainProducts";
import MainGallery from "../components/MainGallery";
import MainAbout from "../components/MainAbout";

export default function MainPage() {
    return (
        <div className="relative min-h-full pb-[380px]">

            <MainHeader />

            <MainCards />

            <MainProducts />

            <MainAbout />

            <MainGallery />

            <Footer />

        </div>
    );
}
