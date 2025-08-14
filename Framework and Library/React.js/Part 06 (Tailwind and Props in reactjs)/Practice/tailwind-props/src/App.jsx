import './App.css'
import Card from './components/Card.jsx'

function App() {
  const myObj = {
    name: 'Masud',
    age: 19
  }

  const myArr = [1, 2, 3]
  return (
    <>
      <Card head="Science of Chemstry" obj={myObj} />
      <Card head="Science of Biology" arr={myArr} />
    </>
  );
}

export default App
