export const getGifs = async( categories ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ categories }&limit=10&api_key=b6hOQ0ozU969AJJ1ljsbBMSM8EFBrKJd`;
    const resp = await fetch( url ); 
    const { data } = await resp.json(); 

    const gifts = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifts; 
}