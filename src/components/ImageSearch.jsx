import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
   searchText(text);
  console.log(text)
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b-2 border-gray-500 py-2">
          <input
            onChange={(e) => setText(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-800 mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-gray-400 mx-2" // Added mx-2 for margin
            type="text"
            placeholder="Search Image Term..."
          />
          <button
            className="flex-shrink-0 bg-black hover:bg-gray-800 border-black hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
