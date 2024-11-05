import { render } from "@testing-library/react";
import { GiftItem } from "../../src/components/GiftItem";


describe('Pruebas en <GiftItem />', () => {

    const title = 'One Punch Man GIF';
    const url = 'https://media2.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=e93ddaacz1584r9i1wmkmnpu497c8362x8lpx0ldukkmvx9h&ep=v1_gifs_search&rid=giphy.gif&ct=g';

    test('debe hacer match con el snapshot', () => {
        const { container } = render(<GiftItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

});