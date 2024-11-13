import CartItem from './CartItem';

function CartList({ cart, onDeleteProduct }) {
    return (
        <ul>
            {cart.map((product) => (
                <CartItem
                    product={product}
                    key={product.id}
                    onDeleteProduct={onDeleteProduct}
                />
            ))}
        </ul>
    );
}

export default CartList;
