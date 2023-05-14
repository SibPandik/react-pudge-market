import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Market from './pages/Market';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/market" element={<Market/>}/>
        </Routes>
      </div>
    </div>  
    );
}

export default App;
