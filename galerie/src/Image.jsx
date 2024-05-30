import React from 'react';

function Image({ image, handleRemove, index }) {
  return (
    <div className="image-item">
      <img src={image} alt="Aircraft" />
      <button onClick={() => handleRemove(index)}>Remove</button>
    </div>
  );
}

export default Image;