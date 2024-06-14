
import './App.css';
import Navbar from './Componentes/section/Navbar'
import Presentation from './Componentes/section/Presentation';
import Projects from './Componentes/section/Projects';
import Skils from './Componentes/section/Skils';
import Footer from './Componentes/section/Footer';


function App() {
  return (
    <div className="APP">
      <Navbar/>
      <Presentation/>
      <Skils/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
