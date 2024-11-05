import { getGiftsByCategory } from "../../src/helpers/getGiftsByCategory";


describe('Pruebas en helper getGiftsByCategory', () => {

    test('debe retornar un array de gifs', async() => {
        const gifs = await getGiftsByCategory('One Punch');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    }) ;

});