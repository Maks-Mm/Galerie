import React from "react";
import Image from "./Image";
import IndividualImage from "./components/IndividualImage";
import Images from "./components/Images";
import { useState, useEffect } from "react";
import ImagesCard from "./components/ImagesCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=44193362-398485989173fdc6e8e0d1dde&q=yellow+flowers&image_type=photo&pretty=true`
    )
      // Version von Postman}https://pixabay.com/api/?key=44193362-398485989173fdc6e8e0d1dde&q=yellow+flowers&image_type=photo&pretty=true
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)}/>
    {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">
      Loading...
    </h1>: <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <ImagesCard key={image.id} image={image} />
        ))}
      </div>}
      <Image />
      <IndividualImage />
      <Images />
    </div>
  );
}

export default App;
