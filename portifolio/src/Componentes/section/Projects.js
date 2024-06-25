import styles from './Projects.module.css'
import ButtonB from '../elements/ButtonB'
import Card from '../elements/Card'
import DNC from '../../Img/projects/DNC.svg'
import portifolio from '../../Img/projects/portifolio.jpeg'
import academia from '../../Img/projects/academia.jpeg'
import aquitetura from '../../Img/projects/aquitetura.jpeg'
import ccxp from '../../Img/projects/ccxp.jpeg'
import API from '../../Img/projects/API.jpeg'


function Projects (){
    return(
        <div  className = {styles.projects} id='project'>
            <h1>Projetos</h1>
            
            <div>
                <Card 
                    img={portifolio}
                    title= "Meu Protifolio"
                    tech = " React"
                    description=" Desenvolvimento de um portfólio destinado a apresentar de forma resumida todos os meus conhecimentos e características. "
                    repo='https://github.com/PedroGTK/react-icons'
                    site='https://www.figma.com/design/eSXxtUyIh9BDSTi7KRCfBe/React-para-Desenvolvimento-web?node-id=1-2'
                />


                <Card 
                    img = {DNC}
                    title= "LP-DNC"
                    tech = " HTML, CSS e JS"
                    description=" Desenvolvimento de uma Landing page para o lançamento da fromação em tecnologia"
                    repo='https://github.com/PedroGTK/Desafio_LPDNC'
                    site=''
                />
            </div>
            <div>
                <Card 
                    img= {academia}
                    title= "Controle de Academia"
                    tech = " Nunjucks, CSS, JS e TS"
                    description=" Desenvolvimento de uma pagina de controle de academia, no qual o propreitario terá acesso as informações dos seus funcinários "
                    repo='https://github.com/PedroGTK/controle_de_academia'
                    site='https://www.figma.com/design/eSXxtUyIh9BDSTi7KRCfBe/React-para-Desenvolvimento-web?node-id=1-2'
                />

                <Card 
                    img={aquitetura}
                    title= "LP-Arquitetura"
                    tech = " HTML, CSS e JS"
                    description=" Desenvolvimento de uma Landing page para uma enpresa de arquitetura"
                    repo='https://github.com/PedroGTK/Landing-Page-Arquiterura'
                    site='https://www.figma.com/design/eSXxtUyIh9BDSTi7KRCfBe/React-para-Desenvolvimento-web?node-id=1-2'
                />
            </div>

            <div>
                <Card 
                    img={ccxp}
                    title= "Pagina CCXP"
                    tech = " HTML, CSS e JS"
                    description=" Desenvolvimento de uma pagina voltada para informações de um evento, infomrando quantos dias falta até esse evento"
                    repo='https://github.com/PedroGTK/desafioccxp'
                    site='https://www.figma.com/design/eSXxtUyIh9BDSTi7KRCfBe/React-para-Desenvolvimento-web?node-id=1-2'
                />

                <Card 
                    img={API}
                    title= "CEP e CLIMA"
                    tech = " HTML, CSS e JS"
                    description=" Desenvolvimento e integraçãoes de API mostrando o local e o clima presente nele "
                    repo='https://github.com/PedroGTK/DesafioAPI_CEP'
                    site='https://www.figma.com/design/eSXxtUyIh9BDSTi7KRCfBe/React-para-Desenvolvimento-web?node-id=1-2'
                />
            </div>
            
        </div>
    )
}

export default Projects