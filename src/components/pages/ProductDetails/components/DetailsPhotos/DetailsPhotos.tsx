import React, { useState } from 'react';
import './DetailsPhotos.css';

interface IDetailsPhotos {
  images: string[];
}

function DetailsPhotos({ images }: IDetailsPhotos) {
  const [mainImage, setMainImage] = useState(images[0]);

  const changeMainImage = (e: React.MouseEvent | React.KeyboardEvent) => {
    const target = e.target as HTMLImageElement;
    setMainImage(target.src);
  };

  const imagesCollection = images.map((image, index) => {
    if (image.includes('thumbnail')) return null;

    const imageId = index + 1;

    return (
      <img
        src={image}
        key={imageId}
        alt='product'
        className='aside-photo'
        onClick={changeMainImage}
        role='presentation'
      />
    );
  });

  return (
    <div className='details-photos'>
      <div className='photos-main'>
        <img src={mainImage} alt='product' className='main-photo' />
      </div>
      <div className='photos-aside'>{imagesCollection}</div>
    </div>
  );
}

export default DetailsPhotos;
