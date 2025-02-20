import { useState, useEffect } from "react";
import ImagesCard from "./components/ImagesCard";
import ImageSearch from "./components/ImageSearch";
import "./App.css";
//import.meta.env.VITE_API_KEY

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  // Version von Postman}https://pixabay.com/api/?key=44193362-398485989173fdc6e8e0d1dde&q=yellow+flowers&image_type=photo&pretty=true
  useEffect(() => {
    if (term) {
      console.log(import.meta.env.REACT_APP_PIXABAY_API_KEY)
      fetch(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
      )
        .then((res) => res.json())
        .then((data) => {
          setImages(data.hits);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
        });
   // console.log(term);
    }
  }, [term]);

  /*
  
  */

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)} />

      <div className="main">
        {isLoading ? (
          <h1 className="text-6xl text-center mx-auto mt-32">use search ...</h1>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {images.map((image) => (
              <ImagesCard key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>

      <footer className="footer">
        <p className="footer_text">&copy; 2024 Maxim Pryshchepa</p>
      </footer>
    </div>
  );
}

export default App;

/*   

*/
