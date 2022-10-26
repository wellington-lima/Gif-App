interface IGif {
  id: number
  title: string
  url: string
  images: {
    downsized_medium: {
      url: string
    }
  }
}

export const getGifs = async(category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=HsHyOm01LBZ0UgB8dyKqUkdrMAf87kMz&q=${ category }&limit=5`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img: IGif) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));

  return gifs;
  
}