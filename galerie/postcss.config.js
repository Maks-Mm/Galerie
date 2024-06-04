/*

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ],
};



const tailwindcss = require('tailwindcss');

module.exports = {
    plugins:[
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ]
}
*/

  //eventuell muss ich ./ dafur 

  module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // oder 'media' oder 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };
  
  