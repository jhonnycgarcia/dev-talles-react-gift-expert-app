import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";


describe('Pruebas en <AddCategory />', () => {
    const category = 'Saitama';
    const mockFn = jest.fn();

    test('debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={mockFn} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: category } });
        expect(input.value).toBe(category);
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: category } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(category);
    });

    test('no debe de llamar onNewCategory si el input no tiene un valor', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onNewCategory).not.toHaveBeenCalled();
    });

});