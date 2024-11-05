import PropTypes from 'prop-types';

import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const newValue = inputValue.trim();
        if(newValue.length <= 1) { return; }
        console.log('dentro', newValue);
        onNewCategory(newValue);
        setInputValue('');
    };

    return (
        <form onSubmit={onSubmit} aria-label='form'>
            <input
                type="text"
                placeholder="Buscar Gifts"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
};
