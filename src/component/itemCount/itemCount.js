import React from "react";
import { useState } from "react";
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity+1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div class="Counter">
            <div class="Controls">
                <button class="Button" onClick={decrement}>
                    <FaChevronDown />
                </button>
                <h4 class="Number">{quantity}</h4>
                <button class="Button" onClick={increment}>
                    <FaChevronUp />
                </button>
            </div>
            <div>
                <button
                    class="Button"
                    onClick={() => onAdd(quantity)}
                    disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default ItemCount;