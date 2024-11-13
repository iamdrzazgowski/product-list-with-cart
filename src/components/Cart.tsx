import CartList from './CartList';

function Cart({ cart, onDeleteProduct }) {
    const totalPrice = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className='cart-container'>
            <h2>Your cart ({totalItems})</h2>

            {totalItems !== 0 ? (
                <>
                    <CartList cart={cart} onDeleteProduct={onDeleteProduct} />

                    <div className='order-total-container'>
                        <span className='order-total-title'>Order Total</span>
                        <span className='order-total-price'>
                            <strong>${totalPrice.toFixed(2)}</strong>
                        </span>
                    </div>

                    <div className='carbon-neutral-container'>
                        <img src='/src/assets/images/icon-carbon-neutral.svg' />
                        <p>
                            This is a <span>carbon-neutral</span> dilevery
                        </p>
                    </div>

                    <button className='order-btn'>Confirm Order</button>
                </>
            ) : (
                <>
                    <div className='empty-cart'>
                        <img src='/src/assets/images/illustration-empty-cart.svg' />
                        <p className='empty-cart-text'>
                            Your added items will appear here
                        </p>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
