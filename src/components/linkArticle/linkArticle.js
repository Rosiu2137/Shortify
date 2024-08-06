import { useRef, useState } from 'react'
import styles from './linkArticle.module.css'
import ButtonLoading from '../../assets/svg/buttonLoading'
function LinkArticle()
{

    const [inputValue,setInputValue] = useState('')
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')


    const innerBottomBorderRef = useRef()

     const inputFocused = ()=>
    {
        innerBottomBorderRef.current.classList.add(styles.innerBottomBorderFilled)
    }   

    const inputBlur = ()=>
    {
        innerBottomBorderRef.current.classList.remove(styles.innerBottomBorderFilled)
    }



    const validateLink = ()=>
    {
        if(!loading)
        {
            console.log("valid")
            setError('')
            setLoading(true)
            const value = inputValue.trim()
            if(value != '')
            {
                
            }
            else
            {
                setError("Wpisz lub wklej link")
                setLoading(false)
            }
        }
        
    }

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

            <button className={loading?styles.loadingButton:''} onClick={validateLink}>{loading?<ButtonLoading cl={styles.loading}/>:"Generuj link"}</button>



        </article>
    )
}

export default LinkArticle