import { useEffect, useState } from 'react'
import styles from './linkPage.module.css'
import img from '../../assets/img/shortifyLogo.png'
import LoadingIcon from '../../assets/svg/loadingIcon'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import serverAddress from '../serverAddress'

function LinkPage()
{
    let [dots,setDots] = useState("")
    const [error,setError] = useState('')
    
    const navigation = useNavigate()

    const link = useParams()

    const forwarding = async()=>
    {
        try
        {
            const response = await axios.get(`${serverAddress}/${link.id}.json`)
            const usersLink = (Object.values(response.data))[0].link
            location.href = usersLink
        }
        catch(ex)
        {
            console.log(ex)
        }
    }


    useEffect(()=>{
        forwarding()

    },[])

    useEffect(()=>{


        setTimeout(() => {
            setDots(dots+=".")
            if(dots.length == 4)
            {
                setDots('')
            }
        }, 400);
        
    },[dots])



    return(
        <article className={styles.article}>

            <img src={img} className={styles.logo}/>

            <LoadingIcon cl={styles.loadingIcon}/>

            <h1>Trwa przekierowywanie{dots}</h1>
        </article>
    )
}

export default LinkPage