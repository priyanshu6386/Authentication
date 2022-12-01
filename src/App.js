import './App.css';
import Navbar from './components/Navbar';
import {Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Profile from './components/Profile';
import NavbarComponent from './components/Navbar';
function App() {
  return (
    <div className="bg-black h-screen w-screen  text-slate-200">
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
