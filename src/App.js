import logo from './logo.svg';
import './App.css';
import AddCart from './components/AddCart';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import SearchCart from './components/SearchCart';
import ViewAll from './components/ViewAll';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<AddCart/>}/>
    <Route path="/Search" element={<SearchCart/>}/>
    <Route path="/View" element={<ViewAll/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
