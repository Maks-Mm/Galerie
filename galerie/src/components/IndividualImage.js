import React from "react";

//warscheinlich ist die Liste fur die Ordnung des Desings ist

function IndividualImage({ image }) {
  return (
    <div className="block">
      <div className="">
        <img src={image.urls.small} alt="fotos" />
      </div>
    </div>
  );
}

export default IndividualImage;
