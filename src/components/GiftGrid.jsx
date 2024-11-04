import PropTypes from 'prop-types';

export const GiftGrid = ({ category }) => {

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
