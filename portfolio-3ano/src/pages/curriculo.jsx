import { Link } from "react-router-dom"

function Curriculo(){
    return(
     <>
        <div class="topnav">
        <a ><Link to={'/'}>Início</Link></a>
        <Link class="active" to={'/curriculo'}><a >Currículo</a></Link>
        <Link to={'/materias'}><a>Matérias</a></Link>
      </div>
    </>
    )
}
export {Curriculo}