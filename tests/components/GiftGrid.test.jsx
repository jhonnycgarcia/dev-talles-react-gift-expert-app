import { render, screen } from "@testing-library/react";
import { GiftGrid } from "../../src/components/GiftGrid";

describe('Pruebas en <GiftGrid />', () => {
    const category = 'One Punch';

    test('debe renderizar el loading inicialmente', () => {
        render(<GiftGrid category={category} />);
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.queryByText(category)).toBeTruthy();
    });

    test('debe mostrar items cuando se cargan las imágenes de la API', () => {
        
    });

});