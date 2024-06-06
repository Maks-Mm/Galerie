import { useState, useEffect } from "react";
import ImagesCard from "./components/ImagesCard";
import ImageSearch from "./components/ImageSearch";
import './App.css'

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");




  useEffect(() => {
    // Version von Postman}https://pixabay.com/api/?key=44193362-398485989173fdc6e8e0d1dde&q=yellow+flowers&image_type=photo&pretty=true
    fetch(
      `https://pixabay.com/api/?key=44193362-398485989173fdc6e8e0d1dde&q=${term}&image_type=photo&pretty=true`
    )
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err => console.log(err));
}, [term]);

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)} />

      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <ImagesCard key={image.id} image={image} />
          ))}
        </div>
      )}
      <footer className="footer" >
       <p className="footer_text">&copy; 2024 Maxim Pryshchepa </p>
      </footer>
    </div>
  );
}

export default App;
