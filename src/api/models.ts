export interface IProduct {
    title: string;
    description: string;
    price: number;
    photos: {
        image: string;
    }[];
}

export interface IGalleryImage {
    id: number,
    image: string,
    title: string
}
