import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home.js';
import { About } from './About/About.js';
import { AlbumDetail } from './AlbumDetail/AlbumDetail.js';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><NavLink to='/' activeclassname='active'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/detail/:id' element={<AlbumDetail />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
