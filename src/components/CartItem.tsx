function CartItem({ product }) {
    return (
        <li>
            <div className='cart-item-details'>
                <span className='product-name'>{product.name}</span>
                <div className='price-details'>
                    <span className='quantity'>{product.quantity}x</span>
                    <span className='price'>@ ${product.price.toFixed(2)}</span>
                    <span className='total-price'>
                        ${(product.quantity * product.price).toFixed(2)}
                    </span>
                </div>
            </div>

            <button className='remove-btn'>
                <img src='/src/assets/images/icon-remove-item.svg' />
            </button>
        </li>
    );
}

export default CartItem;
