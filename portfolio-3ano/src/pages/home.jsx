import { Link } from "react-router-dom"

function Home(){
   

    return(
        <>
    <div class="topnav">
      <a class="active"><Link to={'/'}>Início</Link></a>
      <Link to={'/curriculo'}><a>Currículo</a></Link>
      <Link to={'/matrias'}><a>Matérias</a></Link>
    </div>
    
    <p id='sobre'>vovovoodsofosdfjiisdj</p>
        </>
    )
}
export {Home}