import React from "react";

function ImagesCard() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        src="kostenmitten.png"
        alt="kostenmitten.png"
        className="w-full"
        width={200}
        height={300}
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
