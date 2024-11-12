import CartList from './CartList';

function Cart({ cart }) {
    console.log(cart);
    return (
        <div className='cart-container'>
            <h2>Your cart (0)</h2>

            <CartList cart={cart} />

            <div className='order-total-container'>
                <span className='order-total-title'>Order Total</span>
                <span className='order-total-price'>
                    <strong>$46.50</strong>
                </span>
            </div>

            <div className='carbon-neutral-container'>
                <img src='/src/assets/images/icon-carbon-neutral.svg' />
                <p>
                    This is a <span>carbon-neutral</span> dilevery
                </p>
            </div>

            <button className='order-btn'>Confirm Order</button>
        </div>
    );
}

export default Cart;
