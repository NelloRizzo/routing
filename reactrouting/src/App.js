import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home.js';
import { About } from './About/About.js';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/about' element={<About />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
