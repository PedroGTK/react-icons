import styles from './Card.module.css'
import { useState } from 'react'
import ButtonB from '../elements/ButtonB'

function Card ({img,title,tech, description, repo, site }){
    
    const [info, setInfo] = useState(false)

    function InfoOn(){
        setInfo(true)
    }

    function InfoOFF(){
        setInfo(false)
    }
    
    
    
    return(
        <div  onMouseEnter={InfoOn} onMouseLeave={InfoOFF}  className ={styles.card} id='card'>
            <a  href={site}>
                <img src = {img} alt ='Error'></img>
            </a>

            {
                info === true  && (
                    <div className= {styles.info}>
                        <h3> {title} </h3>
                        <p><strong>Tecnologia:</strong>{tech}</p>
                        <p> {description} </p>
                        <ButtonB text='Acesse o repositório' link={repo}/>
                    </div>
                )
            }

            

        </div>
    )
}

export default Card