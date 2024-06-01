import React,{useState,useEffect} from "react";

function App() {

  const [images,setImages] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [term,setTerm] = useState('');

  const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

  console.log("Access Key:", process.env.REACT_APP_UNSPLASH_ACCESS_KEY);

  useEffect(()=>{
    const query = "nature";
fetch(`https://unsplash.com/documentation#search-photos`)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
  },[])

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        src="https://www.theeuropean.de/fileadmin/_processed_/4/d/csm_shutterstock_1564437634_33466207f1.webp"
        alt="nts"
        width={450}
        height={250}
        className="w-full"
      />
      <div className="px-6 p-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photos by Author
        </div>
        <ul>
          <li>
            <strong>Uberblicke:</strong>
            4000
          </li>
          <li>
            <strong>Einladungen:</strong>
            300
          </li>
          <li>
            <strong>Likes:</strong>
            400
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #Tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #Tag2
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #Tag3
        </span>
      </div>
    </div>
  );
}

export default App;
