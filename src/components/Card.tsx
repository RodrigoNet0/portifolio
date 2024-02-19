import "./Card.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Card () {
    return ( 
        <>
<div className="container-card">
    <div className="img-name">
        <img src="https://avatars.githubusercontent.com/u/134714036?v=4" />
        <h1>Rodrigo Neto</h1>
        <p>Software Developer</p>
        <section>
        <ul>
            <li><a href="#"><FaInstagram size={40}/></a></li>
            <li><a href="#"><FaLinkedinIn size={40}/></a></li>
            <li><a href="#"><FaGithub size={40}/></a></li>
        </ul>
        </section>
    </div>
    
</div>

        </>
    );
}

export default Card