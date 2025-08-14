import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {

  const user = {
    name: 'Ataullah Masud',
    age: 19,
    state: 'intermediate'
  }

  const dates = [1, 2, 3]
  return (
    <>
      <Card head="Science of Chemistry" obj={user} date={dates} />
      <Card head="Science of Biology" obj={user} date={dates} />
    </>
  );
}

export default App
