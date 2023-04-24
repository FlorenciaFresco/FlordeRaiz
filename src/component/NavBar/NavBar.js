
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <nav class="NavBar">
                <Link to='/'>
                    <h3>Flor de Raiz</h3>
                </Link>
                <div class="Categories">
                    <NavLink to={`/category/Saumerios & Hierbas`} className={({ IsActive }) => IsActive ? "ActiveOption" : "Option"}>
                        Saumerios & Hierbas
                    </NavLink>
                    <NavLink to={`/category/Velas`}className={({ IsActive }) => IsActive ? "ActiveOption" : "Option"}>
                        Velas
                    </NavLink>
                    <NavLink to={`/category/Complementos`} className={({ IsActive }) => IsActive ? "ActiveOption" : "Option"}>
                        Complementos
                    </NavLink>
                </div>
                <CartWidget />
            </nav>
        </header>
    );
};

export default NavBar;
