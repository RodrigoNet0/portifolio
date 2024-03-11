import  "./About.css";
import  picture from "./minhafotosemfundo.jpeg";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineCode } from "react-icons/hi";

function About (){
    return(
        <main>
            <div className="container-about">
                
                <img className="img-about" src={picture} alt="my picture"/>

<p className="about">
Olá, tudo bem? Me chamo Rodrigo Neto e sou <strong>desenvolvedor de software.</strong> 
  Minha paixão pela tecnologia surgiu muito cedo. Sempre gostei de jogos e computadores, 
 aquilo me fascinava. Eu sempre me perguntava como tudo aquilo era feito. 
 No entanto, o destino adiou esse sonho e tive que trabalhar em outras áreas, 
 mas sempre com o mesmo pensamento: “Como tudo aquilo era feito?”. Agora, aqui estou, realizando um sonho.
 <ul className="icons">
            <li><a href="#"><FaInstagram size={25}/></a></li>
            <li><a href="#"><FaLinkedinIn size={25}/></a></li>
            <li><a href="#"><FaGithub size={25}/></a></li>
    </ul>
</p>
</div>
</main>
    );
}

export default About