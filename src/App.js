import React from 'react';
import './App.css';
import picProfile from './photo2.avif'
function App() {
  return (
    <div className="App">

  <div style={{border:'solid',fontSize:'1px',color:'black',maxWidth:'100vw'}}>
    <h1 className='titel'>khaloula</h1>
    <br></br>

<img src='../photo1.avif' alt='pic'/>
<br></br>
<img src={picProfile} alt='pic'/>
</div>

    </div>
  );
}

export default App;
