import React from "react";
import Image from "./Image";
import IndividualImage from "./components/IndividualImage";
import ImagesCard from "./components/ImagesCard";
import Images from "./components/Images";
import JsonServer from "./components/JsonServer";


function App() {
  return (
    <div>
  <JsonServer/>
      <ImagesCard />
      <Image />
      <IndividualImage />
      <Images />
    </div>
  );
}

export default App;
