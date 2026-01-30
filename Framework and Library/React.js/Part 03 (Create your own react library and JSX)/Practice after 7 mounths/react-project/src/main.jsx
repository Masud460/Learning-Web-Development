import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from './App.jsx'

function App() {
  const myName = 'Ataullah Masud'
  return (
    <>
      <h1>My name is: { myName }</h1>
    </>
  );
}

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://www.google.com',
//     target: "_blank"
//   },
//   children: "click here to visit google"
// }

const ReactElement = React.createElement(
  "a",
  {
    href: "https://www.google.com",
    target: "_blank",
  },
  "Click here to visit google",
);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />
  // </StrictMode>
);
