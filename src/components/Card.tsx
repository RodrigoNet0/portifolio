import "./Card.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Card () {
    return ( 
        <main>
<div>
    <div>
        <div className="container-img">
        <img src="https://avatars.githubusercontent.com/u/134714036?v=4" />
        <h1 className="name-title">Rodrigo Neto</h1>
        <p>Software Developer</p>
        </div>
        <section>
        <ul>
            <li><a href="#"><FaInstagram size={25}/></a></li>
            <li><a href="#"><FaLinkedinIn size={25}/></a></li>
            <li><a href="#"><FaGithub size={25}/></a></li>
        </ul>
        </section>
    </div>
    
</div>

        </main>
    );
}

export default Card