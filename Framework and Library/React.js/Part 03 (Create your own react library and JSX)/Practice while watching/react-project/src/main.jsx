import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function App() {
//   return (
//     <h1>Hello, My name is Ataullah Masud !</h1>
//   )
// }

const username = " Poweredby Masud";

const reactElement = React.createElement(
  'a',
  {
    href: "https://google.com",
    target: "_blank"
  },
  'Click me to visit google',
  username
)

createRoot(document.getElementById("root")).render(reactElement );
