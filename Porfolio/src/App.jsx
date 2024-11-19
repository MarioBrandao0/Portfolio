import { useState } from 'react';
import './styles/App.css';
import SobreMim from './components/SobreMim';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SobreMim />
    </>
  );
}

export default App;
