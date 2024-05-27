
import "./App.css";
import React, { useState, useEffect } from "react";

/**
 https://www.youtube.com/watch?v=FiGmAI5e91M&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb&index=3
 time(18.44)
 */

function App() {
  

  const API_URL = 'https://api.api-ninjas.com/v1/cars';
  const API_KEY = 'DEIN_API_SCHLÜSSEL';
  const model = 'camry';
  
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        src="https://cdn.pixabay.com/photo/2019/04/23/06/47/flower-4148707_1280.png"
        alt="cdn.pixabay.com"
        className="w-full"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
         Fotos eines Autors
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
