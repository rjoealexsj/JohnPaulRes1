import logo from './logo.svg';
import './App.css';
import img1 from './img1.jpg';

function App() {
  return (
 
 <div >
   <div>
     <h1>
     hi jesuits... how r u all 
     </h1>
     <img src={img1} />
   </div>
    
<div style={{textAlign:'center'}}>
  <h2>
  i am a fresher.... 
  </h2>
  <img src={img1} />
  </div>

<div style={{textAlign:'right', fontSize:'120px', display: 'none'}}>
    <h3>

  so bear with me...
 </h3>
 < img src={img1} />

 </div>
  </div>

  );
}

export default App;
