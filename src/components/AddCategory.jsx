import { useState } from "react"

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('One Push');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted', inputValue);
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gifts"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
}
