import { render, screen } from "@testing-library/react";
import { GiftGrid } from "../../src/components/GiftGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GiftGrid />', () => {
    const category = 'One Punch';

    test('debe renderizar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GiftGrid category={category} />);
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.queryByText(category)).toBeTruthy();
    });

    test('debe mostrar items cuando se cargan las imágenes de la API', () => {
        const mockGifs = [
            { id: '1', title: 'One Punch', url: 'https://media2.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=e93ddaacz1584r9i1wmkmnpu497c8362x8lpx0ldukkmvx9h&ep=v1_gifs_search&rid=giphy.gif&ct=g' },
            { id: '2', title: 'Dragon Ball', url: 'https://media2.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=e93ddaacz1584r9i1wmkmnpu497c8362x8lpx0ldukkmvx9h&ep=v1_gifs_search&rid=giphy.gif&ct=g' },
        ];
        useFetchGifs.mockReturnValue({
            images: mockGifs,
            isLoading: false,
        });
        render(<GiftGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(mockGifs.length);
    });

});