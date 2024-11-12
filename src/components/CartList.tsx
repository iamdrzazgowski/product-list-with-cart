import CartItem from './CartItem';

function CartList({ cart }) {
    return (
        <ul>
            {cart.map((product) => (
                <CartItem product={product} key={product.id} />
            ))}
        </ul>
    );
}

export default CartList;
