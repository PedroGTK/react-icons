import styles from './Projects.module.css'
import ButtonB from '../elements/ButtonB'
import Card from '../elements/Card'
import DNC from '../../Img/projects/DNC.svg'
import portifolio from '../../Img/projects/portifolio.svg'

function Projects (){
    return(
        <div  className = {styles.projects} id='project'>
            <h1>Projetos</h1>
            <Card 
                img = {DNC}
                title= "LP-DNC"
                tech = "HTML, CSS e JS"
                description=" Desenvolvimento de uma Landing page para o lançamento da fromação em tecnologia"
                repo=''
                site='https://www.figma.com/design/eSXxtUyIh9BDSTi7KRCfBe/React-para-Desenvolvimento-web?node-id=1-2'
            />
            
            <Card 
                img={portifolio}
                title= "Meu Protifolio"
                tech = "React"
                description=" Desenvolvimento de um portfólio destinado a apresentar de forma abrangente todos os meus conhecimentos e características. "
                repo=''
                site='https://www.figma.com/design/eSXxtUyIh9BDSTi7KRCfBe/React-para-Desenvolvimento-web?node-id=1-2'
            />

            <Card 
                img = {DNC}
                title= "LP-DNC"
                tech = "HTML, CSS e JS"
                description=" Desenvolvimento de uma Landing page para o lançamento da fromação em tecnologia"
                repo=''
                site='https://www.figma.com/design/eSXxtUyIh9BDSTi7KRCfBe/React-para-Desenvolvimento-web?node-id=1-2'
            />

            <Card 
                img={portifolio}
                title= "Meu Protifolio"
                tech = "React"
                description=" Desenvolvimento de um portfólio destinado a apresentar de forma abrangente todos os meus conhecimentos e características."
                repo=''
                site='https://www.figma.com/design/eSXxtUyIh9BDSTi7KRCfBe/React-para-Desenvolvimento-web?node-id=1-2'
            />

            
        </div>
    )
}

export default Projects