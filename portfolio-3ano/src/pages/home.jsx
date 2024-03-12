import { Link } from "react-router-dom"

function Home(){
   
    return(
        <>
    <div class="topnav">
      <a class="active"><Link to={'/'}>Início</Link></a>
      <Link to={'/curriculo'}><a>Currículo</a></Link>
      <Link to={'/materias'}><a>Matérias</a></Link>
    </div>
    <div>
        <h1>PORTFÓLIO </h1>
        <h1>3° ANO</h1>
    </div>
        </>
    )
}
export {Home}