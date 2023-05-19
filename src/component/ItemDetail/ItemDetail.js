import { useContext, useState } from "react";
import ItemCount from "../itemCount/itemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const { addItem } = useContext(CartContext)
    
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        const item = {
            id, name, price
        };
        addItem(item, quantity)
    }
    
    return (
        <article className="CardItem">
            <div className="Detail">
                <header className="Header">
                    <h2 className="ItemHeader">{name}</h2>
                </header>
                <picture>
                    <img src={img} alt="name" className="ItemImg" />
                </picture>
                <section>
                    <p className="Info">Categoria: {category}</p>
                    <p className="Info">Descripcion: {description}</p>
                    <p className="Info">Precio: {price}</p>
                </section>
            </div>
            <footer className="ItemFooter">
                { quantityAdded > 0 ? 
                    ( <Link to="/">Seguir comprando </Link>)
                    (<Link to='/cart' class='Option'> Terminar Complar</Link>) :
                    ( <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />)
                }
            </footer>
        </article>
    );
};

export default ItemDetail;