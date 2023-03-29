import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import CartWidget from "../CartWidget/CartWidget";


function NavBar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header>
            
            <nav ref={navRef}>
                    <a href="/#">Home</a>
                    <a href="/#">Saumerios & Hierbas</a>
                    <a href="/#">Velas</a>
                    <a href="/#">Complementos</a>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes/>
                    </button>   
            </nav>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaBars />
            </button>
            <CartWidget />
           
        </header>
    )
}

export default NavBar