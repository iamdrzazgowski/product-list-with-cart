function CartList() {
    return (
        <ul>
            <li>
                <div className='cart-item-details'>
                    <span className='product-name'>Classic Tiramisu</span>
                    <div className='price-details'>
                        <span className='quantity'>1x</span>
                        <span className='price'>@ $5.50</span>
                        <span className='total-price'>$5.50</span>
                    </div>
                </div>

                <button className='remove-btn'>
                    <img src='/src/assets/images/icon-remove-item.svg' />
                </button>
            </li>
            <li>
                <div className='cart-item-details'>
                    <span className='product-name'>Classic Tiramisu</span>
                    <div className='price-details'>
                        <span className='quantity'>1x</span>
                        <span className='price'>@ $5.50</span>
                        <span className='total-price'>$5.50</span>
                    </div>
                </div>

                <button className='remove-btn'>
                    <img src='/src/assets/images/icon-remove-item.svg' />
                </button>
            </li>
        </ul>
    );
}

export default CartList;
