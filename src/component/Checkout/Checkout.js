import React, { useContext } from "react";
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";

const Checkout = () => {
    const { cart, total } = useContext(CartContext)
    return (
            <div>
                <h1>Detalle de Compra</h1>
                {cart.map((item) => (
                    <div key={item.id}>
                        <div>
                            <span><strong>{item.name}</strong></span>
                            <span>x {item.quantity}</span>
                            <span>${item.price * item.quantity}</span>
                        </div>
                    </div>
                ))}
                <h4>Total: ${total}</h4>
                <Link to='/'>
                    <button>
                        Seguir Comprando
                    </button>
                </Link>
                <Link to={{ pathname: '/orderConfirmation', state: { total: total } }}>
                    <button>
                        Finalizar Compra
                    </button>
                </Link>
            </div>

    );
};

export default Checkout;
