import {  Route, Routes,HashRouter, Outlet } from 'react-router-dom';
import Twoplayer from './twoplayer';
import  './styles.scss';
import Button from './button';

const App = () => {
  return (
  <div>
    <HashRouter>
      <h1 className='class'>
        TIC <span className="text-green">TAC</span> TOE
      </h1>  
      <Button/>
      <Routes>
        <Route path='/twoplayer.jsx' element={<Twoplayer />} />
      </Routes>
      </HashRouter>
      </div>
  );
  
}


export default App;