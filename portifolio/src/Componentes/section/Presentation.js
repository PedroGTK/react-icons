import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import { useEffect, useState } from 'react'



function Presentation (){

    const[text, setText] = useState('')
    const toRotate = ['Pedro Edilson!  ', 'Desenvolvedor Full Stack  ']
    const [loop, setLoop] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const period = 100;
    const [delta, setDelta] = useState(50)

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)
    
        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false)
            setDelta(period)
            setLoop(loop+1)
        }
    }

    useEffect(()=>{

        let ticker = setInterval(()=>{
            toType()
        },delta)
        return()=>{clearInterval(ticker)}

    },[text])

    


    return(
        <div className={styles.presentation} id="pesentation">

            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou {text}</h1>
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