import { Link } from "react-router-dom"

function Home(){
   
    return(
        <>
    <div class="topnav">
      <Link class="active" to={'/'}><a >Início</a></Link>
      <Link to={'/curriculo'}><a>Currículo</a></Link>
      <Link to={'/materias'}><a>Matérias</a></Link>
    </div>
    <div id="texPort">
        <h1>PORTFÓLIO </h1>
        <h2>3° ANO</h2>
    </div>
    <p id="antPorts"><a href="https://docs.google.com/presentation/d/1yYTOQ4iysLcwYueJDF6ozdh9WfViBUeNvfymKco-WAQ/edit?usp=sharing">PORTFÓLIO 1°</a> 
    /<a href="https://www.canva.com/design/DAFcz1OMxSM/KTE_Cy7XJAk1O6UI8azihg/edit?utm_content=DAFcz1OMxSM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">PORTFÓLIO 2°</a></p>
        </>
    )
}
export {Home}