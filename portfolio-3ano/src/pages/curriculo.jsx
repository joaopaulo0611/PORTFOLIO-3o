import { Link } from "react-router-dom"

function Curriculo(){
    return(
     <>
        <div class="topnav">
        <a class="active"><Link to={'/'}>Início</Link></a>
        <Link to={'/curriculo'}><a>Currículo</a></Link>
        <Link to={'/materias'}><a>Matérias</a></Link>
      </div>
    </>
    )
}
export {Curriculo}