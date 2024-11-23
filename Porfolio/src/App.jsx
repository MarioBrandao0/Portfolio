import { useState } from 'react';
import './styles/App.css';
import SobreMim from './components/SobreMim';
import Contatos from './components/Contatos';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='body'>
      <SobreMim />
      <Contatos />
    </div>
  );
}

export default App;
