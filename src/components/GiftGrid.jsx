import PropTypes from 'prop-types';
import { getGiftsByCategory } from '../helpers/getGiftsByCategory';



export const GiftGrid = ({ category }) => {

    getGiftsByCategory(category);

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
