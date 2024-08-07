import HowItWorksArticle from '../articles/howItWorksArticle';
import LinkArticle from '../linkArticle/linkArticle';
import WhyArticle from '../articles/whyArticle';
import About from '../articles/about';
import Welcome from '../welcome/welcome';
import styles from './home.module.css'
import Header from '../header/header'; 
import Nav from '../nav/nav';
import Footer from '../footer/footer';
import { useState } from 'react';
import LinkSuccess from '../linkSucces/linkSucces';
function Home()
{

    const [success,setSuccess] = useState(true)
    const [shortedLink,setShortedLink] = useState('')


    const successHandler = (value)=>
    {
        setSuccess(value)
    }


    return(
        <>
        <Header />
        
        <Nav />


        <main className={styles.main}>

        <Welcome />
        

        {success?<LinkSuccess successHandler={successHandler} shortedLink={shortedLink}/>:<LinkArticle successHandler={successHandler} setShortedLink={setShortedLink}/>}

       

        {/* <span className="line"></span> */}

        <HowItWorksArticle />

        {/* <span className="line"></span> */}

        <WhyArticle />

        {/* <span className="line"></span> */}

        <About />

        </main>

        <Footer />
    </>
    )
}

export default Home

