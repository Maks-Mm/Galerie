import React from "react";
import Image from "./Image";
import IndividualImage from "./components/IndividualImage";
import ImagesCard from "./components/ImagesCard";
import Images from "./components/Images";
import { useState, useEffect } from "react";

function App() {
  const [fotos, setFotos] = useState("");

  useEffect(() => console.log(""));

  return (
    <div>
      <Image />
      <IndividualImage />
      <ImagesCard />
      <Images />
    </div>
  );
}

export default App;
