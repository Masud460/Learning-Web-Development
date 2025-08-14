import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyNewApp() {
//   return (
//     <h1>My new app is ready to launch</h1>
//   )
// }

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://youtube.com",
//     target: "_blank",
//   },
//   children: "Open YouTube",
// };

// const reactElement = (
//   <a href="https://youtube.com" target='_blank'>Open YouTube</a>
// )

const username = "Masud"

const reactElement = React.createElement(
  "a",
  {
  href: "https://youtube.com",
      target: "_blank",
  },
  "Open YouTube ",
  username
);

createRoot(document.getElementById("root")).render(
  // <App />
  reactElement
);
