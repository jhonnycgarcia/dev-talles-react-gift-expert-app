import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


describe('Pruebas en hook useFetchGifs', () => {
    const category = 'One Punch';

    test('debe retornar el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs(category));
        const { images, isLoading } = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('debe retornar un arreglo de imagenes y isLoading falso', async() => {
        const { result } = renderHook(() => useFetchGifs(category));
        await waitFor(
            // () => result.current.isLoading === false
            () => expect(result.current.images.length).toBeGreaterThan(0),
            { timeout: 5000 }
        );

        expect(result.current.isLoading).toBeFalsy();
        expect(result.current.images.length).toBeGreaterThan(0);
    });


});