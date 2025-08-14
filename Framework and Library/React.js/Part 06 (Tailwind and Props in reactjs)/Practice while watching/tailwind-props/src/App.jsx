import './App.css'
import Card from './components/Card.jsx';

function App() {
  const myObj = {
    name: 'Ataullah',
    age: 19
  }

  const arr = [1, 2, 3]
  const sayHello = 'Hello'
  return (
    <>
      <Card
        heading="Science of Chemistry"
        data="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae temporibus"
        array={arr}
        say={sayHello}
      />
      <Card
        heading="Science of biology"
        data="error quidem quod reprehenderit pariatur rem quas repudiandae nesciunt facilis."
        array={arr}
      />
    </>
  );
}

export default App
