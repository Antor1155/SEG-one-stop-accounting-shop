import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Others from './components/Others';
import About from './components/About';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorFile from './components/ErrorFile';
import New from './components/New';
import Post from './components/Post';

function App() {
  return (

      <div className="App">
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="others" element={<Others></Others>} />
          <Route path="about" element={<About></About>}>
            <Route path="new" element={<New></New>} />
            <Route path=':postId' element={<Post></Post>} />
          </Route>
          <Route path="/*" element={<ErrorFile></ErrorFile>} />
        </Routes>
      </div>
  );
}

export default App;
