import React from 'react';

function IndividualImage({image}) {
  return (
    <div className='photo'>
      <img src={image.urls.small} alt="fotos"/>
    </div>
  )
}

export default IndividualImage
