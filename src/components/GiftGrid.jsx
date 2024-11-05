import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { getGiftsByCategory } from '../helpers/getGiftsByCategory';



export const GiftGrid = ({ category }) => {

    
    useEffect(() => {
        getGiftsByCategory(category);
    
    //   return () => {
    //     second
    //   }
    }, [ ])
    

    return (
        <>
            <h3>{category}</h3>
            <p>Hola Mundo</p>
        </>
    )
}

GiftGrid.propTypes = {
    category: PropTypes.string.isRequired,
};
