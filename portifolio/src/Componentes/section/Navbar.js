import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'


function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#pesentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#project'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li> <a href='https://www.instagram.com/pedro_edilson18/'> <FaInstagram size={30}/> </a></li>
                <li> <a href='https://github.com/PedroGTK'> <FaGithub size={30}/></a>  </li>
                <li> <a href='https://www.linkedin.com/in/pedro-edilson-503533235/'> <FaLinkedinIn size={30}/></a>  </li>
                
            </ul>
        </div>
    )
}

export default Navbar