import "./Card.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineCode } from "react-icons/hi";

function Card () {
    return ( 
        <main>
<header>
    <h1>Rodrigo Neto <HiOutlineCode /> </h1>
    <ul>
            <li><a href="#"><FaInstagram size={25}/></a></li>
            <li><a href="#"><FaLinkedinIn size={25}/></a></li>
            <li><a href="#"><FaGithub size={25}/></a></li>
    </ul>
</header>

        </main>
    );
}

export default Card




 