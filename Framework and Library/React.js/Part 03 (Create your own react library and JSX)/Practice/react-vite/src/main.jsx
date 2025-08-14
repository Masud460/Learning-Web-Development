import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';

function MyApp() {
  return (
    <h1>Yes, we've done it.</h1>
  )
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://youtube.com",
//     target: "_blank",
//   },
//   children: "Open YouTube",
// };

// const reactElementTwo = (
//   <a href="https://youtube.com" target="_blank">Open YouTube</a>
// )

const username = "Masud";
const reactElement = React.createElement(
  "a",
  {
    href: "https://youtube.com",
    target: "_blank"
  },
  "Open YouTube ",
  username
)

createRoot(document.getElementById("root")).render(

  // <App />

  reactElement

  // (
  //   <a href="https://youtube.com" target="_blank">Open YT</a>
  // )
);
