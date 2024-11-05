import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
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
            <ol>
                { images.map(({id, title}) => (
                    <li key={id}>
                        { title }
                    </li>
                )) }
            </ol>
        </>
    );
}

GiftGrid.propTypes = {
    category: PropTypes.string.isRequired,
};
