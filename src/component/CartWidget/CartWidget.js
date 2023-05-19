import { useContext } from 'react';
import cart from './assets/cart-fill.svg'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';



const CartWidget = () => {
    const { cart, totalQuantity } = useContext(CartContext);

    return (
        <Link to='/cart' class='CartWidget' style={{
            display: totalQuantity > 0 ? 'block' : 'none'
        }}>
            <img class='CartImg' src={cart} alt='cart-widget' />
            {totalQuantity}
            </Link>
    );

}

export default CartWidget
