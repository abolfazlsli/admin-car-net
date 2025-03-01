import logo from './logo.svg';
import './App.css';
import { NavLink, Route, Routes } from 'react-router';

function App() {
  return (
   <>
   {/* Header */}
    <Routes>
        <Route path='/' element={(<><NavLink to={"/about"}>HEllo </NavLink></>)} />
        <Route path='/about' element={(<><p>a </p></>)} />

    </Routes>
   </>
  );
}

export default App;
