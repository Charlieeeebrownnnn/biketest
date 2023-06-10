import './App.css';
import './components/Navbar'
import { Routes, Route, Link } from "react-router-dom";

import Home from './components/Home';
import Mobile from './components/Mobile';
import Baritem from './components/Baritem';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nav" element={<Home />}>
        </Route>
      </Routes>


      <Routes>
      <Route path="/mobile" element={<Mobile />} />

      </Routes>
      <Routes>
        <Route path="/mobilebar" element={<Baritem />} />

      </Routes>
    </div>
  );
}

export default App;
