import React from 'react';
import IndividualImage from './IndividualImage';

function Images({images}) {
   // console.log(images);
  return images.map = ((image) => (
    <IndividualImage key={image.id} image={image}/>
  ))
  }


export default Images;
