import './App.css';
import LinkPage from './components/linkPage/likePage';

import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">

          <Routes>
    
            <Route path="/" element={<Home/>}/>
    
            <Route path='/:id' element={<LinkPage />}/>
    
          </Routes>
      
    </div>
  );
}

export default App;

//dodac działanie na entera


