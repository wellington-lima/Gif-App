import { IImage } from "./GifGrid";

export const GifItem = ({ title, url }: IImage) => {
  return(
    <div className='card'>
      <img src={ url } alt={ title } />  {title}
    </div>
  )
}