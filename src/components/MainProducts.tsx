import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { getBouqets, getFlowers } from "../api/reqs";
import { IProduct } from "../api/models";
import ContentLoader from "react-content-loader"
import ProductLoader from "./ProductLoader";

export default function MainProducts() {
    const [type, setType] = useState<string>();
    const [products, setProducts] = useState<IProduct[]>();
    const [isProductsFetching, setIsProductsFetching] = useState<boolean>(true)

    useEffect(() => {
        if (type) {
            setIsProductsFetching(true)
            switch (type) {
                case "flowers":
                    getFlowers().then((resp) => {
                        console.log(resp);
                        setProducts(resp.data);
                        setIsProductsFetching(false)
                    });
                    break;
                case "bouqets":
                    getBouqets().then((resp) => {
                        console.log(resp);
                        setProducts(resp.data);
                        setIsProductsFetching(false)
                    });
                    break;
            }
        }
    }, [type]);

    useEffect(() => {
        getBouqets().then((resp) => {
            setProducts(resp.data);
            setIsProductsFetching(false)
            console.log(resp);
        });
    }, []);

    return (
        <section id="catalog" className="flex flex-col items-center ">
            <div className="px-[15px] max-w-[1180px] w-full">
                <div className="flex flex-col gap-[20px] sm:flex-row justify-between items-center mt-[120px] mb-[40px]">
                    <h2 className="text-[40px] font-extrabold uppercase">Каталог</h2>
                    <FormControl style={{ width: "150px", backgroundColor: "white" }}>
                        <InputLabel id="demo-simple-select-label">Тип</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            defaultValue={"bouqets"}
                            onChange={(e) => {
                                setType(e.target.value);
                            }}
                        >
                            <MenuItem value={"flowers"}>Цветы</MenuItem>
                            <MenuItem value={"bouqets"}>Букеты</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                {
                    products?.length !== 0
                        ?
                        <div className="grid items-center grid-cols-1 ssx:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {isProductsFetching
                                ?
                                <>
                                    <ProductLoader /><ProductLoader /><ProductLoader /><ProductLoader />
                                </>
                                :
                                products?.map((item, idx) => {
                                    return <ProductCard key={idx} id={"indentifier"+idx} description={item.description} photos={item.photos} price={item.price} title={item.title} />
                                })
                            }
                        </div>
                        :
                        <span className="block text-center">Товаров такой категории не найдено</span>

                }
            </div>
        </section>
    );
}
