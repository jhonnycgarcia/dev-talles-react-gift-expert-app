import { fireEvent, render, screen } from "@testing-library/react";
import { GiftExpertApp } from "../src/GiftExpertApp";


describe('Pruebas en <GiftExpertApp />', () => {

    const title = 'GiftExpertApp';
    const category = 'Saitama';

    test('debe mostrar el título', () => {
        const { getByText } = render(<GiftExpertApp />);
        expect(getByText(title)).toBeTruthy();
    });

    test('debe agregar una nueva categoría', () => {
        render(<GiftExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: category } });
        fireEvent.submit(form);
        expect(screen.getByText(category)).toBeTruthy();
    });

    test('no se debe agregar una categoría si ya existe', () => {
        render(<GiftExpertApp />);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: category } });
        fireEvent.submit(form);

        fireEvent.input(input, {target:{value: category}});
        fireEvent.submit(form);
        
        expect(screen.getAllByText(category).length).toBe(1);
    });

});