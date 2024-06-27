import styles from './Skils.module.css'
import javascript from'../../Img/javascript.svg'
import css from'../../Img/css.svg'
import html from'../../Img/html.svg'
import react from'../../Img/react.svg'
import typescript from'../../Img/typescript.svg'

function Skils (){
    return(
        <div className = {styles.skills} id="skills">
            <h1>Habilidades</h1>
            <p>Chonheça um pouco das minhas principais habilidades e conhecimentos</p>
        
            <div className = {styles.logos}>
                <img src = {javascript}/>
                <img src = {html}/>
                <img src = {css}/>
                <img src = {react}/>
                <img src = {typescript}/>
            </div>

        </div>
    )
}

export default Skils