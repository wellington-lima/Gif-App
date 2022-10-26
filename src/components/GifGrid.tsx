import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

interface Category {
  category: string
}

export interface IImage {
  id: number
  title: string
  url: string
}

export const GifGrid = ({ category }: Category) => {

  const { images, isLoading } = useFetchGifs(category);

  return(
    <>
      <h2> { category && (<span>Gifs sobre { category }</span>) }</h2>

      {
        isLoading && (<h2>Carregando...</h2>)
      }

      <div className='card-grid'>
        { images.map((image: IImage) => (
          <GifItem 
            key={ image.id } 
            { ...image }
          />
          ))
        }
      </div>
    </>
  );
}