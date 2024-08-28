import  './styles.scss';
import images from './Com 512.png';
import image from './Two 512.png';
const App = () => {
  return (
  <div>
      <h1 className='class'>
        TIC <span className="text-green">TAC</span> TOE
      </h1>  
       <img className="buttons" src={images} alt='imagee'/> 
       <img className="buttons" src={image} alt='imagee'/> 
      </div>
  );
  
}


export default App;