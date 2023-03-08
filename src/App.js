import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Put from './put';
import { Route, Routes } from 'react-router-dom';
import Get from './entry';
import Deletion from './del';
import FirstPage from './first';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<FirstPage/>}   />
      <Route path='/post' element={<Get/>}   />
      <Route path='/get' element={<Table/>}   />
      <Route path='/put' element={<Put/>}/>
      <Route path='/del' element={<Deletion/>}/>
      
     </Routes>
    </div>
  );
}

export default App;
