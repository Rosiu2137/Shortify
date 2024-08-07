import CopyIcon from '../../assets/svg/copyIcon'
import styles from './articlesStyle.module.css'
import PasteIcon from '../../assets/svg/pasteIcon'
import LinkIcon from '../../assets/svg/linkIcon'
import WebsiteIcon from '../../assets/svg/websiteIcon'
import { useEffect, useState } from 'react'


let time = 0
let time2 = 1500
function HowItWorksArticle()
{

    const [strokeOn,setStrokeOn] = useState(false)

    const animationFunc = ()=>
    {
        time = 0
        time2 = 1500
        const list = [...document.querySelectorAll('.listItem')]
        list.forEach((x,idx)=>{
            setTimeout(() => {
                if(idx === 2)
                {
                    setStrokeOn(true)
                    x.classList.add(styles.animation2)
                }
                else
                {
                    x.classList.add(styles.animation)

                }
            }, time+=1500);
        })
        list.forEach((x,idx)=>{
            setTimeout(() => {
                    if(idx === 2)
                    {
                        setStrokeOn(false)
                        x.classList.remove(styles.animation2)
                    }
                    else
                    {
                        x.classList.remove(styles.animation)

                    }
            }, time2+=1500);
        })

        setTimeout(() => {
            animationFunc()
        }, 8000);

    }

    useEffect(()=>{
       animationFunc()
    },[])


    return(
        <article className={styles.article} id="howItWorks">
            <h2>Jak to działa?</h2>
            <ol className={styles.list}>
                <li className='listItem'>
                    <CopyIcon cl={styles.icon}/>
                    Kopiujesz link który chcesz skrócić
                </li>
                <li className='listItem'>
                    <PasteIcon cl={styles.icon}/>
                    Wklejasz link i klikasz generuj
                </li>
                <li className='listItem'>
                    <LinkIcon cl={styles.icon2} cl2={strokeOn?styles.icon2StrokeOn:styles.icon2Stroke}/>
                    Otrzymujesz swój skrócony link
                </li>
                <li className='listItem'>
                    <WebsiteIcon cl={styles.icon}/>
                    Poprzez skrócony link docierasz łatwiej do swoich stron
                </li>
            </ol>
        </article>
    )
}

export default HowItWorksArticle