"use client";

import React from "react";

function ImagesCard() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img
      src="https://images.unsplash.com/photo-1714138667818-b545353d768a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTc4MTF8MXwxfGFsbHwxfHx8fHx8Mnx8MTcxNzIzODY0M3w&ixlib=rb-4.0.3&q=80&w=400"
      alt="batman"
      className="w-full"
      width={""}
      height={""}
    />
    
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">Photos by Author</div>
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
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Tag1</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Tag2</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Tag3</span>
      </div>
    </div>
  );
}

export default ImagesCard;
