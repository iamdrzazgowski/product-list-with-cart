import OrderItem from './OrderItem';

function OrderList({ cart }) {
    const totalPrice = cart
        ? cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
        : 0;

    return (
        <div className='order-list-container'>
            <ul
                className='order-list'
                style={cart.length >= 4 ? { overflowY: 'auto' } : {}}>
                {cart
                    ? cart.map((product) => (
                          <OrderItem product={product} key={product.id} />
                      ))
                    : null}
            </ul>
            <div className='order-total-container'>
                <span className='order-total-title'>Order Total</span>
                <span className='order-total-price'>
                    <strong>${totalPrice.toFixed(2)}</strong>
                </span>
            </div>
        </div>
    );
}

export default OrderList;
