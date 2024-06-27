import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'



function Footer (){
    return(
        <div className={styles.footer}>
            <ul>
                <li> <a href='https://www.instagram.com/pedro_edilson18/'> <FaInstagram size={30}/> </a></li>
                <li> <a href='https://github.com/PedroGTK'> <FaGithub size={30}/></a>  </li>
                <li> <a href='https://www.linkedin.com/in/pedro-edilson-503533235/'> <FaLinkedinIn size={30}/></a>  </li>
            </ul>
            <div className={styles.thend}>
                <p>pedroedilson27@gmail.com</p>
                <p>Pedro Edilson Magalhães © 2024</p>
            </div>
        
        </div>
    )
}

export default Footer