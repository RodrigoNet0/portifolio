import { FaLinkedinIn } from "react-icons/fa";

import "./Footer.css";

function Footer (){
    return ( 
        <main>
<div className="container-footer">
    
    <h1 className="title-footer">Vamos trabalhar juntos ?</h1>
    <div className="lets-work">
    <h2 className="title-h2">Conecte-se comigo<a href="#"> <FaLinkedinIn color="blue" size="25" /></a></h2>
    <h2 className="project-git">Acompanhe meus projetos</h2>
    </div>
</div>
        </main>
    );
}

export default Footer