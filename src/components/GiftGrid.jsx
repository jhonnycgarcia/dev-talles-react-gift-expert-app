import PropTypes from 'prop-types';

import { GiftItem } from './GiftItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

export const GiftGrid = ({ category }) => {

    const { images, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3 aria-label='category-title'>{category}</h3>

            { isLoading && <h2>Cargando...</h2> }

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
