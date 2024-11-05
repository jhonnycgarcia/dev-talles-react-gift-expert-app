export const getGiftsByCategory = async(category) => {

    const queryParams = new URLSearchParams({
        api_key: import.meta.env.VITE_GIPHY_API_KEY,
        q: category,
        limit: 20,
    });

    const url = `https://api.giphy.com/v1/gifs/search?${queryParams}`;

    const resp = await fetch(url);
    const { data = [] } = await resp.json();

    const gifs = data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
    }));
    // console.log(gifs)
    return gifs;
}