import HowItWorksArticle from '../articles/howItWorksArticle';
import LinkArticle from '../linkArticle/linkArticle';
import WhyArticle from '../articles/whyArticle';
import About from '../articles/about';
import Welcome from '../welcome/welcome';
import styles from './home.module.css'

function Home()
{
    return(
        <main className={styles.main}>

        <Welcome />
        

        <LinkArticle />

        {/* <span className="line"></span> */}

        <HowItWorksArticle />

        {/* <span className="line"></span> */}

        <WhyArticle />

        {/* <span className="line"></span> */}

        <About />


    </main>
    )
}

export default Home

