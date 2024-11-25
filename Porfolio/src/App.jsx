import { useState } from 'react';
import './styles/App.css';

import Habilidades from './components/Habilidades';
import SobreMim from './components/SobreMim';
import Contatos from './components/Contatos';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='body'>
      <div className="overlay"></div>
      <SobreMim />
      <Contatos />
      <Habilidades />
    </div>
  );
}

export default App;
