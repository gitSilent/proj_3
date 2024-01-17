import React, { useEffect, useState } from "react";
import { getGallery } from "../api/reqs";
import { IGalleryImage } from "../api/models";
import GalleryLoader from "./GalleryLoader";

export default function MainGallery() {

    const [photos, setPhotos] = useState<IGalleryImage[]>();
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        getGallery().then((resp) => {
            setPhotos(resp.data)
        })
    }, [])

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    return (
        <section className="flex flex-col items-center">
            <div className="px-[20px] max-w-[1180px] w-full">
                <h2 className="mt-[120px] text-[40px] mb-[40px] font-extrabold uppercase">Галерея</h2>
                <div className="grid  grid-cols-1 ss:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {photos ?
                        photos.map((item, idx) => {
                            return <>
                                {!isLoaded && <GalleryLoader />}
                                <img key={idx} src={item.image} alt="" className="rounded-[34px]"
                                    onLoad={() => { handleImageLoad() }}
                                    style={{ display: isLoaded ? 'block' : 'none' }}
                                />
                            </>

                        })
                        : <><GalleryLoader /> <GalleryLoader /> <GalleryLoader /> <GalleryLoader /></>
                    }
                </div>
            </div>
        </section>
    );
}
