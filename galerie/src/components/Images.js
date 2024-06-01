import React from "react";
import IndividualImage from "./IndividualImage";

function Images({ images }) {
  return (
    <div className="">
      <div className="">
        {images.map((image) => (
          <IndividualImage key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

export default Images;
