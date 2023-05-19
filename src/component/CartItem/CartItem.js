import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, name, price, quantity }) => {
    const { eraseItem } = useContext(CartContext);

    const handleRemove = () => {
        eraseItem(id);
    };

    return (
        <tr>
            <td>{name}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td>${price * quantity}</td>
            <td>
                <button onClick={handleRemove}>Eliminar</button>
            </td>
        </tr>
    );
};

export default CartItem;