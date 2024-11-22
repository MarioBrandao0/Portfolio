import { useState } from 'react';
import './styles/App.css';
import SobreMim from './components/SobreMim';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='body'>
      <SobreMim />
      <div id='teste'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quibusdam provident dolor earum quaerat quasi, ratione rerum molestiae quam velit tempore quos sequi alias maxime quod dicta nam fugiat! Placeat.</p>
      </div>
    </div>
  );
}

export default App;
