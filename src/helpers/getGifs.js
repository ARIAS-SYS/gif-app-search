
export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=MF7THGI1na4OcAq22jyn4s9b3oORNQKo&q=${ category }&limit=10`;

    const request = await fetch(url);
    const { data } = await request.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    console.log(gifs);
    return gifs;

}