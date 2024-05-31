import React from 'react';
import IndividualImage from './IndividualImage';


function Images({ images }) {
  return (
    <div className="container mx-auto">
    <div className='grid grid-cols-3 gap-4'>

      {images.map((image) => (
        <IndividualImage key={image.id} image={image} />
      ))}
    </div>
    </div>
  );
}

export default Images;
