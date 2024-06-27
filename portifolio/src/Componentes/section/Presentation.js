import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'



function Presentation (){
    return(
        <div className={styles.presentation} id="pesentation">

            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou Pedro Edilson!</h1>
            <p>Sou um apaixonado por tecnologia e soluções inovadoras. <br></br>
                Por conta disso, estou em transição para a área de desenvolvimento full stack. <br></br>
                Já concluí diversos projetos e estou sempre em busca de aprender mais sobre programação. <br></br>
                Vem conhecer um pouco mais do meu trabalho!!! <br></br>
                </p>
        
                <ButtonA link = 'https://github.com/PedroGTK' text = 'Conecte-se comigo!! '></ButtonA>
                
                
                
        </div>
        
    )
}

export default Presentation