import CartList from './CartList';

function Cart() {
    return (
        <div className='cart-container'>
            <h2>Your cart (0)</h2>

            <CartList />
        </div>
    );
}

export default Cart;
