/* eslint-disable react/prop-types */
import { ImageDecoTopIcon, ImageDecoDownIcon } from '../assets';

function HighlightImage({ img, alt, style }) {
  return (
    <div className='relative order-1'>
      {style === 'top' && (
        <ImageDecoTopIcon className='absolute -left-4 -top-4 h-auto w-8 md:-left-10 md:-top-10 md:w-20' />
      )}
      {style === 'bottom' && (
        <ImageDecoDownIcon className='absolute -bottom-4 -right-4 h-auto w-8 md:-bottom-10 md:-right-10 md:w-20' />
      )}
      {style === 'both' && (
        <>
          <ImageDecoTopIcon className='absolute -left-4 -top-4 h-auto w-8 md:-left-10 md:-top-10 md:w-20' />
          <ImageDecoDownIcon className='absolute -bottom-4 -right-4 h-auto w-8 md:-bottom-10 md:-right-10 md:w-20' />
        </>
      )}
     <img src={img} alt={alt} />
    </div>
  );
}

export default HighlightImage;
