import bg_second from "../media/bg_second.webp";

export default function MainAbout() {
    return (
        <section id="about" className="h-fit w-full bg-white">

            <div className="flex max-w-[1920px] mx-auto justify-end xl:gap-[50px] sm:gap-[10px] flex-col-reverse lx:flex-row w-full max-h-fit lx:max-h-[580px] mt-[120px]">
                <div className="lx:max-w-[570px] xl:max-w-[620px]">
                    <h2 className="font-extrabold px-[20px] mt-[25px] text-[35px] sm:text-[58px] uppercase">Салон цветов Dandelion</h2>
                    <p className="font-medium px-[20px] text-[15px] sm:text-[21px] lx:mt-10">
                        Мы готовы в любой момент порадовать Ваших близких замечательными букетами.
                        Dandelion создан дарить эмоции -  романтичные и страстные - такие же разные, как и Ваши события!
                        На сайте и в мобильном приложении Вы сможете легко найти композиции необычных цветовых сочетаний и форм букета, для любого повода.
                    </p>
                </div>
                <div className="right-0 lx:w-[45%] lx:h-[520px]">
                {/* <div className="right-0 lx:w-[50%] lx:h-[620px]"> */}
                    <img src={bg_second} alt="" className="w-full h-full lx:object-cover" />
                </div>
            </div>

        </section>
    );
}
