import Button from './Button';
import OrderList from './OrderList';

function Modal({ cart, onStartNewOrder }) {
    return (
        <div className='modal'>
            <div className='modal-card'>
                <div className='order-comfirmed-details'>
                    <img src='/src/assets/images/icon-order-confirmed.svg' />
                    <h2>Order Confirmed</h2>
                    <p>We hope you enjoy your food!</p>
                </div>

                <OrderList cart={cart} />

                <Button
                    className='new-order-btn'
                    onClick={() => onStartNewOrder()}>
                    Start New Order
                </Button>
            </div>
        </div>
    );
}

export default Modal;
