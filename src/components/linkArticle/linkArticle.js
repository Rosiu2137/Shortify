import { useEffect, useRef, useState } from 'react'
import styles from './linkArticle.module.css'
import ButtonLoading from '../../assets/svg/buttonLoading'
import axios from 'axios'
import serverAddress from '../serverAddress'
import alphabetRandomChar from '../../helpers/alphabetRandomChar'
function LinkArticle(props)
{

    const [inputValue,setInputValue] = useState('')
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')
    const buttonRef = useRef()


    const innerBottomBorderRef = useRef()

     const inputFocused = ()=>
    {
        innerBottomBorderRef.current.classList.add(styles.innerBottomBorderFilled)
    }   

    const inputBlur = ()=>
    {
        innerBottomBorderRef.current.classList.remove(styles.innerBottomBorderFilled)
    }


    const send = async()=>
    {
        setLoading(true)
        try
        {

            const id = []
            for(let i =0;i<3;i++)
            {
                id.push(alphabetRandomChar())
            }
            for(let i = 0;i<3;i++)
            {
                id.push(Math.floor(Math.random() * 10))
            }
            const idJoined = id.join('')

            
            const response = await axios.post(`${serverAddress}/${idJoined}.json`, {link:inputValue})

            props.setShortedLink(`shortify-cut.web.app/${idJoined}`)

            props.successHandler(true)
            setLoading(false)
            setError('')

        }
        catch(ex)
        {
            setError("Serwer nie odpowiada. Sprubój ponownie później.")
            setLoading(false)
        }
    }


    const validateLink = ()=>
    {
        if(!loading)
        {
            setError('')
            
            const value = inputValue.trim()
            if(value != '')
            {
                if(value.includes("http://") || value.includes("https://"))
                {
                    send()

                }
                else
                {
                    setError("Wprowadź poprawny link")
                }
            }
            else
            {
                setError("Wpisz lub wklej link")
                setLoading(false)
            }
        }
        
    }

    const keyDownFunc = (e)=>
    {

        if(e.key=== "Enter")
        {
            buttonRef.current.click()
        }
    }

    useEffect(()=>{
        window.addEventListener("keydown",keyDownFunc)
        
        return()=>{
            window.removeEventListener("keydown",keyDownFunc)
            
        }
    },[])

    return(
        <article className={styles.linkArticle}>
            <h1>
                Wklej link tutaj
            </h1>

            <div className={styles.inputCon}>
                <input type="text" id="input" placeholder="https://website.domain/..." disabled={loading} onFocus={inputFocused} onBlur={inputBlur} value={inputValue} onChange={e=>setInputValue(e.target.value)}/>
                <div className={styles.bottomBorder}>
                    <div className={styles.innerBottomBorder} ref={innerBottomBorderRef}></div>
                </div>
            </div>

            {error && <h3 className={styles.error}>{error}</h3>}

            <button className={loading?styles.loadingButton:''} ref={buttonRef} onClick={validateLink}>{loading?<ButtonLoading cl={styles.loading}/>:"Generuj link"}</button>



        </article>
    )
}

export default LinkArticle