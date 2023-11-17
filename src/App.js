import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './components/Index';
import View from './components/View';
import Search from './components/Search';
import Delete from './components/Delete';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
<Route path='' element={<Register/>}/>
<Route path='view' element={<View/>}/>
<Route path='search' element={<Search/>}/>
<Route path='delete' element={<Delete/>}/>
<Route path='add' element={<Index/>}/>
<Route path='login' element={<Login/>}/>

    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
