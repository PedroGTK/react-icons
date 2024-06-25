import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'



function Presentation (){
    return(
        <div className={styles.presentation} id="pesentation">

            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou Pedro Edilson!</h1>
            <p>Sou um apaixonado por tecnologia e soluções inovadoras. <br></br>
                Como Product Manager, eu tenho o compromisso de resolver problemas <br></br>
                complexos e trazer resultados excepcionais para os negócios. <br></br>
                Meus projetos já geraram milhões de reais em receita anual<br></br>
                estou sempre em busca de novos desafios para superar</p>
        
                <ButtonA link = 'https://github.com/PedroGTK' text = 'Conecte-se comigo!! '></ButtonA>
                
                
                
        </div>
        
    )
}

export default Presentation