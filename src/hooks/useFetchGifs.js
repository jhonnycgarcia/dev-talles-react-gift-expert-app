import { useEffect, useState } from "react";
import { getGiftsByCategory } from "../helpers/getGiftsByCategory";

export const useFetchGifs = (category) => {
    const [images, setimages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
        try {
            const images = await getGiftsByCategory(category);
            setimages(images);
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getImages(images);
    }, [ ]);
    
    return {
        images,
        isLoading,
    };
}
