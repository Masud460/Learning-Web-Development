import './App.css'
import Card from './components/Card';

function App() {
  const myData = {name: 'Masud', age: 20}
  const myData2 = { name: 'Jobaer', age: 23 }
  const nums = [1, 2, 3]
  const nums2 = [3, 2, 1]
  return (
    <>
      <Card head={"Science of Biology"} userData={myData} numbers={nums} />
      <Card head={"Science of Chemistry"} userData={myData2} numbers={nums2} />
    </>
  );
}

export default App
