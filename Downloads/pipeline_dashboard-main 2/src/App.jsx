import { useState } from 'react'
import './App.css'
import NodeDistanceViewer from './components/NodeDistanceViewer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className='bg-amber-600'>npm create vite@latest</h1>
      <p className="text-white">Count: {count}</p>
      <button onClick={() => setCount(count + 1)} className="bg-blue-500 text-white px-4 py-1 mt-2">
        Increment
      </button>
    </div>
  );
}

export default App
