import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";


describe('Pruebas en <AddCategory />', () => {
    const category = 'Saitama';
    const mockFn = () => {};

    test('debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={mockFn} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: category } });
        expect(input.value).toBe(category);
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        render(<AddCategory onNewCategory={mockFn} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: category } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
    });

});