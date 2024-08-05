import { useRef } from 'react'
import styles from './linkArticle.module.css'

function LinkArticle()
{
    const innerBottomBorderRef = useRef()

    const inputFocused = ()=>
    {
        innerBottomBorderRef.current.classList.add(styles.innerBottomBorderFilled)
    }   

    const inputBlur = ()=>
    {
        innerBottomBorderRef.current.classList.remove(styles.innerBottomBorderFilled)
    }

    return(
        <article className={styles.linkArticle}>
            <h1>
                Wklej link tutaj
            </h1>

            <div className={styles.inputCon}>
                <input type="text" id="input" placeholder="https://website.domain/..." onFocus={inputFocused} onBlur={inputBlur}/>
                <div className={styles.bottomBorder}>
                    <div className={styles.innerBottomBorder} ref={innerBottomBorderRef}></div>
                </div>
            </div>

            <button>Generuj link</button>

        </article>
    )
}

export default LinkArticle