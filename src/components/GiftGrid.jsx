import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { GiftItem } from './GiftItem';

import { getGiftsByCategory } from '../helpers/getGiftsByCategory';
import { useFetchGifs } from '../hooks/useFetchGifs';



export const GiftGrid = ({ category }) => {

    const { images, isLoading} = useFetchGifs(category);
    // const [images, setimages] = useState([]);


    // useEffect(() => {
    //     getImages(images);
    // //   return () => {
    // //     second
    // //   }
    // }, [ ]);

    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                { images.map((image) => (
                    <GiftItem 
                        key={image.id} 
                        {...image}
                    />
                )) }
            </div>
        </>
    );
}

GiftGrid.propTypes = {
    category: PropTypes.string.isRequired,
};
