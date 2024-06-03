import React from "react";
import { useState, useEffect } from "react";

function ImagesCard() {
  const [images, setImages] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [term,setTerm] = useState('');

  useEffect(()=>{
fetch(`https://pixabay.com/api/?key=&q=yellow+flowers&image_type=photo&pretty=true`)
  });

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        src=""
        alt="kostenmitten.png"
        className="w-full"
        width={500}
        height={1000}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photos by Amatorie
        </div>
        <ul>
          <li>
            <strong>Views:3400</strong>
          </li>
          <li>
            <strong>comments:1400</strong>
          </li>
          <li>
            <strong>Likes:2400</strong>
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          # Tag 1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          # Tag 2
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          # Tag 3
        </span>
      </div>
    </div>
  );
}

export default ImagesCard;
