import './App.css';
import Header from './components/header/header'; 
import HowItWorksArticle from './components/articles/howItWorksArticle';
import LinkArticle from './components/linkArticle/linkArticle';
import WhyArticle from './components/articles/whyArticle';
import About from './components/articles/about';
import Nav from './components/nav/nav';
import Welcome from './components/welcome/welcome';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
        <Header />

        <Nav />

        <main>

            <Welcome />
            

            <LinkArticle />

            {/* <span className="line"></span> */}

            <HowItWorksArticle />

            {/* <span className="line"></span> */}

            <WhyArticle />

            {/* <span className="line"></span> */}

            <About />


        </main>
            <Footer />
    </div>
  );
}

export default App;

// dodac animacje do jak to działa
