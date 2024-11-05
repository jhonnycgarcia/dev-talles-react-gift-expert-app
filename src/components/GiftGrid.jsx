import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { GiftItem } from './GiftItem';

import { getGiftsByCategory } from '../helpers/getGiftsByCategory';



export const GiftGrid = ({ category }) => {
    const [images, setimages] = useState([]);

    const getImages = async() => {
        const images = await getGiftsByCategory(category);
        setimages(images);
    };
    
    useEffect(() => {
        getImages(images);
    //   return () => {
    //     second
    //   }
    }, [ ]);

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
