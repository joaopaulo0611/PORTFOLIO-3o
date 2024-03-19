import { Link } from "react-router-dom";

function Materias(){

    return(
    <>
        <div class="topnav">
            <a><Link to={'/'}>Início</Link></a>
            <Link to={'/curriculo'}><a>Currículo</a></Link>
            <Link to={'/materias'} class="active"><a>Matérias</a></Link>
        </div>
    </>
        
    )
}
export {Materias}