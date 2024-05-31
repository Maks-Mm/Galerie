import React from 'react';
import IndividualImage from './IndividualImage';

function Images({ images }) {
  //  console.log(images);
  return (
    <div className="images-grid">
      {images.map((image) => (
        <IndividualImage key={image.id} image={image} />
      ))}
    </div>
  );
}

export default Images;
