import {  Route, Routes,BrowserRouter} from 'react-router-dom';
import Twoplayer from './twoplayer';
import  './styles.scss';
import img from './th.jpg';
import Button from './button';
import { Computer } from '@mui/icons-material';

const App = () => {
  return (
    <div className='bg-balls'>
    <div className='app'>
      <h1 className='class'>
        TIC <span className="text-green">TAC</span> TOE
      </h1> 
    <img src={img} className='btn-reset2'/>
    <BrowserRouter>
      <Routes>
      <Route path='/computer.jsx' element={<Computer />} />
      <Route path='/twoplayer.jsx' element={<Twoplayer />} />
      </Routes>
      <Button/>
      </BrowserRouter>
      </div>
      </div>
  );
  
}


export default App;