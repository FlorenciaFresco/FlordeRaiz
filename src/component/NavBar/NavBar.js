import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <div>
                <Link to="/">
                    <h3>Flor de Raiz</h3>
                </Link>
            </div>
            <div className="Categories">
                <NavLink
                    to={'/category/Saumerios & Hierbas'}
                    className={({ IsActive }) => (IsActive ? "ActiveOption" : "Option")}
                >
                    Saumerios & Hierbas
                </NavLink>
                <NavLink
                    to={'/category/Velas'}
                    className={({ IsActive }) => (IsActive ? "ActiveOption" : "Option")}
                >
                    Velas{" "}
                </NavLink>
                <NavLink
                    to={'/category/Complementos'}
                    className={({ IsActive }) => (IsActive ? "ActiveOption" : "Option")}
                >
                    Complementos
                </NavLink>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;