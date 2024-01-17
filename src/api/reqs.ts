import axios from "axios";
import { IGalleryImage, IProduct } from "./models";

export const domain = "";

export const bouqetsUrl = "";
export const flowersUrl = "";
export const galleryUrl = "";

export const getBouqets = async () => {
    return await axios.get<IProduct[]>(domain + bouqetsUrl);
};

export const getFlowers = async () => {
    return await axios.get<IProduct[]>(domain + flowersUrl);
};

export const getGallery = async () => {
    return await axios.get<IGalleryImage[]>(domain + galleryUrl);
};
