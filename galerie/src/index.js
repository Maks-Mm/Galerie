import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
//import "./assets/tailwind.css";
import "./assets/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
Resoursen (Time 06:23)

https://www.youtube.com/watch?v=FiGmAI5e91M&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb&index=4
In this project we will integrate Tailwind CSS with React and build an image gallery app with the Pixabay API

https://pixabay.com/api/?key=44193362-398485989173fdc6e8e0d1dde&q=yellow+flowers&image_type=photo&pretty=true


*/
