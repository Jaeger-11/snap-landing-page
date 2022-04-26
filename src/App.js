import React,{useState} from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';

function App() {
  const [drop1, setDrop1] = useState(false);
  const [drop2, setDrop2] = useState(false);

  const closeAll = () => {
    setDrop1(false);
    setDrop2(false);
  }
  return (
    <div>
      <Navbar  drop1={drop1} drop2={drop2} setDrop1={setDrop1} setDrop2={setDrop2} closeAll={closeAll} />
      <Hero closeAll={closeAll}/>
    </div>
  );
}

export default App;
