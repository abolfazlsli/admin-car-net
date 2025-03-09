import './App.css';
import { NavLink, Route, Routes } from 'react-router';
import Home from './screens/Home';
import Brands from './screens/brands';
import AddBrands from './screens/addbrands';
function App() {
  return (
   <>
   {/* Header */}
    <Routes>
        <Route path='/' element={(<Home/>)} />
        <Route path='/about' element={(<><p>a </p></>)} />
        <Route path='/brands' element={(<Brands/>)} />
        <Route path='/addbrands' element={(<AddBrands/>)} />

    </Routes>
   </>
  );
}

export default App;
