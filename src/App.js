import './App.css';
import { Route, Routes } from 'react-router';
import Home from './screens/Home';
import Brands from './screens/brands';
import AddBrands from './screens/addbrands';
import AdminInfo from './screens/admininfo';
import Sidebar from './components/sidebar/sidebar';
import Navbar from './components/navbar/navbar';
function App() {
  return (
   <>
   {/* Header */}
   <div className='flex justify-start'>
    <div className='w-[20%] h-[100px] bg-white'>
      <Sidebar/>
    </div>
    <div className='w-[100%] h-[100px] bg-white '>
        <Navbar/>
        <Routes>
            <Route path='/' element={(<Home/>)} />
            <Route path='/about' element={(<><p>a </p></>)} />
            <Route path='/brands' element={(<Brands/>)} />
            <Route path='/addbrands' element={(<AddBrands/>)} />
            <Route path='/admininfo' element={(<AdminInfo/>)} />
        </Routes>
      </div>
    </div>
   </>
  );
}

export default App;
