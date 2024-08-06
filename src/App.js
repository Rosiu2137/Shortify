import './App.css';
import Header from './components/header/header'; 
import LinkPage from './components/linkPage/likePage';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">

        <Header />

        <Nav />


          <Routes>
    
            <Route path="/" element={<Home/>}/>
    
            <Route path='/:id' element={<LinkPage />}/>
    
          </Routes>
      
        <Footer />

    </div>
  );
}

export default App;


